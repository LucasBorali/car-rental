import React from 'react';
import classes from './About.module.css';
import operator from '../Assets/operator.png';
import letDrive from '../Assets/let-s-drive.png';
import pickCar from '../Assets/pick-a-car.png';

const About = () => {
  return (
    <section className={classes.about}>
      <h3>Plan your trip now</h3>
      <h1>Quick & easy car rental</h1>
      <div className={classes['cards-container']}>
        <div>
          <img src={pickCar} alt="Select car" />
          <h4>Select Car</h4>
          <p>
            We offer a big range of vehicles for all your driving needs. We have
            the perfact car to meet your needs
          </p>
        </div>
        <div>
          <img src={operator} alt="Contact Operator" />
          <h4>Contact Operator</h4>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div>
          <img src={letDrive} alt="Drive!" />
          <h4>Let's Drive</h4>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
