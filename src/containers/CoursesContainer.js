import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';
import Course from '../components/Course'
import RestaurantsList from '../components/RestaurantsList';
import RestaurantBox from '../components/RestaurantBox';
import { changeActiveCourse } from '../actions/restaurants'

class CoursesContainer extends Component {

  handleClick() {
    event.preventDefault()
    var course = event.target.dataset.course
    this.props.changeActiveCourse(course)
  }

  render() {
    if (this.props.activeRestaurant.restaurant) {
      return (
        <ul>{this.props.activeRestaurant.restaurant.courses.map(course => {
          return <li><Course name={course.name} onClick={this.handleClick.bind(this)} /></li>
        })}</ul>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.restaurants.activeRestaurant
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeActiveCourse}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
