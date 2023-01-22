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

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <Row>
          <Col>
            <h1>Request Data</h1>
            <br />
            <Autocomplete
              multiple
              id="tags-outlined"
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
            />
            <br/>
            <Button onClick={console.log(reqCategories)}>Submit</Button>
          </Col>
        </Row>
        <br></br>
      </Container>
    </div>
  );
}

export default RequestData;
