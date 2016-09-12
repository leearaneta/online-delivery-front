import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

export default class Landing extends Component {

	 onSuggestSelect(suggest) {
    console.log(suggest);
  }
    
	render(){

    return (
      <div id="hel">
        <h1>The Delivery Team</h1>
        <h2 class="subheader">Who Deliverys in Your Neighborhood?</h2>
        <br />
        <Geosuggest
          placeholder="Street Address, City, Sta.."
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(62.2315, 16.1932)}
          country="SE"
          radius="1000" />
      </div>
    )
  }
}
