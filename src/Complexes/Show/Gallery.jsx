// @flow

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import Pluralizer from './Pluralizer';
import { getExternalImageUrl } from '../../utils';
import type { Complex } from '../types';

const GalleryWrapper = styled.section`
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

export default (props: Complex) => {
  const { images = [] } = props;
  return (
    <GalleryWrapper>
      <Wrapper>
        {images && images.map(image => (
          <Photo
            key={image.id}
            src={getExternalImageUrl(image)}
            alt={image.id}
          />
        ))}
      </Wrapper>
      {images &&
        <Grid>
          <MoreBtn>
            {`${images.length} `}
            <Pluralizer
              count={images.length}
              one={'фотография'}
              some={'фотографии'}
              many={'фотографий'}
            />
          </MoreBtn>
        </Grid>}
    </GalleryWrapper>
  );
};
