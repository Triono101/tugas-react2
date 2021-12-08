import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

export default class Boostrap extends React.Component {

    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand>TRIONO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#bio">Biography</Nav.Link>
                        <NavDropdown title="Contact" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="https://tri.co.id/" target="blank">Phone</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://web.telegram.org/z/" target="blank">Telegram</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/triono_101/" target="blank">
                            Instagram
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search Google"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button className="btn btn-outline-success" variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}