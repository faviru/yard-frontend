// @flow

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import { getPublicImageUrl } from '../../utils';

import type { Image } from '../types';

const Gallery = styled.section`
  position: relative;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
`;

const Photo = styled.img`
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

function formatPhotosCount(count) {
  if (count === 1) {
    return '1 фотография';
  }

  if (count <= 4) {
    return `${count} фотографии`;
  }

  return `${count} фотографий`;
}

type Props = {
  images: Array<Image>
}

export default (props: Props) => (
  <Gallery>
    <Wrapper>
      {props.images.map(image => (
        <Photo
          key={image.id}
          src={getPublicImageUrl(image.id)}
          alt="House photo"
        />
      ))}
    </Wrapper>
    <Grid>
      <MoreBtn>{formatPhotosCount(props.images.length)}</MoreBtn>
    </Grid>
  </Gallery>
);
