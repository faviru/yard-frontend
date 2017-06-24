import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Address from './Address.jsx';
import Gallery from './Gallery.jsx';
import Summary from './Summary.jsx';
import Features from './Features.jsx';
import Description from './Description.jsx';
import Infrastructure from './Infrastructure.jsx';
import OfferCard from './OfferCard.jsx';
import AreaGuide from './AreaGuide.jsx';
import AreaFeatures from './AreaFeatures.jsx';

const Complex = styled.div`
  background: #fff;
`;

const OfferCards = styled.section`
  padding: 4rem 0;
  background: #f4f5f9;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

export default () => (
  <Complex>
    <Address />
    <Gallery />
    <Summary />
    <Features />
    <Description />
    <Infrastructure />
    <OfferCards>
      <Grid>
        <Row center="lg">
          <Col lg={4}>
            <Title>Предложения в ЖК «Полянка/44»</Title>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <OfferCard
              count={1} 
              area={{min:59, max:120}}
              cost={{min:20.3, max:84.2}}
            />
          </Col>
          <Col lg={4}>
            <OfferCard
              count={2} 
              area={{min:59, max:120}}
              cost={{min:20.3, max:84.2}}
            />
          </Col>
          <Col lg={4}>
            <OfferCard
              count={3} 
              area={{min:59, max:120}}
              cost={{min:20.3, max:84.2}}
            />
          </Col>
        </Row>
      </Grid>
    </OfferCards>
    <AreaGuide />
    <AreaFeatures />
  </Complex>
);
