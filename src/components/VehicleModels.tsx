import React from 'react';
import classes from './VehicleModels.module.css'

const VehicleModels = () => {
  return (
    <div id='book-ride' className={classes.reserve}>
      <h4>Vehicle Models</h4>
      <h2>Our rental fleet</h2>
      <p>
        Choose from a variaty of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className={classes.renting}>
        <ul>
          <li>Audi A1 S-Line</li>
          <li>VW Golf 6</li>
          <li>Toyota Camry</li>
          <li>BMW 320 Modern Line</li>
          <li>Mercedes-Benz GLK</li>
          <li>VW Passat CC</li>
        </ul>
        <img src="" alt="" />
        <div>
          <table>
            <thead>
              <tr>
                <th scope='row' colSpan={2}>
                  <span>$45</span> / rent per day
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Model</th>
                <td>Audi</td>
              </tr>
              <tr>
                <th scope="row">Mark</th>
                <td>A1</td>
              </tr>
              <tr>
                <th scope="row">Year</th>
                <td>2012</td>
              </tr>
              <tr>
                <th scope="row">Doors</th>
                <td>4/5</td>
              </tr>
              <tr>
                <th scope="row">AC</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th scope="row">Transmission</th>
                <td>Manual</td>
              </tr>
              <tr>
                <th scope="row">Fuel</th>
                <td>Gasoline</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <button>RESERVE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;
