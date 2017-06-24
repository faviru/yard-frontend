import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Featires = styled.section`
  padding: 2rem 0 1rem 0;
  font-size: 0;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

const FeatureTitle = styled.dt`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.38;
  font-family: 'Fira Sans', sans-serif;
  color: #a9afb6;
  width: 50%;
`;

const FeatureText = styled.dd`
  display: inline-block;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  line-height: 1.56;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  color: #3e4247;
`;

export default () => (
  <Featires>
    <Grid>
      <Row>
        <Col lg={2}>
          <Title>Характеристики</Title>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
            <FeatureTitle>Статус:</FeatureTitle>
            <FeatureText>Квартиры</FeatureText>
            <FeatureTitle>Цены:</FeatureTitle>
            <FeatureText>от 5.3 до 143.5 млн</FeatureText>
          </dl>
        </Col>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
          </dl>
        </Col>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
            <FeatureTitle>Количество квартир:</FeatureTitle>
            <FeatureText>1 503</FeatureText>
          </dl>
        </Col>
      </Row>
    </Grid>
  </Featires>
);
