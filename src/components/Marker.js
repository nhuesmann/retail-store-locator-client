/* eslint no-confusing-arrow: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icon from '../images/icons/map-marker@2x.png';

const markerWidth = '20px';
const markerHeight = '37px';
const hoverMultiplier = 1.4;

const MarkerContainer = styled.div`
  position: absolute;
  width: ${({ active }) =>
    active ? `calc(${markerWidth} * ${hoverMultiplier})` : markerWidth};
  height: ${({ active }) =>
    active ? `calc(${markerHeight} * ${hoverMultiplier})` : markerHeight};
  left: ${({ active }) =>
    active
      ? `calc(-${markerWidth} * ${hoverMultiplier} / 2)`
      : `calc(-${markerWidth} / 2)`};
  top: ${({ active }) =>
    active
      ? `calc(-${markerHeight} * ${hoverMultiplier})`
      : `calc(-${markerHeight})`};
  z-index: ${({ active }) => (active ? 999 : 0)};
  cursor: pointer;
  transition: all 0.1s ease;
`;

class Marker extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.id === nextProps.id) {
      if (
        this.props.$hover !== nextProps.$hover ||
        this.props.hovered !== nextProps.hovered ||
        this.props.clicked !== nextProps.clicked ||
        this.props.showMarkers !== nextProps.showMarkers
      ) {
        return true;
      }

      return false;
    }

    return true;
  }

  render() {
    return (
      this.props.show && (
        <MarkerContainer
          active={this.props.$hover || this.props.hovered || this.props.clicked}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
          onClick={this.props.onClick}
        >
          <img width="100%" height="100%" src={icon} alt="map marker" />
        </MarkerContainer>
      )
    );
  }
}

Marker.propTypes = {
  id: PropTypes.string.isRequired,
  showMarkers: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  $hover: PropTypes.bool,
  hovered: PropTypes.bool.isRequired,
  clicked: PropTypes.bool.isRequired,
};

Marker.defaultProps = {
  $hover: false,
};

export default Marker;
