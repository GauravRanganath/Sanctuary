import NavBar from "./Navbar";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChartGender from "./charts/PieChartGender";
import PieChartEthnicity from "./charts/PieChartEthnicity";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DescriptionCard from "./DescriptionCard";

function ViewDisease() {
  const { disease } = useParams();
  const [genderArr, setGenderArr] = useState([]);
  const [ethnicityArr, setEthnicityArr] = useState([]);
  const [maleEthnicityArr, setMaleEthnicityArr] = useState([]);
  const [femaleEthnicityArr, setFemaleEthnicityArr] = useState([]);
  const [maleAgeArr, setMaleAgeArr] = useState([]);
  const [femaleAgeArr, setFemaleAgeArr] = useState([]);

  const getGenderAgeData = async () => {
    let buildMaleAgeArr = [];
    let buildFemaleAgeArr = [];
    for (let i = 0; i <= 85; i++) {
      axios
        .get(
          "http://localhost:8082/api/data/records?sex=male&age=age" +
            i.toString() +
            "&disease=" +
            disease
        )
        .then((resp) => {
          buildMaleAgeArr.push(resp.data.length);
        })
        .then(() => setMaleAgeArr(buildMaleAgeArr));
    }

    for (let i = 0; i <= 85; i++) {
        axios
          .get(
            "http://localhost:8082/api/data/records?sex=female&age=age" +
              i.toString() +
              "&disease=" +
              disease
          )
          .then((resp) => {
            buildFemaleAgeArr.push(resp.data.length);
          })
          .then(() => setFemaleAgeArr(buildFemaleAgeArr));
      }
  };

  const getGenderEthnicityData = async () => {
    await axios
      .all([
        axios.get(
          "http://localhost:8082/api/data/records?sex=male&race=caucasian&disease=" +
            disease
        ),

        axios.get(
          "http://localhost:8082/api/data/records?sex=male&race=african_american&disease=" +
            disease
        ),

        axios.get(
          "http://localhost:8082/api/data/records?sex=male&race=asian&disease=" +
            disease
        ),

        axios.get(
          "http://localhost:8082/api/data/records?sex=male&race=native&disease=" +
            disease
        ),

        axios.get(
          "http://localhost:8082/api/data/records?sex=male&race=hispanic&disease=" +
            disease
        ),

        axios.get(
          "http://localhost:8082/api/data/records?sex=male&race=pacific_islander&disease=" +
            disease
        ),

        axios.get(
          "http://localhost:8082/api/data/records?sex=female&race=caucasian&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?sex=female&race=african_american&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?sex=female&race=asian&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?sex=female&race=native&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?sex=female&race=hispanic&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?sex=female&race=pacific_islander&disease=" +
            disease
        ),
      ])
      .then((responseArr) => {
        setMaleEthnicityArr([
          responseArr[0].data.length,
          responseArr[1].data.length,
          responseArr[2].data.length,
          responseArr[3].data.length,
          responseArr[4].data.length,
          responseArr[5].data.length,
        ]);
        setFemaleEthnicityArr([
          responseArr[6].data.length,
          responseArr[7].data.length,
          responseArr[8].data.length,
          responseArr[9].data.length,
          responseArr[10].data.length,
          responseArr[11].data.length,
        ]);
      });
  };

  const getGenderData = async () => {
    await axios
      .all([
        axios.get(
          "http://localhost:8082/api/data/records?sex=male&disease=" + disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?sex=female&disease=" + disease
        ),
      ])
      .then((responseArr) => {
        console.log(responseArr);
        setGenderArr([responseArr[0].data.length, responseArr[1].data.length]);
      });
  };

  const getEthnicityData = async () => {
    const { data } = await axios
      .all([
        axios.get(
          "http://localhost:8082/api/data/records?race=caucasian&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?race=african_american&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?race=asian&disease=" + disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?race=native&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?race=hispanic&disease=" +
            disease
        ),
        axios.get(
          "http://localhost:8082/api/data/records?race=pacific_islander&disease=" +
            disease
        ),
      ])
      .then((responseArr) => {
        console.log(responseArr);
        setEthnicityArr([
          responseArr[0].data.length,
          responseArr[1].data.length,
          responseArr[2].data.length,
          responseArr[3].data.length,
          responseArr[4].data.length,
          responseArr[5].data.length,
        ]);
      });
  };

  useEffect(() => {
    getGenderAgeData();
    getGenderData();
    getEthnicityData();
    getGenderEthnicityData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br />
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
        <br />
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
              <BarChart
                maleEthnicityArr={maleEthnicityArr}
                femaleEthnicityArr={femaleEthnicityArr}
              />
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            {maleAgeArr}
            <Card>
              <LineChart maleAgeArr={maleAgeArr} femaleAgeArr={femaleAgeArr} />
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card>
              <PieChartGender genderArr={genderArr} />
            </Card>
          </Col>
          <Col>
            <Card>
              <PieChartEthnicity ethnicityArr={ethnicityArr} />
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
