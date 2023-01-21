import Form from 'react-bootstrap/Form';
import NavBar from "./Navbar"
import Container from 'react-bootstrap/Container';

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

          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Select disease</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <label for="formGroupExampleInput">Age</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="25"></input>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Select sex</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div class="form-group">
              <label for="exampleFormControlSelect1">Select ethnicity</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required></input>
                <label class="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
        </Container>
      </div>
    );
}
  
export default UploadData;
