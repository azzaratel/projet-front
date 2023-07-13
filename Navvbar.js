import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navvbar() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <div className='logo'>
        <img className='logo' src='https://as1.ftcdn.net/v2/jpg/00/41/75/60/1000_F_41756080_tHKZffs3R68zU21pkyeBBXz1dYWj9pxs.jpg' alt=''/>
        </div>
        
        <Navbar.Brand href="#">Chez Chouba</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Shop</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            <Nav.Link href="#action2">About us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navvbar