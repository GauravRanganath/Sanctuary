import Form from "react-bootstrap/Form";
import NavBar from "./Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import "../view-requests.css";

function ViewRequests() {
  const [requests, setRequests] = useState([]);  
  const sample = [
    {
        "_id": "63ccd86f53d74eafd3cdede6",
        "summary": "Demo Description",
        "name": "Demo Title",
        "tags": [
            "Male",
            "Osteoporosis"
        ],
    },
    {
        "_id": "63ccf9b64d204551424d6f3b",
        "summary": "Proposal: The dataset consists of a sample of female patients diagnosed with heart disease. Heart disease is a general term used to describe a range of conditions that affect the heart and blood vessels, and it is a leading cause of death in women. The dataset includes demographic information such as age, weight, and height as well as clinical data such as blood pressure, cholesterol levels, past medical history, and current medications. Additionally, the dataset also includes information on lifestyle factors such as smoking status, diet, and physical activity levels. This dataset can be useful for researchers studying the risk factors and outcomes associated with heart disease in women, and for developing targeted prevention and treatment strategies.",
        "name": "Demographic and Clinical Characteristics of Female Patients with Heart Disease",
        "tags": [
            "Female",
            "Heart Disease"
        ],
    },
    {
      "_id": "63ccf9b64d204551424d6f3b",
      "summary": "Proposal: The dataset consists of a sample of male patients diagnosed with leukemia, between the ages of 13 and 24. Leukemia is a type of cancer that affects the blood and bone marrow, and it is one of the most common types of cancer in children and young adults. The dataset includes demographic information such as age, weight, and height as well as clinical data such as blood test results, bone marrow biopsy results, and current treatment information. Additionally, the dataset also includes information on any previous cancer treatments or medical history. This dataset can be useful for researchers studying the incidence and outcomes of leukemia in young males, as well as for developing targeted treatment strategies for this population.",
      "name": "Demographic and Clinical Characteristics of Male Patients Aged 13-24 with Leukemia",
      "tags": [
          "Male",
          "Leukemia",
          "13-24"
      ],
    }
]

  // const getRequests = async () => {
  //   await axios.get("http://localhost:8082/api/data/allRequestData").then((resp) => {
  //     setRequests(resp.data);
  //   });
  // }
  const getRequests = () => {
    setRequests(sample)
  }

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div>
      {console.log(requests)}
      <NavBar></NavBar>
      <Container className="reduce-right">
        <br></br>
        <h1 className="extra-bottom-margin">Request Data</h1>
        <hr />
        <div className="less-left">
        {
          requests.map((request) => 
              <Row>
                <div class="main_example_code give_margin give_top_padding">
                  <div id="title_div" class="give_margin">
                    <h2>{request.name}</h2>
                    <p>{request.summary}</p>
                    {
                      request.tags.map((tag) =>
                        <Chip label={tag} sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
                      )
                    }
                  </div>
                </div>
              </Row>
          )
        }
        {/* <Row>
          <div class="main_example_code give_margin give_top_padding">
            <div id="title_div" class="give_margin">
              <h2>PlayCreator Library Examples</h2>
              <p>
                For further explanation on the input/output structure of the functions displayed below, please refer to the <a href="/documentation.html">documentation</a> page.
              </p>
              <p>
                Note: There may be slight issues with endpoints of motion lines due to icon problems. Other than that, lines possess the expected functionality.
              </p>
              <Chip label="Pizza" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Apples and Oranges" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Pizza" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Apples and Oranges" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
            </div>
          </div>
        </Row>
        <Row>
          <div id="main_example_code" class="give_margin give_top_padding">
            <div id="title_div" class="give_margin">
              <h2>PlayCreator Library Examples</h2>
              <p>
                For further explanation on the input/output structure of the functions displayed below, please refer to the <a href="/documentation.html">documentation</a> page.
              </p>
              <p>
                Note: There may be slight issues with endpoints of motion lines due to icon problems. Other than that, lines possess the expected functionality.
              </p>
              <Chip label="Pizza" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Apples and Oranges" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Pizza" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Apples and Oranges" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
            </div>
          </div>
        </Row>
        <Row>
          <div id="main_example_code" class="give_margin give_top_padding">
            <div id="title_div" class="give_margin">
              <h2>PlayCreator Library Examples</h2>
              <p>
                For further explanation on the input/output structure of the functions displayed below, please refer to the <a href="/documentation.html">documentation</a> page.
              </p>
              <p>
                Note: There may be slight issues with endpoints of motion lines due to icon problems. Other than that, lines possess the expected functionality.
              </p>
              <Chip label="Pizza" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Apples and Oranges" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Pizza" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
              <Chip label="Apples and Oranges" sx={{fontWeight:600, bgcolor:"#2074d4"}} color="primary" className="extra-right"/>
            </div>
          </div>
        </Row> */}
        </div>
      </Container>
    </div>
  );
}

export default ViewRequests;
