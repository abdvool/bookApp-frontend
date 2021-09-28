import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FindBook from './FindBook';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Books: [],
      ownerNamee: ' '
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

    // when you use post it will be like this secondway 

    // let bookFormInfo ={

    //    bookTitle : e.target.bookTitle.value,
    //    bookDescription :e.target.bookDescription.value,
    //    ownerName : this.props.auth0.user.email


    // }

    // let newBooksData = await axios.post(`${process.env.REACT_APP_SERVER}/addBook`,bookFormInfo)

    // -----------------------
    // this.setState({

    //   Books : newBooksData.data
    // })
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
                <button>X</button>
              </Card.Body>

            </Card>
          )
        })
        }
      </>

    )
  }
}

export default withAuth0(MyFavoriteBooks);
