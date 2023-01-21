import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BasicTextFields from "./Input";

function UploadData() {
    return (
      <div>
        <h1>Upload Data</h1>

        <Button variant="primary">Primary</Button>{' '}

        <BasicTextFields></BasicTextFields>

        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </div>
    );
}
  
export default UploadData;
  