import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

const Card = styled(Link) `
  display: flex;
  margin-bottom: 3rem;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  &:last-of-type {
    margin-bottom: 6rem;
  }
`;

const Photo = styled.img`
  flex-shrink: 0;
  width: 30.25rem;
  height: 21.9rem;
`;

const Info = styled.div`
  padding: 1.5rem 1rem;
  background: #fff;
  border-bottom: 2px solid #646971;
`;

const District = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
  font-family: monaco, Consolas, 'Lucida Console', monospace;
  color: #646971;
`;

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  line-height: 1.4;
  font-weight: 700;
  color: #000;
`;

const Description = styled.p`
  margin: 0 7rem 0 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #3e4247;
`;

export default props => (
  <Grid>
    <Card to="/complex">
      <Photo src={props.img} alt="Complex Photo" />
      <Info>
        <District>{props.district}</District>
        <Name>{props.name}</Name>
        <Description>{props.children}</Description>
      </Info>
    </Card>
  </Grid>
);
