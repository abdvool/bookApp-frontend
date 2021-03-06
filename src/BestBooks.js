import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FindBook from './FindBook';
import UpdateBookForm from './UpdateBookForm';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Books: [],
      ownerNamee: ' ',
      show: false,

      selectedElement:{},
    }
  }

  componentDidMount = async () => {
    console.log('inside componentDidMount')

    let email1 = this.props.auth0.user.email
    let BooksData = await axios.get(`${process.env.REACT_APP_SERVER}/getbooksOwner?email=${email1}`)

    console.log(('wewew'), BooksData.data);
    this.setState({
      Books: BooksData.data,


    })
    console.log(email1);
    console.log('aaaaaaaaaa', this.state.books)
  }



  addBook = async (e) => {
    e.preventDefault()
    console.log('addCatFun');

    // firstway
    let bookTitle = e.target.bookTitle.value
    let bookDescription = e.target.bookDescription.value
    let ownerName = this.props.auth0.user.email


    let newBooksData = await axios.get(`${process.env.REACT_APP_SERVER}/addBook?ownerName1=${ownerName}&bookTitle1=${bookTitle}&bookDescription1=${bookDescription}`)
    console.log(newBooksData.data);

    // when you use post it will be like this secondway 

    // let bookFormInfo ={

    //    bookTitle : e.target.bookTitle.value,
    //    bookDescription :e.target.bookDescription.value,
    //    ownerName : this.props.auth0.user.email


    // }

    // let newBooksData = await axios.post(`${process.env.REACT_APP_SERVER}/addBook`,bookFormInfo)

    // -----------------------
    await this.setState({

      Books: newBooksData.data
    })
  }
  // ---------------------

  deleteBooks = async (ele) => {



    let id = ele._id
    let email = this.props.auth0.user.email

    console.log(id);
    let deleteBooksData = await axios.get(`${process.env.REACT_APP_SERVER}/deleteBooks?bookId=${id}&email=${email}`)


    console.log(deleteBooksData.data);
    await this.setState({


      Books: deleteBooksData.data
    })
    // console.log(this.state.Books);

  }
  // ---------------------------

  updateBook = async (ele) => {
console.log(ele);

    let email = this.props.auth0.user.email

    let upData = await axios.put(`${process.env.REACT_APP_SERVER}/update/${ele._id}?email=${email}`, ele)

    
    this.setState({

      Books: upData.data,


    })

  }

  // ------------------------

  showModal = async (ele) => {


    this.setState({

      show:true,
      selectedElement:ele
    })


  }
// -----------------

handleClose = () =>{


  
  this.setState({

    show:false,
  })
}









  render() {
    return (

      <>

        <Jumbotron>

          <h1>My Favorite Books</h1>

          <p>
            This is a collection of my favorite books
          </p>

        </Jumbotron>


        <FindBook

          addBookFun={this.addBook}

        />
        {this.state.Books.length > 0 && this.state.Books.map((ele, index) => {

          return (

            <Card key={index} style={{ width: '18rem' }}>

              <Card.Body>
                <Card.Title>{ele.title} </Card.Title>
                <Card.Text> {ele.description}  </Card.Text>
                <Card.Text>{ele.email}</Card.Text>
                <button onClick={() => this.deleteBooks(ele)}>  X  </button>
                <button onClick={() => this.showModal(ele)} >  Update  </button>



              </Card.Body>

            </Card>



          )
        })
        }


<UpdateBookForm 
updateBook={this.updateBook}
show={this.state.show}
handleClose={this.handleClose}
selectedElement={this.state.selectedElement}
/>







      </>

    )
  }
}

export default withAuth0(MyFavoriteBooks);
