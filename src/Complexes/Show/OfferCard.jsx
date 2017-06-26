import React from 'react';
import styled from 'styled-components';

const OfferCard = styled.section`
  margin: 0.5rem 0 0 0;
  padding: 1.5rem 2rem;
  background: #fff;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.1;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

const FeatureName = styled.small`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.38;
  font-family: 'Fira Sans', sans-serif;
  color: #a9afb6;
`;

const FeatureValue = styled.p`
  margin: .625rem 0 0 0;
  font-size: 1rem;
  line-height: 1.38;
  font-family: 'Fira Sans', sans-serif;
  color: #3e4247;
`;

const ShowBtn = styled.button`
  display: block;
  margin: 2rem auto 0 auto;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  line-height: 1;
  font-family: 'Fira Sans', sans-serif;
  color: #fff;
  background: #000;
  border: none;
  border-radius: 2px;
`;

export default props => (
  <OfferCard>
    <Title>{props.count}-комнатные квартиры</Title>
    <FeatureName>Площадь</FeatureName>
    <FeatureValue>от {props.area.min} до {props.area.max} м²</FeatureValue>
    <FeatureName>Стоимость</FeatureName>
    <FeatureValue>от {props.cost.min} до {props.cost.max} млн руб</FeatureValue>
    <ShowBtn>Посмотреть предложения</ShowBtn>
  </OfferCard>
);
