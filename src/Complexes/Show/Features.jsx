// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import { formatPrice } from '../../utils';
import { kinds, securityKinds, constructionKinds, quarters } from './../dictionaries';
import type { Complex } from '../types';

const Features = styled.section`
  padding: 2rem 0 1rem 0;
  font-size: 0;
`;

const MainTitle = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

const Title = styled.dt`
  display: inline-block;
  font-size: 1rem;
  line-height: 1.38;
  font-family: 'Fira Sans', sans-serif;
  color: #a9afb6;
  width: 50%;
`;

const Text = styled.dd`
  display: inline-block;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  line-height: 1.56;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 500;
  color: #3e4247;
`;

export function getFormattedCeilHeight(from: ?number, to: ?number): string {
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
  complex: Complex
}

export default (props: Props) => {
  const {
    statistics = {},
    details = {},
  } = props.complex;

  const {
    totalArea = {},
    price = { from: {}, to: {} },
    propertiesCount = 0,
  } = statistics;

  const {
    maintenanceCosts = 0,
    ceilHeight = {},
    propertyKind = 'flat',
    security = 'guarded',
    constructionKind = 'brick',
    startQuarter = 0,
    startYear = 0,
    commissioningQuarter = 0,
    commissioningYear = 0,
    parkings = 0,
    undergroundGarages = 0,
  } = details;

  return (
    <Features>
      <Grid>
        <Row>
          <Col lg={2}>
            <MainTitle>Характеристики</MainTitle>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <dl>
              <Title>Количество квартир</Title>
              <Text>{propertiesCount}</Text>
              <Title>Статус</Title>
              <Text>{kinds[propertyKind || 'flat']}</Text>
              <Title>Цены</Title>
              <Text>{getFormattedRange(formatPrice(price.from.rub), formatPrice(price.to.rub), 'млн')}</Text>
              <Title>Безопасность</Title>
              <Text>{securityKinds[security]}</Text>
            </dl>
          </Col>
          <Col lg={4}>
            <dl>
              <Title>Конструкция корпусов</Title>
              <Text>{constructionKinds[constructionKind]}</Text>
              <Title>Площадь</Title>
              <Text>{getFormattedRange(totalArea.from, totalArea.to, 'м²')}</Text>
              <Title>Высота потолков</Title>
              <Text>{getFormattedCeilHeight(ceilHeight.from, ceilHeight.to)}</Text>
              <Title>Обслуживание</Title>
              <Text>{maintenanceCosts} руб / м² / месяц</Text>
            </dl>
          </Col>
          <Col lg={4}>
            <dl>
              <Title>Начало строительства</Title>
              <Text>{quarters[startQuarter]} квартал {startYear} года</Text>
              <Title>Конец строительства</Title>
              <Text>{quarters[commissioningQuarter]}
                квартал {commissioningYear} года</Text>
              <Title>Наземная парковка</Title>
              <Text>{(undergroundGarages) ? `${undergroundGarages} м/м` : 'Нет'}</Text>
              <Title>Подземная парковка</Title>
              <Text>{(parkings) ? `${parkings} м/м` : 'Нет'}</Text>
            </dl>
          </Col>
        </Row>
      </Grid>
    </Features>
  );
};
