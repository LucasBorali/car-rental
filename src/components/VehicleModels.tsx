import React, { useState } from 'react';
import classes from './VehicleModels.module.css';

class Car {
  name: string;
  model: string;
  mark: string;
  year: number;
  doors: string;
  ac: string;
  transmission: string;
  fuel: string;
  image: string;

  constructor(
    name: string,
    model: string,
    mark: string,
    year: number,
    doors: string,
    ac: string,
    transmission: string,
    fuel: string,
    image: string
  ) {
    this.name = name;
    this.model = model;
    this.mark = mark;
    this.year = year;
    this.doors = doors;
    this.ac = ac;
    this.transmission = transmission;
    this.fuel = fuel;
    this.image = image;
  }
}

const carsAvailable = [
  new Car(
    'Audi A1 S-Line',
    'Audi',
    'A1',
    2012,
    '4 / 5',
    'Yes',
    'Manual',
    'Gasoline',
    'https://www.pngmart.com/files/22/Audi-A1-PNG-Isolated-Photo.png'
  ),
  new Car(
    'VW Golf 6',
    'VolksWagen',
    'Golf 6',
    2014,
    '3/5',
    'Yes',
    'Manual',
    'Gasoline',
    'https://ramacar.com/wp-content/uploads/CarRentalGallery/WV-GOLF-6.png'
  ),
  new Car(
    'Toyota Camry',
    'Toyota',
    'Camry',
    2018,
    '4',
    'Yes',
    'Manual',
    'Gasoline',
    'https://www.pngmart.com/files/10/White-Toyota-Camry-PNG-Photo.png'
  ),
  new Car(
    'BMW 320 ModernLine',
    'BMW',
    '320',
    2016,
    '4',
    'Yes',
    'Manual',
    'Gasoline',
    'https://production.autoforce.com/uploads/version/profile_image/6370/comprar-320i-gp_1325b25392.png'
  ),
  new Car(
    'Mercedes-Benz GLK',
    'Mercedes-Benz',
    'GLK',
    2010,
    '4',
    'Yes',
    'Manual',
    'Gasoline',
    'https://pngimg.com/d/mercedes_PNG80120.png'
  ),
  new Car(
    'VW Passat CC',
    'VolksWagen',
    'Passat CC',
    2014,
    '4',
    'Yes',
    'Manual',
    'Gasoline',
    'https://www.motortrend.com/uploads/sites/10/2015/11/2012-volkswagen-cc-luxury-sedan-angular-front.png'
  ),
];

const VehicleModels = () => {
  const [carInformations, setCarInformations] = useState(carsAvailable[0]);

  return (
    <div id="book-ride" className={classes.reserve}>
      <h4>Vehicle Models</h4>
      <h2>Our rental fleet</h2>
      <p>
        Choose from a variaty of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className={classes.renting}>
        <ul>
          {carsAvailable.map(car => (
            <li className={car.name === carInformations.name ? classes.active : undefined} onClick={() => setCarInformations(car)} key={car.name}>
              {car.name}
            </li>
          ))}
        </ul>
        <img src={carInformations.image} alt="" />
        <div>
          <table>
            <thead>
              <tr>
                <th scope="row" colSpan={2}>
                  <span>$45</span> / rent per day
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Model</th>
                <td>{carInformations.model}</td>
              </tr>
              <tr>
                <th scope="row">Mark</th>
                <td>{carInformations.mark}</td>
              </tr>
              <tr>
                <th scope="row">Year</th>
                <td>{carInformations.year}</td>
              </tr>
              <tr>
                <th scope="row">Doors</th>
                <td>{carInformations.doors}</td>
              </tr>
              <tr>
                <th scope="row">AC</th>
                <td>{carInformations.ac}</td>
              </tr>
              <tr>
                <th scope="row">Transmission</th>
                <td>{carInformations.transmission}</td>
              </tr>
              <tr>
                <th scope="row">Fuel</th>
                <td>{carInformations.fuel}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <button className={classes['table-btn']}>RESERVE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default VehicleModels;
