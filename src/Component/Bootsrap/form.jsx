import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const FormEmail = () => {
        return(
            <Container fluid id="form" className="data mt-5">
                <h3 className="fw-bold fs-3 text-center mb-3">Contact Me</h3>
                <Form>
                    <Form.Group className="mb-3 fs-4">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id="Input1" placeholder="triono4311@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3 fs-4">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button type="button" className="btn btn-primary btn-outline-info" id="submit">
                        Send
                        </Button>
                    </div>
                    
                </Form>
                
            </Container>
        )
    }

export default FormEmail;