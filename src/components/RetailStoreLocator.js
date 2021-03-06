import React from 'react';
import styled from 'styled-components';

import SearchForm from '../containers/SearchForm';
import RetailerResultList from '../containers/RetailerResultList';
import MapContainer from '../containers/Map';

const Container = styled.div`
  display: flex;
  margin: 10px auto;
  max-width: 1200px;
  max-height: 800px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const SearchContainer = styled.div`
  flex: 2;
  margin: 0 14px;
`;

const MapContainerDiv = styled.div`
  flex: 3;
`;

const RetailStoreLocator = () => (
  <Container>
    <SearchContainer>
      <SearchForm />
      <RetailerResultList />
    </SearchContainer>
    <MapContainerDiv>
      <MapContainer />
    </MapContainerDiv>
  </Container>
);

export default RetailStoreLocator;
