import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Row>
          <Col>
            <h1>Welcome to Sanctuary</h1>
            <SearchBar></SearchBar>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Button variant="primary">Go somewhere</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewData;
