/* eslint react/require-default-props: "off" */
/* eslint react/forbid-prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */
/* eslint no-underscore-dangle: "off" */
/* eslint object-curly-newline: "off" */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Marker from './Marker';

class Markers extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.markers.length === this.props.markers.length) {
      return false;
    }

    return true;
  }

  render() {
    console.log('markers!', this.props.markers.length);

    return (
      this.props.markers.length > 0 &&
      this.props.markers.map(retailer => (
        <Marker
          key={retailer._id}
          lng={retailer.location.coordinates[0]}
          lat={retailer.location.coordinates[1]}
          onMouseEnter={() => this.props.onMarkerHover(retailer._id)}
          onMouseLeave={this.props.onMarkerHoverExit}
          onClick={() => this.props.onMarkerClick(retailer._id)}
          hovered={retailer._id === this.props.hoveredRetailerId}
          clicked={retailer._id === this.props.clickedRetailerId}
          show={this.props.showMarkers}
        />
      ))
    );
  }
}

Markers.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  zoom: PropTypes.number,
  markers: PropTypes.array,
  onBoundsChange: PropTypes.func,
  hoveredRetailerId: PropTypes.string,
  clickedRetailerId: PropTypes.string,
  onMarkerHover: PropTypes.func,
  onMarkerHoverExit: PropTypes.func,
  onMarkerClick: PropTypes.func,
  onMapClick: PropTypes.func,
  zoomAnimationStarted: PropTypes.func,
  zoomAnimationEnded: PropTypes.func,
  showMarkers: PropTypes.bool,
};

export default Markers;
