import NavBar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <h1>Better data.</h1>
        <h1>Better treatment.</h1>
        <br></br>
        <div>
          <Link to="/upload-data">
            <Button variant="primary" size="lg">Upload Data</Button>
          </Link>
          <Link to="/view-data">
            <Button variant="primary" size="lg">View Data</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
