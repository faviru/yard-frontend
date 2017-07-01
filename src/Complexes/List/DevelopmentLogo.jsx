// @flow

import React from 'react';
import styled from 'styled-components';
import { getLocalImageUrl } from '../../utils';

const Container = styled.section`
  padding: 5rem 0;
  background: #161616;
`;

const Logo = styled.img`
  display: block;
  height: 8.19rem;
  margin: 0 auto;
`;

export default () => (
  <Container>
    <Logo src={getLocalImageUrl('/img/dev-logo.svg')} alt="Compass Development" />
  </Container>
);
