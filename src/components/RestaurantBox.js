import React from 'react';
import { Link } from 'react-router';
// import RestaurantsTags from './RestaurantsTags'

const RestaurantsBox =({name,description}) => {
  return(
    <div className="col-md-4">
      <Link style={{color:'black'}} to={"restaurants/" + id}>
        <h3 >{name}</h3>
        <h4 >{description}</h4>
      </Link>
    </div>
  )
}