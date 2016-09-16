import React from 'react';
import { Link } from 'react-router';
// import RestaurantsTags from './RestaurantsTags'

const RestaurantBox =({id, name, categories, full_address}) => {
  debugger
  return(
    <div className="col-md-4">
      <Link style={{color:'black'}} to={"restaurants/" + id}>
        <h3 >{name}</h3>
        <h4 >{full_address}</h4>
      </Link>
    </div>
  )
}

export default RestaurantBox
