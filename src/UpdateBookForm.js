import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap/';

export class UpdateBookForm extends Component {


    handleUpdateBook = (e) => {
        e.preventDefault();
        let updatedBook = { _id: this.props.selectedElement._id,
             description: e.target.bookDescription.value,
              email: e.target.email.value, 
              title: e.target.bookTitle.value, }
        console.log(updatedBook);
        this.props.updateBook(updatedBook);
        this.props.handleClose();
    }





    render() {
        return (

            <>
                <div>



                    <Modal show={this.props.show} onHide={this.props.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form  onSubmit={this.handleUpdateBook}  >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label  >Enter bookname</Form.Label>
                                    <Form.Control type="text" name='bookTitle' defaultValue={this.props.selectedElement.title} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label  >enter email</Form.Label>
                                    <Form.Control type="text" name='email'   defaultValue={this.props.selectedElement.email}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>enter book description</Form.Label>
                                    <Form.Control type="text" name='bookDescription'   defaultValue={this.props.selectedElement.description}  />
                                </Form.Group>
                                <Button variant="secondary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                        </Modal.Footer>
                    </Modal>
                </div>

            </>

        )


    }
}

export default UpdateBookForm
