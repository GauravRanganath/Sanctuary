import Form from 'react-bootstrap/Form';
import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';
import BasicSelect from './Dropdown';

function UploadData() {
    return (
      <div>
        <NavBar></NavBar>
        <Container>

          <br></br>
          <h1>Upload Medical Data</h1>
          <br></br>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload medical file</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <br></br>

          <Form.Label htmlFor="inputPassword5">Age</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Age must be a valid number.
          </Form.Text>

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <br></br>

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

        </Container>
      </div>
    );
}
  
export default UploadData;
