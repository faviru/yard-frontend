import React from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid #e0e0e1;
`;

const Parameter = styled.div`
  display: inline-block;
  margin-right: 3rem;
`;

const Title = styled.h2`
  margin: 0 0 0.625rem 0;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

const SubTitle = styled.small`
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 300;
  font-family: 'Fira Sans', sans-serif;
  color: #a9afb6;
`;

export default () => (
  <Grid>
    <Wrapper>
      <Parameter>
        <Title>950</Title>
        <SubTitle>предложений</SubTitle>
      </Parameter>
      <Parameter>
        <Title>John McAslan + Partners</Title>
        <SubTitle>архитектор</SubTitle>
      </Parameter>
      <Parameter>
        <Title>Группа «ПСН»</Title>
        <SubTitle>застройщик</SubTitle>
      </Parameter>
    </Wrapper>
  </Grid>
);
