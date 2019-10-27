
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import './style.css';


function AddStudent() {

    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Add Student
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add student to schedule</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* TODO ADD ID FOR CAPTURING DATA */}
                <Form>
                    <Form.Row>
                        <Col>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Student List</Form.Label>
                            {/* TODO ADD FOR IMPORTING STUDENT NAME DATA */}
                            <Form.Control as="select">
                            <option>Alice Alvarez</option>
                            <option>Brien Bartlow</option>
                            <option>Carol Christmas</option>
                            <option>Daniel Davis</option>
                            <option>Erin Erickson</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Monthly Fee</Form.Label>
                        <Form.Control type="number" placeholder="$" />
                    </Form.Row>

                    <Form.Row>
                        <Col>
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" />
                        </Col>
                        <Col> 

                        {/* TODO CHANGE TIME TO MILITARY                    */}
                        <Form.Label>Tutor Session Time</Form.Label>
                        <Form.Control type="time" />
                        </Col>
                    </Form.Row>

      
                    <Form.Row>
                        <Form.Label>Tutor Session Subject</Form.Label>
                        <Form.Control type="text" placeholder="Curriculum" />
                    </Form.Row>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                Save
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default AddStudent;