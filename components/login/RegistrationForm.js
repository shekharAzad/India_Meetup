// RegistrationForm.js

import Link from "next/link";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    const error = {};
    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }
    // setValidationErrors(errors);
    // Validate the form data (e.g., check if passwords match)

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
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
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
         {validationErrors.email && (
          <small className="text-danger">{validationErrors.email}</small>
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

      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {validationErrors.confirmPassword && (
          <small className="text-danger">{validationErrors.confirmPassword}</small>
        )}
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
          </Button>
          
    </Form>
  );
};

export default RegistrationForm;
