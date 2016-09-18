import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkout from '../components/Checkout';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cart: state.cart

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderRestaurants: (restaurants) => {
    	return restaurants.map((restaurant) => {
	      return (
	        <li className="restaurant-box" key={restaurant.id}>
	        </li>
	      )
    	})
  	}
  }
}

export default connect(mapStateToProps, null)(Checkout);
