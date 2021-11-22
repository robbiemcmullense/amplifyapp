import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>SE Engage</Navbar.Brand>
                    </LinkContainer>    

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/covid">
                                <Nav.Link>Covid</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer to="/weather">
                                <Nav.Link>Weather</Nav.Link>
                            </LinkContainer>      
                        </Nav>
                   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
