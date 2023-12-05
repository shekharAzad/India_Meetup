// // LoginForm.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data (e.g., check if fields are not empty)
    const errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      window.location.href = 'http://localhost:3000/new-meetup'
      // Submit the form data to the server or perform other actions
      console.log(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {validationErrors.username && (
          <small className="text-danger">{validationErrors.username}</small>
        )}
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {validationErrors.password && (
          <small className="text-danger">{validationErrors.password}</small>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <p>Don't have an account yet?</p>
           <Link href='/register'> Register now</Link>
    </Form>
  );
};

export default LoginForm;
