import Form from 'react-bootstrap/Form';
import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';

function UploadData() {

  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]); // event.target.files[0] is the file.
    console.log(event.target.files[0]);
  }

    return (
      <div>
        <NavBar></NavBar>
        <Container>
          <br></br>
          <Row>
            <Col>
              <h1>Upload Medical Data</h1>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload medical file</Form.Label>
                <Form.Control type="file" onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor="inputPassword5">Age</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder="30"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Age must be a valid number.
              </Form.Text>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Select aria-label="Default select disease" style={{width: "100%", padding: "10px"}}>
                <option>Select disease</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Select aria-label="Default select biological sex" style={{width: "100%", padding: "10px"}}>
                <option>Select biological sex</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Select aria-label="Default select ethnicity" style={{width: "100%", padding: "10px"}}>
                <option>Select ethnicity</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
  
export default UploadData;
