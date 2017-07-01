// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { getLocalImageUrl } from '../../utils';

const AreaFeatures = styled.section`
  margin-top: -9.8rem;
  padding-bottom: 4rem;
`;

const AreaMap = styled.img`
  height: 19.5rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;

const Feature = styled.div`
  padding: 1.5rem;
  background: #fff;
  border: solid 1px #e0e0e1;
`;

const FeatureName = styled.p`
  font-size: 1rem;
  line-height: 1.56;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  color: #3e4247;
  display: block;
  margin: 0;
`;

const FeatureLocation = styled.small`
  font-size: 1rem;
  line-height: 1.38;
  font-family: 'Fira Sans', sans-serif;
  color: #a9afb6;
  display: block;
  margin: 0.5rem 0 0 0;
`;

export default () => (
  <AreaFeatures>
    <Grid>
      <Row>
        <Col lg={6}>
          <AreaMap src={getLocalImageUrl('/img/map.png')} alt="Map" />
        </Col>
        <Col lg={6}>
          <Wrapper>
            <Feature>
              <FeatureName>Красный Октябрь</FeatureName>
              <FeatureLocation>24 минуты, 6 км</FeatureLocation>
            </Feature>
            <Feature>
              <FeatureName>World class</FeatureName>
              <FeatureLocation>2 минуты, 300 м</FeatureLocation>
            </Feature>
            <Feature>
              <FeatureName>Третьяковская галерея</FeatureName>
              <FeatureLocation>14 минут, 4 км</FeatureLocation>
            </Feature>
          </Wrapper>
        </Col>
      </Row>
    </Grid>
  </AreaFeatures>
);
