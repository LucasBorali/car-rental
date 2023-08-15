import React from 'react';
import classes from './Home.module.css';
import checkIcon from '../Assets/18489228581556258233.svg';
import arrowIcon from '../Assets/10632066661535694868.svg';
import {Link} from 'react-router-dom'
const Home = () => {



  return (
    <section>
      <div className={classes['hero-container']}>
        <div className={classes.hero}>
          <h3>Plan your trip now</h3>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more
          </p>
          <div className={classes['check-links']}>
            <Link className='red-button' to='about'>
              Book Ride
              <img src={checkIcon} alt="" />
            </Link>
            <Link className={classes['black-button']} to='about'>
              Learn More
              <img src={arrowIcon} alt="" />
            </Link>
          </div>
        </div>
        <img className={classes['car-image']}
          src="https://www.pngall.com/wp-content/uploads/11/Red-Kia-PNG-Photos.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
