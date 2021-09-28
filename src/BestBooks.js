import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Books: [],
    }
  }

  componentDidMount = async () => {
    console.log('inside componentDidMount')

    let email1 = this.props.auth0.user.email
    let BooksData = await axios.get(`${process.env.REACT_APP_SERVER}/getbooksOwner?email=${email1}`)

    console.log(('wewew'),BooksData.data);
    this.setState({
      Books: BooksData.data

    })
    console.log(email1);
    console.log('aaaaaaaaaa', this.state.books)
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

        {this.state.Books.length > 0 && this.state.Books.map((ele,index) => {

          return (

            <Card key={index} style={{ width: '18rem' }}>

              <Card.Body>
                <Card.Title>{ele.title} </Card.Title>
                <Card.Text> {ele.description}  </Card.Text>
                <Card.Text>{ele.email}</Card.Text>

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
