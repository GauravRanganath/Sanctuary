import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ViewData() {
  // Retrieve Estuary files
  const [test, setTest] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append(
    "Authorization",
    "Bearer EST0eae79ed-3ff2-414a-a139-3f5564be0344ARY"
  ); // Put the Bearer key in a variable

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.estuary.tech/content/list", requestOptions)
    .then((response) => response.text())
    .then((result) => setTest(result))
    .catch((error) => console.log("error", error));

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <Row>
          <Col>
            <h1>View Medical Data</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <SearchBar style={{width: "100%"}}></SearchBar>
          </Col>
        </Row>
        <br></br>
        <Row md={3}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Lung Cancer</Card.Title>
                <Card.Text>
                  "Lung cancer, also known as lung carcinoma is a malignant lung tumor 
                  characterized by uncontrolled cell growth in tissues of the lung."
                </Card.Text>
                <Link to="/view-data/lung_cancer">
                  <Button variant="primary">View Data</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Heart Disease</Card.Title>
                <Card.Text>
                  "Cardiovascular disease is a class of diseases that involve the heart or blood vessels.
                  For example angina and myocardial infarction."
                </Card.Text>
                <Link to="/view-data/heart_disease">
                  <Button variant="primary">View Data</Button>
                </Link>
                
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Osteoporosis</Card.Title>
                <Card.Text>
                  "Osteoporosis is a systemic skeletal disorder characterized by low bone mass, micro-architectural 
                  deterioration of bone tissue leading to bone fragility."
                </Card.Text>
                <Link to="/view-data/osteoporosis">
                  <Button variant="primary">View Data</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default ViewData;
