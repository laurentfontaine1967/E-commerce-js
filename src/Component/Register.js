import React from 'react';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';



const Register=()=>{
const[data, setData]=useState({
first_name:"",
last_name:"",
email:"",
password:"",
})

return(
<div class="container mt-5">
    <h1 class='mt-4'>REGISTER</h1>
<Form>

      <Form.Group class="mb-3" controlId="formGroupFirstName" name='first_name'>
        <Form.Label>first name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>

      <Form.Group class="mb-3" controlId="formGroupLastName" name="last_name">
        <Form.Label>last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>


      <Form.Group class="mb-3" controlId="formGroupEmail" name="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>


      <Form.Group class="mb-3" controlId="formGroupPassword" name='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    </div>
)

}
export default Register