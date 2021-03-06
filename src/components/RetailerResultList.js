/* eslint react/forbid-prop-types: "off" */
/* eslint react/no-unused-prop-types: "off" */
/* eslint no-nested-ternary: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RetailerResult from './RetailerResult';
import NoResults from './NoResults';
import Loading from './Loading';

const Container = styled.div`
  max-height: 714px;
  overflow: scroll;

  @media (max-width: 767px) {
    max-height: 219px;
  }

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

const RetailerResultList = props =>
  props.searchOrigin.placeId && (
    <Container>
      <ul>
        {props.loading ? (
          <li>
            <Loading />
          </li>
        ) : props.retailers.length > 0 && props.searchCompleted ? (
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
          ))
        ) : props.retailers.length === 0 && props.searchCompleted ? (
          <li>
            <NoResults
              searchRadiusOptions={props.searchRadiusOptions}
              searchRadiusIndex={props.searchRadiusIndex}
            />
          </li>
        ) : null}
      </ul>
    </Container>
  );

RetailerResultList.propTypes = {
  retailers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  hoveredRetailerId: PropTypes.string,
  clickedRetailerId: PropTypes.string,
  searchCompleted: PropTypes.bool.isRequired,
  searchRadiusOptions: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchRadiusIndex: PropTypes.number.isRequired,
  searchOrigin: PropTypes.shape({
    address: PropTypes.string,
    placeId: PropTypes.string,
    coordinates: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }).isRequired,
  retailerHovered: PropTypes.func.isRequired,
  retailerHoverExited: PropTypes.func.isRequired,
  retailerClicked: PropTypes.func.isRequired,
};

RetailerResultList.defaultProps = {
  hoveredRetailerId: null,
  clickedRetailerId: null,
};

export default RetailerResultList;
