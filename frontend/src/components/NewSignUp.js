import NavBar from "./Navbar";
import { Col, Row, Container, Card, Form } from "react-bootstrap";
import Button from "@mui/material/Button";

import "../Signup.css";
import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSignup() {
  const [username, setUsername] = useState("sample");
  const [password, setPassword] = useState("sample");
  const [error, setError] = useState(false);

  const [test, setTest] = useState("");

  const domains = {
    utoronto: "University of Toronto",
  };
  const navigate = useNavigate();

  const signup = async () => {
    console.log(test, "test");
    var email_parts = username.split("@");
    var domain_name = email_parts[-1].split(".");
    if (domains.includes(domain_name)) {
      const resp = await axios.post("http://localhost:8082/api/data/login", {
        username: username,
        password: password,
      });
    }
    navigate("/");
  };

  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div id="SignUp">
        <Container>

          <TextField
            onChange={(event) => {setTest(event.target.value)}}
          />

          <Button onClick={signup}>Submit</Button>
        </Container>
      </div>
    </div>
  );
}

export default NewSignup;
