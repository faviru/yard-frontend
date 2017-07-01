// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getLocalImageUrl } from '../../utils';

const AreaGuide = styled.section`
  padding: 4rem 0 13.625rem 0;
  background: #3e4247;
`;

const AreaMap = styled.img`
  height: 35rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Name = styled.p`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #a9afb6;
`;

const Title = styled.h2`
  margin: 3rem 0;
  padding-right: 0.5rem;
  font-size: 3rem;
  line-height: 1.25;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #fff;
`;

const ToGuide = styled(Link)`
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Fira Sans', sans-serif;
  color: #00779a;
`;

export default () => (
  <AreaGuide>
    <Grid>
      <Row>
        <Col lg={6}>
          <Wrapper>
            <Name>Якиманка</Name>
            <Title>Исторический центр Москвы в двух километрах от Кремля</Title>
            <ToGuide to="#">Гид по Якиманке →</ToGuide>
          </Wrapper>
        </Col>
        <Col lg={6}>
          <AreaMap src={getLocalImageUrl('/img/polyanka-photo.png')} />
        </Col>
      </Row>
    </Grid>
  </AreaGuide>
);
