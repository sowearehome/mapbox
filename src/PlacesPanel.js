import React, {Component} from 'react';
import PlaceItem from './PlaceItem';
import './PlacesPanel.css';

class PlacesPanel extends Component {
  render() {
    // get all the places from state and turn them into spots:
    const places = this.props.wholeApp.state.places;

    let placeItems = <div className="no-results">Nothing added yet</div>;

    if (places.length > 0) {
      // turn spots into placeItems & loop over them to so sth. with each single place
      placeItems = places.map((place, index) => {
        // pass in the place from spots.map(place ... as a property called place
        return <PlaceItem place={place} placesPanelApp={this.props.wholeApp} key={index} />;
      });
    }

    return <div className="places">{placeItems}</div>;
  }
}

export default PlacesPanel;
