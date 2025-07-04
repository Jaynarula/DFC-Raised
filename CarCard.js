import React from 'react';

function CarCard({ car }) {
  return (
    <div className="card">
      <h3>{car.name}</h3>
      <p>Brand: {car.brand}</p>
      <p>Type: {car.type}</p>
      <p>Fuel: {car.fuel}</p>
      <p>Mileage: {car.mileage}</p>
      <p>Price: {car.price}</p>
    </div>
  );
}

export default CarCard;
