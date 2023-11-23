import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'react-bootstrap/Button';

import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            {/* Navbar component from react-bootstrap */}
          <Navbar.Brand href="#home">My First App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Container className="mt-4">
            {/* Heading  */}
            <h1>Welcome to My First React App</h1>

            <Row className="mt-4">
            {/* Card 1  */}
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Card 1</Card.Title>
                        <Card.Text>This is a sample card with some content.</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            {/* Card 2  */}
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Card 2</Card.Title>
                        <Card.Text>Another sample card with some content.</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/* Card 3 */}
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                        <Card.Title>Card 3</Card.Title>
                        <Card.Text>One more sample card with some content.</Card.Text>
                    </Card.Body>
              </Card>
            </Col>
        </Row>
        {/*form */}
        <InputGroup className="mb-3">
       
        </InputGroup>
        <InputGroup className="mb-3">
            <Form.Control
            placeholder="write your email"
            aria-label="write your email"
            aria-describedby="basic-addon2"
            />
        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
        </InputGroup>

        <InputGroup>
            <InputGroup.Text>Write your opinion</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
        </InputGroup>
        </Container>
      </div>
      
    </React.Fragment>
  );
}

export default App;