import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AhmtR.</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
