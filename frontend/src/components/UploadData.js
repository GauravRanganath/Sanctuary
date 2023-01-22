import Form from 'react-bootstrap/Form';
import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import Button from '@mui/material/Button';
import React from "react";
import axios from "axios";

function UploadData() {

  const [file, setFile] = useState();

  // Model for disease, biological sex, age, ethnicity.
  const disease = document.getElementById('selected-disease');
  const bsex = document.getElementById('selected-bsex');
  const age = document.getElementById('selected-age');
  const ethnicity = document.getElementById('selected-ethnicity');

  // Set file to hold selected file.
  function handleChange(event) {
    setFile(event.target.files[0]); // event.target.files[0] is the file.
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", file.name);
    formData.append("disease_tags", JSON.stringify([disease.value]));
    formData.append("demographic_tags", JSON.stringify([bsex.value]));
    formData.append("age_tags", JSON.stringify(["age".concat(age.value)]));
    formData.append("sex_tags", JSON.stringify([ethnicity.value]));

    const resp = await axios.post("http://localhost:8082/api/data/upload", formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <Row>
          <Col>
            <h1>Upload Medical Data</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload medical file</Form.Label>
              <Form.Control type="file" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label htmlFor="inputPassword5">Age</Form.Label>
            <Form.Control
              id="selected-age"
              aria-describedby="passwordHelpBlock"
              placeholder="30"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Age must be a valid number.
            </Form.Text>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Select id="selected-disease" aria-label="Default select disease" style={{width: "100%", padding: "10px"}}>
              <option>Select disease</option>
              <option value="lung_cancer">Lung Cancer</option>
              <option value="heart_disease">Heart Disease</option>
              <option value="osteoporosis">Osteoporosis</option>
              <option value="leukemia">Leukemia</option>
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Select id="selected-bsex" aria-label="Default select biological sex" style={{width: "100%", padding: "10px"}}>
              <option>Select biological sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Select id="selected-ethnicity" aria-label="Default select ethnicity" style={{width: "100%", padding: "10px"}}>
              <option>Select ethnicity</option>
              <option value="caucasian">Caucasian</option>
              <option value="african_american">African American</option>
              <option value="asian">Asian</option>
              <option value="native">Native</option>
              <option value="hispanic">Hispanic</option>
              <option value="pacific_islander">Pacific Islander</option>
            </Form.Select>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
  
export default UploadData;
