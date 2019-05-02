import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isLoading: false
    };
    // need to add the following since the 'this' from setState in handleChange function does not know what the this in onChange={this.handleChange) is talking about. We want this.handleChange to listen to whole component, instead of just the input, so we bind it to 'this' whole component -> react specific way
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const accessToken =
      'pk.eyJ1Ijoic3VwZXJoaSIsImEiOiJkMTcyNzU0M2YzZDQ3YjNjNmQ2NmYwYjcwMmMzZGViMCJ9.RmlVJzqEJ1RqQSvQGL_Jkg';
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${
      this.state.value
    }.json?access_token=${accessToken}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const places = this.props.wholeApp.state.places;
        const map = this.props.wholeApp.state.map;
        const firstResult = data.features[0];

        places.push({
          name: this.state.value,
          longitude: firstResult.center[0],
          latitude: firstResult.center[1]
        });

        this.props.wholeApp.setState({
          places: places
        });

        this.setState({
          value: ''
        });

        map.flyTo({
          center: [firstResult.center[0], firstResult.center[1]],
          zoom: 10
        });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} placeholder="Add place..." />
      </form>
    );
  }
}

export default Search;
