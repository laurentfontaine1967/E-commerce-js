import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let history = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
    };

    console.log(sendData);
    axios
      .post("http://localhost/ecor/register.php", sendData)
      .then((result) => {
        if (result.data.Status == "Invalid") {
          alert("Invalid User ");
        } else {
          alert("Register Successfully");
          history("/home");
        }
      });
  };
  return (
    <div class="container mt-5">
      <h1 class="mt-4">REGISTER</h1>
      <Form onSubmit={submitForm}>
        <Form.Group class="mb-3" controlId="formGroupFirstName">
          <Form.Label>first name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="first_name"
            onChange={handleChange}
            value={data.first_name}
          />
        </Form.Group>

        <Form.Group class="mb-3" controlId="formGroupLastName">
          <Form.Label>last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="last_name"
            onChange={handleChange}
            value={data.last_name}
          />
        </Form.Group>

        <Form.Group class="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />
        </Form.Group>

        <Form.Group class="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
        </Form.Group>
        <button
          type="submit"
          name="submit"
          value="Register"
          class="btn btn-primary"
        >
          Enregister
        </button>
      </Form>
    </div>
  );
};
export default Register;
