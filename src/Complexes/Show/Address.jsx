import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Address = styled.section`
  border-top: 1px solid #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5rem 0 1rem 0;
`;

const Name = styled.div`
`;

const Title = styled.h1`
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;
//
const Detailed = styled.small`
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 300;
  font-family: 'Fira Sans', sans-serif;
  color: #a9afb6;
`;

const ToFavoritesBtn = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  font-size: 0.625rem;
  line-height: 1;
  font-weight: 300;
  font-family: 'Fira Sans', sans-serif;
  color: #00779a;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #e0e0e1;

  &:focus {
    outline: none;
  }
`;

export default () => (
  <Address>
    <Grid>
      <Wrapper>
        <Name>
          <Title>Жилой комплекс «Полянка/44»</Title>
          <Detailed>Район Якиманка, улица Большая Полянка, дом 44 • 119180</Detailed>
        </Name>
        <ToFavoritesBtn>В избранное</ToFavoritesBtn>
      </Wrapper>
    </Grid>
  </Address>
);
