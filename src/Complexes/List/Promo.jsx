import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4rem 0;
  text-align: center;
  color: #3e4247;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  line-height: 2.315rem;
  font-weight: 700;
`;

const Text = styled.p`
  margin: 0.5rem 0 1rem 0;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  line-height: 1;
  font-family: 'Fira Sans', sans-serif;
  color: #fff;
  background: #000;
  border: none;
  cursor: pointer;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;

export default () => (
  <Grid>
    <Wrapper>
      <Row center="lg">
        <Col lg={8}>
          <Title>Discover Our New Developments</Title>
          <Text>
            Compass brings a modern approach to new development marketing and sales. From
             boutique rental conversions to luxurious ground-up condominiums, browse our
              portfolio of current offerings.
            </Text>
          <Button>Contact The Team</Button>
        </Col>
      </Row>
    </Wrapper>
  </Grid>
);
