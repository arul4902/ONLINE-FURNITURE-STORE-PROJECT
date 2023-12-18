import React from 'react';
//import { Link } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1>USER LOGIN</h1>
      <form action="#" method="post">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        {/* <input type="checkbox" className="checkbox"/>
        <label htmlFor="checkbox">Terms and Conditions</label> */}
        <button type="submit">Login</button>
        <h4>Not a Member?</h4>
        
      </form>
      <button>Sign up</button>
    </div>
  );
};

export default Login;