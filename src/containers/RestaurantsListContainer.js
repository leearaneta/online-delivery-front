import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RestaurantsList from '../components/RestaurantsList';
import RestaurantBox from '../components/RestaurantBox';

const mapStateToProps = (state) => {
  return {
    restaurantsList: state.restaurants.restaurantsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderRestaurants: (restaurants) => {
    	return restaurants.map((restaurant) => {
	      return (
	        <li className="list-group-item" key={restaurant.id}>
	          <RestaurantBox {...restaurant} />
	        </li>
	      );
    	});
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);
