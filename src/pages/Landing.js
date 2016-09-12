import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';

export default class Landing extends Component {

	 onSuggestSelect(suggest) {
    console.log(suggest);
  }
    
	render(){

    return (
      <div id="hel">
        <Geosuggest
          placeholder="Where do you want it delivered?"
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(62.2315, 16.1932)}
          country="SE"
          radius="1000" />
      </div>
    )
  }
}
