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
        {disease}
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
