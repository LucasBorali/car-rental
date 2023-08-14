import React from 'react';
import carIcon from '../Assets/car-icon.png';
import classes from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={carIcon} alt="Car Rental" />
        <div>
          <h5>CAR</h5>
          <h6>Rental</h6>
        </div>
      </div>

      <ul className={classes.navlinks}>
        <li>
          {' '}
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/vehicle-models"
          >
            Vehicle Models
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/testimonials"
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/our-team"
          >
            Our Team
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={classes['sign-in']}>
        <Link to='login'>Log In</Link>
        <Link className='red-button'to='register'>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
