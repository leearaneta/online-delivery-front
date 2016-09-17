import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CoursesContainer from '../containers/CoursesContainer.js';
// import ItemsContainer from '../containers/ItemsContainer'
import { fetchRestaurant } from '../actions/restaurants'

class Restaurant extends Component {

  componentWillMount() {
    var {params, fetchRestaurant} = this.props
    fetchRestaurant(params.id)
  }

  render() {

    return (
      <div>
        <CoursesContainer />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchRestaurant}, dispatch)
}

export default connect(null, mapDispatchToProps)(Restaurant);
