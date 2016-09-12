import React, { Component } from 'react';
import AppContainer from './containers/AppContainer';
import 'bootstrap/less/bootstrap.less';

export default class App extends Component {
  render() {
    return (
      <AppContainer>
      	{this.props.children}
      </AppContainer>
    );
  }
}