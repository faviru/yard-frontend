import React from "react";
import { Grid } from "react-flexbox-grid";
import styled from "styled-components";

const Gallery = styled.section`
  position: relative;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
`;

const Element = styled.img`
  flex-grow: 1;
  flex-shrink: 0;
  height: 25rem;
`;
const MoreBtn = styled.button`
  position: absolute;
  bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.625rem;
  line-height: 1;
  font-weight: 300;
  font-family: 'Fira Sans', sans-serif;
  color: #fff;
  background: #00779a;
  border-radius: 2px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export default () => (
  <Gallery>
    <Wrapper>
      <Element src={`${process.env.PUBLIC_URL}/img/bitmap_1.png`} alt="House photo" />
      <Element src={`${process.env.PUBLIC_URL}/img/bitmap_2.png`} alt="House photo" />
      <Element src={`${process.env.PUBLIC_URL}/img/bitmap_5.png`} alt="House photo" />
      <Element src={`${process.env.PUBLIC_URL}/img/bitmap_3.png`} alt="House photo" />
      <Element src={`${process.env.PUBLIC_URL}/img/bitmap_4.png`} alt="House photo" />
    </Wrapper>
    <Grid>
      <MoreBtn>41 фотография</MoreBtn>
    </Grid>
  </Gallery>
);
