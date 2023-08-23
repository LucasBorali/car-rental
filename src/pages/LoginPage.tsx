import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Login.module.css';

const LoginPage = () => {
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
        <button>Log In</button>
        <p>
          Don't have an account? <Link to="/register">Sign In</Link>
        </p>
        <Link to='/'>Cancel</Link>
      </form>
    </section>
  );
};

export default LoginPage;
