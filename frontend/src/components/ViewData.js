import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image_lung from "../img/lung_cancer.jpeg";
import image_heart from "../img/heart_disease.jpeg";
import image_osteoporosis from "../img/osteoporosis.jpeg";

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
                <Card.Img width="150" height="300" variant="top" src={image_lung} />
                <br></br>
                <br></br>
                <Card.Title>Lung Cancer</Card.Title>
                <Card.Text>
                  "Lung cancer, also known as lung carcinoma is a malignant lung tumor 
                  characterized by uncontrolled cell growth in tissues of the lung."
                </Card.Text>
                <Button variant="primary">View Data</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Img width="150" height="300" variant="top" src={image_heart} />
                  <br></br>
                  <br></br>
                <Card.Title>Heart Disease</Card.Title>
                <Card.Text>
                  "Cardiovascular disease is a class of diseases that involve the heart or blood vessels.
                  For example angina and myocardial infarction."
                </Card.Text>
                <Button variant="primary">View Data</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Img width="150" height="300" variant="top" src={image_osteoporosis} />
                  <br></br>
                  <br></br>
                <Card.Title>Osteoporosis</Card.Title>
                <Card.Text>
                  "Osteoporosis is a systemic skeletal disorder characterized by low bone mass, micro-architectural 
                  deterioration of bone tissue leading to bone fragility."
                </Card.Text>
                <Button variant="primary">View Data</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default ViewData;
