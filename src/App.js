import React, {Component} from 'react';
import Map from './Map';
import Toggler from './Toggler';
import Search from './Search';
import PlacesPanel from './PlacesPanel';
import './App.css';

class App extends Component {
  // if react has sth. it wants to put in:
  constructor(props) {
    // let react put it in like this
    super(props);

    this.state = {
      map: null,
      latitude: 51.33962,
      longitude: 12.37129,
      style: 'mapbox://styles/mapbox/dark-v9',
      places: []
    };
  }

  render() {
    return (
      <div className="App">
        <PlacesPanel wholeApp={this} />
        <Search wholeApp={this} />
        <Toggler wholeApp={this} />
        <Map wholeApp={this} />
      </div>
    );
  }
}

export default App;
