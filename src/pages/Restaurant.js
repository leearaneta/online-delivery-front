import React, { Component } from 'react';
import CategoriesContainer from '../containers/CategoriesContainer.js';
import ItemsContainer from '../containers/ItemsContainer'

export default class Restaurant extends Component {
  render() {
    return (
      <CategoriesContainer />
      <ItemsContainer />
    )
  }
}
