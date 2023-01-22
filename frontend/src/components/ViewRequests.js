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
  const sample = {
      "_id": "63ccd86f53d74eafd3cdede6",
      "summary": "rama was here",
      "name": "rama",
      "tags": [
          "Male"
      ],
      "createdAt": "2023-01-22T06:32:15.723Z",
      "updatedAt": "2023-01-22T06:32:15.723Z",
      "__v": 0
  }

  const getRequests = async () => {
    await axios.get("http://localhost:8082/api/data/allRequestData").then((resp) => {
      setRequests(resp.data);
    });
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
