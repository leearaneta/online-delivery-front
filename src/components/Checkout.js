import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import SignInContainer from '../containers/SignInContainer.js';
import SignUpContainer from '../containers/SignUpContainer.js';

export default class Checkout extends Component {
  render() {
  	const {user, cart} = this.props
  	debugger
  	if (cart.length > 1) {
  		return (
  			<div>	
		  		<h2> There are no items in your cart. </h2>
		  		<h4><Link to={'/'}>Click Here to get some Grub!</Link></h4>
  			</div>
  		)
  	} else if (!user.user) {
    return 
    	<div className="register">
      	<SignInContainer />
      	<SignUpContainer />
   	 	</div>
    } else {
    	return
    	<div>
    	<h2> pay up </h2>
    	</div>
    }
  }
}

