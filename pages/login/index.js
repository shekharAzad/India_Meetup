// //
// // import 'bootstrap/dist/css/bootstrap.min.css'
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Submit the form data
//       console.log(formData);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     const errors = {};
//     if (!data.firstName) {
//       errors.firstName = 'First Name is required';
//     }
//     if (!data.lastName) {
//       errors.lastName = 'Last Name is required';
//     }
//     if (!data.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!data.password) {
//       errors.password = 'Password is required';
//     } else if (data.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     return errors;
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="firstName">
//         <Form.Label>First Name</Form.Label>
//         <Form.Control
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           isInvalid={!!errors.firstName}
//         />
//         <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group controlId="lastName">
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           isInvalid={!!errors.lastName}
//         />
//         <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group controlId="email">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           isInvalid={!!errors.email}
//         />
//         <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//       </Form.Group>

//       <Form.Group controlId="password">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           isInvalid={!!errors.password}
//         />
//         <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Register
//       </Button>
//     </Form>
//   );
// }

// export default RegistrationForm;

import LoginForm from '../../components/login/LoginForm'
const login = () => {
    return (
        <LoginForm />
    )
}
 export default login