import React, { Component } from 'react';
import SignInFormContainer from '../containers/SignInFormContainer.js';

class UserNew extends Component {
  render() {
    return (
      <div>
        <SignInFormContainer {...this.props}/>
      </div>
    )
  }
}


export default UserNew;
