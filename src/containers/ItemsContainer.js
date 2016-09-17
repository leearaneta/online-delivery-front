import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Item from '../components/Item'
import { addItem } from '../actions/cart'

class ItemsContainer extends Component {

  handleClick() {
    event.preventDefault()
  }

  render() {
    var { activeRestaurant } = this.props
    if (activeRestaurant.activeCourse) {
      var courseObject = activeRestaurant.restaurant.courses.find(course => course.name === activeRestaurant.activeCourse)
      var courseId = courseObject.id
      var relevantItems = activeRestaurant.restaurant.items.filter(item => {
        return item.course_id === courseId
      })
      return <div>{relevantItems.map(item => <Item {...item} onClick={this.handleClick.bind(this)}/>)}</div>
    }
    return null
  }
}

function mapStateToProps(state) {
  return {
    activeRestaurant: state.restaurants.activeRestaurant
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addItem}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
