import React, { useState } from 'react';
import carIcon from '../Assets/car-icon.png';
import classes from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import closeIcon from '../Assets/9531284241641072512.svg';
const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const windowRoot = document.getElementById('window-root') as HTMLElement;
  const navLinks = (
    <ul className={classes.navlinks}>
      <li>
        {' '}
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
          to="/testimonials"
        >
          Testimonials
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
          to="/our-team"
        >
          Our Team
        </NavLink>
      </li>
      <li>
        {' '}
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
  const windowSize = window.innerWidth > 500;
  const registerLinks = (
    <div className={classes['sign-in']}>
      <Link to="login">Log In</Link>
      <Link className="red-button" to="register">
        Register
      </Link>
    </div>
  );
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={carIcon} alt="Car Rental" />
        <div>
          <h5>CAR</h5>
          <h6>Rental</h6>
        </div>
      </div>
      {windowSize ? (
        navLinks
      ) : (
        <button
          onClick={() => setDisplayMenu(!displayMenu)}
          className={classes.menu}
        >
          <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path>
          </svg>
        </button>
      )}

      {displayMenu &&
        ReactDOM.createPortal(
          <div
            onClick={() => setDisplayMenu(false)}
            className={classes['menu-window']}
          >
            <button
              onClick={() => setDisplayMenu(!displayMenu)}
              className={classes['close-window']}
            >
              <img src={closeIcon} alt="" />
            </button>
            {navLinks}
            {registerLinks}
          </div>,
          windowRoot
        )}

      {windowSize && registerLinks}
    </nav>
  );
};

export default Navbar;
