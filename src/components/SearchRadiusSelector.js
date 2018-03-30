import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 13px;
`;

const SearchRadiusSelector = ({ options, selected, onChange }) => (
  <div>
    <Select value={selected} onChange={onChange}>
      {options.map(option => (
        <option key={option} value={option}>
          {option} miles
        </option>
      ))}
    </Select>
  </div>
);

SearchRadiusSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  selected: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchRadiusSelector;
