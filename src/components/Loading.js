import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 50px;
`;

const Loading = () => (
  <Container>
    <Image
      src="https://cdn.shopify.com/s/files/1/0658/0121/t/10/assets/loading.gif"
      alt="loading spinner"
    />
  </Container>
);

export default Loading;
