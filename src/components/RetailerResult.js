/* eslint react/require-default-props: 0 */
/* eslint react/forbid-prop-types: 0 */
/* eslint object-curly-newline: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint no-confusing-arrow: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(218, 218, 218);
  padding: 20px 15px;
  text-align: left;
  color: ${({ active }) => (active ? 'white' : 'rgb(78, 78, 78)')};
  background-color: ${({ active }) => (active ? 'rgb(253, 103, 33)' : 'white')};
`;

const Heading = styled.h2`
  font-family: 'Verlag-Bold';
`;

const Retailer = styled.p`
  color: inherit;
`;

const RetailerResult = props => {
  const { retailer } = props;

  return (
    <Container
      active={props.hovered || props.clicked}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <Heading>{retailer.name}</Heading>
      <Retailer>
        {retailer.address_1}
        {retailer.address_2 ? ` ${retailer.address_2}` : null}, {retailer.city}{' '}
        {retailer.state} {retailer.zip.slice(0, 5)}
      </Retailer>
    </Container>
  );
};

RetailerResult.propTypes = {
  retailer: PropTypes.object.isRequired,
  hovered: PropTypes.bool.isRequired,
  clicked: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RetailerResult;
