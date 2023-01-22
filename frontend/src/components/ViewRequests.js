import Form from "react-bootstrap/Form";
import NavBar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import Axios from "axios";
import { json, useNavigate } from "react-router-dom";

function ViewRequests() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <Row>
            <Col>
            <h1>Request Data</h1>
            <br />
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewRequests;
