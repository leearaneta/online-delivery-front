import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Item from '../components/Item'
import { addItem } from '../actions/cart'

class ItemsContainer extends Component {

  handleClick(event) {
    event.preventDefault()
    var { activeRestaurant, addItem } = this.props
    var itemId = event.target.dataset.id
    var item = activeRestaurant.restaurant.items.find(item => item.id === parseInt(itemId))
    addItem(item)
  }

  render() {
    var { restaurant, activeCourse } = this.props.activeRestaurant
    if (activeCourse) {
      var relevantItems = restaurant.items.filter(item => {
        return item.course_id === activeCourse.id
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
