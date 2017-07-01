// @flow

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainFooter = styled.footer`
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  background: #111;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #646971;
  font-family: 'Fira Sans', sans-serif;
`;

const Numbers = styled.p`
  margin-top: ${props => (props.phone ? '1rem' : '0.5rem')};
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 300;
  color: #a9afb6;
`;

const Line = styled.hr`
  width: 11.5rem;
  height: 2px;
  margin: 0 0 1rem 0;
  background: #3e4247;
  border: none;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComplexLink = styled(Link)`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 300;
  color: #fff;
`;

const ComplexLinkAll = ComplexLink.extend`
  margin-top: 1rem;

  &:after {
    display: inline-block;
    content: '';
    width: 0.55rem;
    height: 0.5rem;
    margin-left: 0.5rem;
    background: url('../img/combined-shape.svg');
  }
}
`;

const Copyright = styled.p`
  margin-top: 6rem;
  margin-bottom: 0;
  padding-right: 2.6rem;
  font-size: 0.69rem;
  line-height: 1.7;
  font-weight: 300;
  color: #a9afb6;
}
`;

export default () => (
  <MainFooter>
    <Grid>
      <Row>
        <Col lg={2}>
          <Title>ООО «Ярд»</Title>
          <Numbers >ОГРН 1175074002531</Numbers>
          <Numbers >ИНН 5036165365</Numbers>
          <Numbers phone>+7 (999) 821-14-88</Numbers>
        </Col>
        <Col lg={2} lgOffset={2}>
          <List>
            <Line class="footer-line" />
            <Title>Жилые комплексы</Title>
            <ComplexLink to="#">ВТБ Арена Парк</ComplexLink>
            <ComplexLink to="#">Садовые кварталы</ComplexLink>
            <ComplexLink to="#">Резиденция Монэ</ComplexLink>
            <ComplexLinkAll to="#">Все ЖК Москвы</ComplexLinkAll>
          </List>
        </Col>
        <Col lg={2}>
          <List>
            <Line class="footer-line" />
            <Title>Компания</Title>
            <ComplexLink to="#">Команда</ComplexLink>
            <ComplexLink to="#">О компании</ComplexLink>
          </List>
        </Col>
      </Row>
      <Row>
        <Col lg={8} lgOffset={4}>
          <Copyright>Любая информация, представленная на данном сайте, носит
             исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями статьи 437 ГК
               РФ. © ООО «Ярд», 2017</Copyright>
        </Col>
      </Row>
    </Grid>
  </MainFooter>
);
