import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';
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
    var courses = this.props.activeRestaurant.restaurant.courses.map(course => {
      <Course name={course.name} onClick={this.handleClick.bind(this)} />
    })
    return {courses}
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
