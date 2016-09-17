import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';
import Course from '../components/Course'
import { changeActiveCourse } from '../actions/restaurants'

class CoursesContainer extends Component {

  handleClick(event) {
    event.preventDefault()
    var course = event.target.dataset.course
    this.props.changeActiveCourse(course)
  }

  render() {
    if (this.props.activeRestaurant.restaurant) {
      return (
        <div>{this.props.activeRestaurant.restaurant.courses.map(course => {
          return <Course {...course} onClick={this.handleClick.bind(this)} />
        })}</div>
      )
    }
    return <h2>Loading...</h2>
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
