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

const demographicCategories = [
  "Male",
  "Female",
  "Lung Cancer",
  "Heart Disease",
  "Leukemia",
  "Osteoperosis",
  "0-12",
  "13-24",
  "25-36",
  "37-48",
  "49-60",
  "61-72",
  "73-80",
  "80+",
  "Caucasian",
  "African American",
  "Pacific Islander",
  "Native American",
  "Asian",
  "Hispanic",
];

function RequestData() {
  const [reqCategories, setReqCategories] = useState([]);
  const [summaryInput, setSummaryInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <Row>
          <Col>
            <h1>Request Data</h1>
            <br />
            <TextField
            placeholder="Title"
              fullWidth={true}
              onChange={(event) => {
                setNameInput(event.target.value);
              }}
            />
            <br />
            <br />
            <Autocomplete
              multiple
              id="tags-outlined"
              placeholder="Tags"
              options={demographicCategories}
              getOptionLabel={(option) => option}
              defaultValue={[]}
              onChange={(event, value) => {
                setReqCategories(value);
              }}
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} />}
            />
            <br />
            <TextField
              placeholder="Please provide a short summary of your research."
              multiline
              rows={10}
              maxRows={10}
              fullWidth={true}
              onChange={(event) => {
                setSummaryInput(event.target.value);
              }}
            />
            <br/>
            <Button onClick={async (event) => {
              console.log(nameInput);
              console.log(reqCategories);
              console.log(summaryInput);
              let body = {
                "summary": summaryInput,
                "name": nameInput,
                "tags": reqCategories
              }
              const resp = await Axios.post("http://localhost:8082/api/data/newRequestData", body)
              navigate("/view-request-data")
            }}>Submit</Button>
          </Col>
        </Row>
        <br></br>
      </Container>
    </div>
  );
}

export default RequestData;
