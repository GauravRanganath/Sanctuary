import NavBar from "./Navbar";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function DownloadData() {
  const { disease } = useParams();
  const [downloadData, setDownloadData] = useState([]);
  const [genderValue, setGenderValue] = useState("male");
  const [ethnicityValue, setEthnicityValue] = useState("caucasian");

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
    console.log(genderValue);
  };

  const handleEthnicityChange = (event) => {
    setEthnicityValue(event.target.value);
    console.log(ethnicityValue);
  };

  const getData = () => {
    axios
      .get("http://localhost:8082/api/data/records?disease=" + disease)
      .then((resp) => {
        setDownloadData(resp.data);
      });
  };

  function downloadContent(cid) {
    axios.get("https://api.estuary.tech/gw/ipfs/" + cid);
  }

  function downloadFilteredCid() {
    axios
      .get(
        "http://localhost:8082/api/data/records?sex=" +
          genderValue +
          "&race=" +
          ethnicityValue +
          "&disease=" +
          disease
      )
      .then((resp) => {
        setDownloadData(resp.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br />
        <Row>
          <Col sm={9}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Filename</TableCell>
                    <TableCell align="right">Content ID</TableCell>
                    <TableCell align="right">Download Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {downloadData.map((downloadDatum) => (
                    <TableRow
                      key={downloadDatum[0]}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {downloadDatum[1]}
                      </TableCell>
                      <TableCell align="right" component="th" scope="row">
                        {downloadDatum[0]}
                      </TableCell>
                      <TableCell align="right" component="th" scope="row">
                        <Button
                          variant="text"
                          onClick={() => {
                            downloadContent(downloadDatum[0]);
                          }}
                        >
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
          <Col sm={3}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Gender
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={genderValue}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <br />
            <br />

            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Ethnicity
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={ethnicityValue}
                onChange={handleEthnicityChange}
              >
                <FormControlLabel
                  value="caucasian"
                  control={<Radio />}
                  label="Caucasian"
                />
                <FormControlLabel
                  value="african_american"
                  control={<Radio />}
                  label="African American"
                />
                <FormControlLabel
                  value="asian"
                  control={<Radio />}
                  label="Asian"
                />
                <FormControlLabel
                  value="native"
                  control={<Radio />}
                  label="Native American"
                />
                <FormControlLabel
                  value="hispanic"
                  control={<Radio />}
                  label="Hispanic"
                />
                <FormControlLabel
                  value="pacific_islander"
                  control={<Radio />}
                  label="Pacific Islander"
                />
              </RadioGroup>
            </FormControl>

            <br />
            <br />

            <Button
              variant="contained"
              onClick={() => {
                downloadFilteredCid();
              }}
            >
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DownloadData;
