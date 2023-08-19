import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// https://www.youtube.com/watch?v=HzZU1ma4Y24&t=1s
const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      email: user.email,
      password: user.password,
    };

    if (sendData.email == "" || sendData.password == "") {
      alert("Please fill all the fields");
    } else if (sendData.email.length > 0 && sendData.password.length > 0) {
      axios.post("http://localhost/ecor/login.php", sendData).then((result) => {
        if (result.data.Status == "200") {
          window.localStorage.setItem("email", result.data.email);
          window.localStorage.setItem(
            "userName",
            result.data.first_name + "" + result.data.first_name
          );
          navigate("/dashboard");
        } else {
          alert("Invalid User ");

          // navigate("/home");
        }
      });
    }
  };

  return (
    <div class="container mt-5">
      <h1 Class="mt-4">LOGIN</h1>
      <Form class="mt-4" onSubmit={submitForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={user.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {/* <Form.Check type="checkbox" label="Check me out" /> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
