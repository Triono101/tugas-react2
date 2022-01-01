import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap"

export default class News extends React.Component {

    render() {
        return(
            <Navbar expand="lg" bg="primary" variant="dark" className='navbar22'>
                <Container fluid>
                    <Button id="btn11" href="https://eduwork.id/student/74/class/curriculum"
                            target="blank">HEADLINE NEWS</Button>
                    <h2 className="font1">Tugas News Api - Eduwork</h2>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                        <Dropdown> 
                            <Dropdown.Toggle className="penutup" id="dropdown-basic" variant="outline-info">
                            Contact Us {'  '}
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="dropDown">
                                <Dropdown.Item href="https://api.whatsapp.com/send?phone=6281273442003" target="blank">WhatsApp</Dropdown.Item>
                                <Dropdown.Item href="https://id.quora.com/profile/Username-Triono" target="blank">Quora</Dropdown.Item>
                                <Dropdown.Item href="https://www.instagram.com/triono_101/" target="blank">Instagram</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}