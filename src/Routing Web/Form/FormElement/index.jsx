import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";


export default class FormElement extends React.Component {

    render() {
        return(
            <Navbar expand="lg" bg="primary" variant="dark" className="navbar1">
                <Container fluid>
                    <h2 className="font">Tugas Form Registrasi - Eduwork</h2> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}