import React, { Component } from 'react';
import { connect } from 'react-redux'
import CoursesContainer from '../containers/CoursesContainer.js';
// import ItemsContainer from '../containers/ItemsContainer'
import { fetchRestaurant } from '../actions/restaurants'

class Restaurant extends Component {

  componentDidMount() {
    var {restaurantId, fetchRestaurant} = this.props
    fetchRestaurant(restaurantId)
  }

  render() {
    return (
      <div>
        <CoursesContainer />
        <ItemsContainer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: (restaurantId) => {
      dispatch(fetchRestaurant(restaurantId))
    }
  }
}

export default connect(null, mapDispatchToProps)(Restaurant);
