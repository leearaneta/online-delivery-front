import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import RestaurantsList from '../components/RestaurantsList';
import RestaurantBox from '../components/RestaurantBox';

const mapStateToProps = (state) => {
  debugger
  return {
    restaurantsList: state.restaurants.restaurantsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: () => {
      dispatch(fetchRestaurant())
    },
    renderRestaurants: (restaurants) => {
    	return restaurants.map((restaurant) => {
        debugger
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