// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { formatPrice } from '../../utils';
import { kinds, securityKinds, constructionKinds, quarters } from './../complexes-dictionaries';

const Features = styled.section`
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

export function cellHeight(from: number, to: number): number {
  if (from === to || to === 0) {
    return `${from.toFixed(2)} м`;
  }
  return `${from.toFixed(2)} - ${to.toFixed(2)} м`;
}

type Props = {
  propertyKind: string,
  propertiesCount: number,
  priceFrom: number,
  priceTo: number,
  constructionKind: string,
  security: string,
  areaFrom: number,
  areaTo: number,
  cellHeightFrom: number,
  cellHeightTo: number,
  maintenanceCosts: number,
  startQuarter: number,
  startYear: number,
  maintenanceCosts: number,
  commissioningQuarter: number,
  commissioningYear: number,
  undergroundGarages: number,
  parkings: number
}

export default (props: Props) => (
  <Features>
    <Grid>
      <Row>
        <Col lg={2}>
          <Title>Характеристики</Title>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Количество квартир</FeatureTitle>
            <FeatureText>{props.propertiesCount}</FeatureText>
            <FeatureTitle>Статус</FeatureTitle>
            <FeatureText>{kinds[props.propertyKind || 'flat']}</FeatureText>
            <FeatureTitle>Цены</FeatureTitle>
            <FeatureText>{`от ${formatPrice(props.priceFrom)} до ${formatPrice(props.priceTo)} млн`}</FeatureText>
            <FeatureTitle>Безопасность</FeatureTitle>
            <FeatureText>{securityKinds[props.security]}</FeatureText>
          </dl>
        </Col>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Конструкция корпусов</FeatureTitle>
            <FeatureText>{constructionKinds[props.constructionKind]}</FeatureText>
            <FeatureTitle>Площадь</FeatureTitle>
            <FeatureText>{`от ${props.areaFrom.toFixed(1)} до ${props.areaTo.toFixed(1)} м²`}</FeatureText>
            <FeatureTitle>Высота потолков</FeatureTitle>
            <FeatureText>{cellHeight(props.cellHeightFrom, props.cellHeightTo)}</FeatureText>
            <FeatureTitle>Обслуживание</FeatureTitle>
            <FeatureText>{props.maintenanceCosts} руб / м² / месяц</FeatureText>
          </dl>
        </Col>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Начало строительства</FeatureTitle>
            <FeatureText>{quarters[props.startQuarter]} квартал {props.startYear} года</FeatureText>
            <FeatureTitle>Конец строительства</FeatureTitle>
            <FeatureText>{quarters[props.commissioningQuarter]}
              квартал {props.commissioningYear} года</FeatureText>
            <FeatureTitle>Наземная парковка</FeatureTitle>
            <FeatureText>{(props.undergroundGarages) ? `${props.undergroundGarages} м/м` : 'Нет'}</FeatureText>
            <FeatureTitle>Подземная парковка</FeatureTitle>
            <FeatureText>{(props.parkings) ? `${props.parkings} м/м` : 'Нет'}</FeatureText>
          </dl>
        </Col>
      </Row>
    </Grid>
  </Features>
);
