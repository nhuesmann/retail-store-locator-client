/* eslint no-unused-expressions: 0 */

import React from 'react';
import styled from 'styled-components';

import RetailerStoreLocator from './components/RetailStoreLocator';

import baseStyles from './baseStyles';

const AppContainer = styled.div`
  text-align: center;
`;

const Content = styled.main`
  font-size: 16px;
`;

const App = () => {
  baseStyles();
  return (
    <AppContainer>
      <Content>
        <RetailerStoreLocator />
      </Content>
    </AppContainer>
  );
};

export default App;
