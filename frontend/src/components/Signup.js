import NavBar from "./Navbar"
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import "../Signup.css"
import { Autocomplete, TextField } from '@mui/material';
import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
    const [username, setUsername] = useState("sample")
    const [password, setPassword] = useState("sample")
    const [error, setError] = useState(false)
    const domains = {
        "utoronto":"University of Toronto"
    }
    const navigate = useNavigate();

    const signup = async (event) => {
        event.preventDefault();
        console.log(username, password)
        var email_parts = username.split("@")
        var domain_name = email_parts[-1].split(".")
        if (domains.includes(domain_name)){
            const resp = await axios.post("http://localhost:8082/api/data/login", {
                "username":username,
                "password":password
            })
        }
        navigate("/");

    }

    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div id="SignUp">
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="px-4">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                            <h2 className="fw-bold mb-2 text-center text-uppercase ">
                                Logo
                            </h2>
                            <div className="mb-3">
                                <Form>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label className="text-center">Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="text-center">
                                    Email address
                                    </Form.Label>
                                    <Form.Control id="personal_email" type="email" placeholder="Enter email" onClick={(event, value) => setUsername(value)}/>
                                </Form.Group>
                                <Form.Label className="text-center">Institution Name</Form.Label>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={["University of Toronto", "Waterloo University", "Stanford University", "Harvard University", "McMaster University"]}
                                    fullWidth={true}
                                    renderInput={(params) => <TextField {...params} label="University Name" size="small"/>}
                                    className="autocomplete"
                                />
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={(event, value) => setPassword(value)}/>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox"
                                ></Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit" onClick={signup}>
                                    Create Account
                                    </Button>
                                </div>
                                </Form>
                                <div className="mt-3">
                                <p className="mb-0  text-center">
                                    Already have an account?{' '}
                                    <a href="{''}" className="text-primary fw-bold">
                                    Sign In
                                    </a>
                                </p>
                                </div>
                            </div>
                            </div>
                        </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Signup;