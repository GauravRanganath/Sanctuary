import Container from 'react-bootstrap/Container';
import NavBar from "./Navbar"
import { useState } from 'react';
import '../Login.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("sample")
    const [password, setPassword] = useState("sample")
    const [incorrect_cred, setCred] = useState(false);
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();
        console.log(username, password)
        const resp = await axios.post("http://localhost:8082/api/data/login", {
            "username":username,
            "password":password
        })
        console.log(resp);
        if (resp.data=="success"){
            navigate("/");
        }
        else{
            setCred(true);
        }
    }

    return (
        <div>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="Auth-form-container">
                
                <form className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    {incorrect_cred==false ? <></> : <p className='incorrect'><b>Incorrect credentials. Please try again.</b></p>}
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={login}>
                        Submit
                        </button>
                    </div>
                    <p className="forgot-password text-left mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                    <p className="signup">
                        Sign up for an <a href="/signup">account.</a>
                    </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;