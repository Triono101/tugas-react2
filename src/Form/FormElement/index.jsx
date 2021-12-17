import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from "react-bootstrap";


export default class FormElement extends React.Component {

    render() {
        return(
            <Navbar expand="lg" bg="primary" variant="dark" className='navbar'>
                <Container fluid>
                    <   Button id="btn" href="https://eduwork.id/student/74/class/curriculum"
                            target="blank">Validation</Button>
                    <h2 className="font">Tugas Form Registrasi - Eduwork</h2> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Button className="penutup" id='btn1' rel="stylesheet" href="https://www.google.com/maps/place/Margatiga,
                            +Kabupaten+Lampung+Timur,+Lampung/@-5.1762008,105.506974,
                            12z/data=!4m5!3m4!1s0x2e4094af29e4cea9:0x37e374219e20dfb7!8m2!3d-5.
                            1884727!4d105.5122694?hl=id"
                            target="blank" variant="outline-info">Triono</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}