/* eslint no-underscore-dangle: "off" */
/* eslint react/forbid-prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RetailerResult from './RetailerResult';
import NoResults from './NoResults';

const Container = styled.div`
  margin-top: 15px;
  max-height: 714px;
  overflow: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

const RetailerResultList = props => (
  <Container>
    <ul>
      {props.retailers.length > 0 &&
        props.searchCompleted &&
        props.retailers.map(retailer => (
          <li key={retailer._id}>
            <RetailerResult
              retailer={retailer}
              hovered={retailer._id === props.hoveredRetailerId}
              clicked={retailer._id === props.clickedRetailerId}
              onMouseEnter={() => props.retailerHovered(retailer._id)}
              onMouseLeave={props.retailerHoverExited}
              onClick={() => props.retailerClicked(retailer._id)}
            />
          </li>
        ))}
      {props.retailers.length === 0 &&
        props.searchCompleted && (
          <li>
            <NoResults
              searchRadiusOptions={props.searchRadiusOptions}
              searchRadiusIndex={props.searchRadiusIndex}
            />
          </li>
        )}
    </ul>
  </Container>
);

RetailerResultList.propTypes = {
  retailers: PropTypes.array.isRequired,
  hoveredRetailerId: PropTypes.string,
  clickedRetailerId: PropTypes.string,
  searchCompleted: PropTypes.bool.isRequired,
  searchRadiusOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchRadiusIndex: PropTypes.number.isRequired,
  retailerHovered: PropTypes.func.isRequired,
  retailerHoverExited: PropTypes.func.isRequired,
  retailerClicked: PropTypes.func.isRequired,
};

RetailerResultList.defaultProps = {
  hoveredRetailerId: null,
  clickedRetailerId: null,
};

export default RetailerResultList;
