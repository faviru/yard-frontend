// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { formatPrice } from '../../utils';
import { kinds, securityKinds, constructionKinds, quarters } from './../dictionaries';
import type { Area } from '../types';

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

export function ceilHeight(from: ?number, to: ?number): string {
  const formattedFrom = from && from.toFixed(2);
  const formattedTo = to && to.toFixed(2);
  const singleValue = formattedFrom || formattedTo;

  if (formattedFrom && formattedTo) {
    return `${formattedFrom || ''} - ${formattedTo || ''} м`;
  } else
  if (singleValue != null) {
    return `${singleValue} м`;
  }

  return 'Не указана';
}

function getFormattedRange(
  from: ?number, to: ?number, units: string, precision: number = 1): string {
  if (!from && !to) {
    return 'Не указано';
  }
  const formattedFrom = from ? `от ${from.toFixed(precision)} ` : '';
  const formattedTo = to ? `до ${to.toFixed(precision)} ` : '';

  return `${formattedFrom}${formattedTo}${units}`;
}

type Props = {
  propertyKind: string,
  propertiesCount: number,
  price: { from?: number, to?: number },
  constructionKind: string,
  security: string,
  area: Area,
  ceilHeight: { from?: number, to?: number },
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
            <FeatureText>{getFormattedRange(formatPrice(props.price.from), formatPrice(props.price.to), 'млн')}</FeatureText>
            <FeatureTitle>Безопасность</FeatureTitle>
            <FeatureText>{securityKinds[props.security]}</FeatureText>
          </dl>
        </Col>
        <Col lg={4}>
          <dl>
            <FeatureTitle>Конструкция корпусов</FeatureTitle>
            <FeatureText>{constructionKinds[props.constructionKind]}</FeatureText>
            <FeatureTitle>Площадь</FeatureTitle>
            <FeatureText>{getFormattedRange(props.area.from, props.area.to, 'м²')}</FeatureText>
            <FeatureTitle>Высота потолков</FeatureTitle>
            <FeatureText>{ceilHeight(props.ceilHeight.from, props.ceilHeight.to)}</FeatureText>
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
