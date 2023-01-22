import NavBar from "./Navbar";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChartGender from "./charts/PieChartGender";
import PieChartEthnicity from "./charts/PieChartEthnicity";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DescriptionCard from "./DescriptionCard";

function ViewDisease() {
  const { disease } = useParams();

  axios
    .all([
      axios.get(
        "http://localhost:8082/api/data/records?sex=male&disease=" + disease
      ),
      axios.get(
        "http://localhost:8082/api/data/records?sex=female&disease=" + disease
      ),
    ])
    .then((responseArr) => {
      console.log(responseArr[0]);
      console.log(responseArr[1]);
    })
    .then(() => {
      axios
        .all([
          axios.get(
            "http://localhost:8082/api/data/records?sex=male&disease=" + disease
          ),
          axios.get(
            "http://localhost:8082/api/data/records?sex=female&disease=" +
              disease
          ),
        ])
        .then((responseArr) => {
          console.log(responseArr[0]);
          console.log(responseArr[1]);
        });
    });

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br/>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">{disease}</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Download Data</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card className="text-center">
              <br />
              <h1>1947</h1>
              <p>Data Points</p>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <br />
              <h1>47</h1>
              <p>Countries</p>
            </Card>
          </Col>
          <Col>
            <Card className="text-center">
              <br />
              <h1>567</h1>
              <p>Downloads</p>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card>
              <BarChart />
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card>
              <LineChart />
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card>
              <PieChartGender />
            </Card>
          </Col>
          <Col>
            <Card>
              <PieChartEthnicity />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewDisease;

// disease
// sex - pie chart
// age - line
// ethnicity - bar chart
