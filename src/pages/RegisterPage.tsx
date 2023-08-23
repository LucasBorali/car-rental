import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';

const RegisterPage = () => {
  return (
    <section className={classes.login}>
      <form>
        <input type="email" name="email" id="email" placeholder="E-mail" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button>Sign In</button>
        <p>
          Do you have an account? <Link to="/login">Log In</Link>
        </p>
        <Link to="/">Cancel</Link>
      </form>
    </section>
  );
};

export default RegisterPage;
