import React, { useState } from 'react';
import './SignUp.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }

    if (name === 'email') {
      setEmailError('');
    }
  };

  const validateEmail = () => {
    const { email } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }

    return '';
  };

  const validatePassword = () => {
    const { password } = formData;

    // Add your password validation rules here
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    // Add more validation rules as needed

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailError = validateEmail();
    if (emailError) {
      setEmailError(emailError);
      return;
    }

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    const passwordError = validatePassword();
    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }

    // Rest of the submission logic
    console.log('Sign-up form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit}>
        <label className="label">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        {emailError && <p className="error">{emailError}</p>}
        <label className="label">
          Create Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        <label className="label">
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="input"
          />
        </label>
        {passwordError && <p className="error">{passwordError}</p>}
        {/* <label className="label">
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="input"
          />
        </label> */}
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
