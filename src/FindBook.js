import React, { Component } from 'react'

export class FindBook extends Component {
    render() {
        return (
            <div>



                <form  onSubmit={this.props.addBookFun}>
                    <input type="text" name='bookTitle' placeholder='enter book' />
                    <input type="text" name='bookDescription' placeholder='enter book description' />
                    <input type="submit" value="get books" />

                </form>




            </div>
        )
    }
}

export default FindBook


































































































// import axios from 'axios';
// import React from 'react'
// import { withAuth0 } from '@auth0/auth0-react';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       Books: []
//     }
//   }

//   componentDidMount = async ()=>{
//     console.log('inside componentDidMount')

//     let email1 = this.props.auth0.user.email
//     let booksData = await axios.get(`${process.env.REACT_APP_SERVER}/getbooksOwner?email=${email1}`)
//     this.setState({
//         books: booksData.data

//     })
//     console.log(email1);
//     console.log('aaaaaaaaaa',this.state.books)
//   }

// //   getCats = async (e) => {
// //     e.preventDefault();

// //     let ownerName = e.target.catOwner.value;
// //     console.log(ownerName);

// //     // localhost:3001/getbooksOwner?ownerName=razan
// //         let booksData = await axios.get(`${process.env.REACT_APP_SERVER}/getbooksOwner?email=${email}`)
// //     this.setState({
// //       books: booksData.data
// //     })
// //     console.log(this.state.books)

// //   }

//   render() {
//     return (
//       <div>
//         {/* <form onSubmit={this.getbooks}>
//           <label>Enter your name</label>
//           <input type="text" name='catOwner' />
//           <input type="submit" value="get books" />
//         </form> */}
//         {/* render the books data */}
//         {/* {this.state.books.map
//         <Cat/>} */}
//       </div>
//     )
//   }
// }




// export default withAuth0(App);