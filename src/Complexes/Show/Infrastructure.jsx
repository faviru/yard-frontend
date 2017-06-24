import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Infrastructure = styled.section`
  padding: 2rem 0 3.5rem 0;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

const Facility = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  line-height: 1.38;
  font-family: 'Fira Sans', sans-serif;
  color: #3e4247;
`;

export default () => (
  <Infrastructure>
    <Grid>
      <Row>
        <Col lg={2}>
          <Title>Инфраструктура</Title>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <Facility>Бассейн</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Детский сад</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Бассейн</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Детский сад</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
        <Col lg={2}>
          <Facility>Частная школа</Facility>
        </Col>
      </Row>
    </Grid>
  </Infrastructure>
);
