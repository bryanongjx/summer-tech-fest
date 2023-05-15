import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Summer TechFest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link} to = "/">Home</Nav.Link>
              <Nav.Link as={Link} to = "/resources">Resources</Nav.Link>

              <NavDropdown title="Schedule" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to = "/schedule">Overall Schedule</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to = "schedule/week1/zoom">Week 1</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week2/zoom">Week 2</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week3/zoom">Week 3</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week4/zoom">Week 4</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week5/zoom">Week 5</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week6/zoom">Week 6</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week7/zoom">Week 7</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week8/zoom">Week 8</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week9/zoom">Week 9</NavDropdown.Item>
                <NavDropdown.Item as={Link} to = "schedule/week10/zoom">Week 10</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;