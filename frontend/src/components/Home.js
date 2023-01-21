import NavBar from "./Navbar";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import image from "../img/background.png";

function Home() {
  return (
    <div style={{height: "100vh", width: "100vw", backgroundImage:`url(${image})`}}>
      <NavBar></NavBar>
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{fontSize: "400%"}}>Better data.</h1>
        <h1 style={{fontSize: "400%"}}>Better treatment.</h1>
        <br></br>
        <h4>Powered by Estuary</h4>
        <br></br>
        <div>
          <Link to="/upload-data">
            <Button variant="primary" size="lg" style={{margin: "10px"}}>Upload Data</Button>
          </Link>
          <Link to="/view-data">
            <Button variant="primary" size="lg" style={{margin: "10px"}}>View Data</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
