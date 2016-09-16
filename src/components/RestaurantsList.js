import React, { Component } from 'react';
import { Link } from 'react-router';

export default class RestaurantsList extends Component {

  render() {
    const { renderRestaurants, restaurants } = this.props;
    if(restaurants.length > 0) {
      return (
        <div className="container" >
          <h1>Take Your Pick!</h1>
          <ul className="list-group">
            {renderRestaurants(restaurants)}
          </ul>
        </div>
      );
    } else {
      return (
        <div id="container">
          <h2 className="subheader">Oh noooooo! Looks like we arent yet in your Neighborhood!</h2>
          <h4><Link to={'/'}>Click Here if you would like to try a different address!</Link></h4>
        </div>
      )
    }

  }
}
