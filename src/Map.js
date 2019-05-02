import React, {Component} from 'react';
import mapbox from 'mapbox-gl';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    const app = this.props.wholeApp;

    mapbox.accessToken =
      'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg';

    const map = new mapbox.Map({
      // container: 'YOUR_CONTAINER_ELEMENT_ID',
      container: 'map',
      style: app.state.style,
      center: [app.state.longitude, app.state.latitude],
      zoom: 12
    });

    const navigationControl = new mapbox.NavigationControl();

    map.addControl(navigationControl);

    this.props.wholeApp.setState({
      // in app.js state map = null, here we tell it to be the const mapBox from above
      map: map
    });
  }

  render() {
    // accessing the state
    // const {all} = this.props;
    const app = this.props.wholeApp;
    const map = app.state.map;

    if (map) {
      map.setStyle(app.state.style);
    }

    return (
      // changing class to id to put it into container above

      <div
        id="map"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
      />
    );
  }
}

export default Map;
