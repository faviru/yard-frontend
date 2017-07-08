// @flow

import React from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import ModalGallery from './ModalGallery';
import { getPublicImageUrl } from '../../utils';
import type { Image } from '../types';

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

export default class Gallery extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { clickedImageId: undefined };
  }

  state: {
    clickedImageId: ?number,
  }

  onImageClick(id: number) {
    this.setState({ clickedImageId: id });
  }

  render() {
    return (
      <GalleryWrapper>
        <Wrapper>
          {this.props.images.map((image, index) => (
            <Photo
              key={image.id}
              src={getPublicImageUrl(image.id)}
              alt="House photo"
              onClick={() => this.onImageClick(index)}
            />
          ))}
        </Wrapper>
        {this.props.images.length &&
          <Grid>
            <MoreBtn>{formatPhotosCount(this.props.images.length)}</MoreBtn>
          </Grid>}
        <ModalGallery
          currentRequestedImageId={this.state.clickedImageId}
          images={this.props.images.map(i => i.id)}
        />
      </GalleryWrapper>
    );
  }
}
