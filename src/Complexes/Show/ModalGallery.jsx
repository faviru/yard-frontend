// @flow

import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { getPublicImageUrl } from '../../utils';

const Image = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: inline-block;
  height: calc(100vh / 1.2);
  padding: 0 4rem;
`;

type Props = {
  currentRequestedImageId: ?number,
  images: Array<string>
}

const customStyles = {
  overlay: {
    heigth: '100vh',
    width: '100vw',
    background: 'rgba(17, 17, 17, 0.95)',
  },
  content: {
    top: '0',
    left: '0',
    heigth: '100vh',
    width: '100vw',
    padding: '4rem 0 0 0',
    background: 'transparent',
    border: 'none',
  },
};

export default class ModalGallery extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  state: {}

  render() {
    const isOpen = this.props.currentRequestedImageId !== undefined;
    return (
      <Modal
        isOpen={isOpen}
        contentLabel="Фотографии ЖК"
        style={customStyles}
      >
        {this.props.images.map(image => (
          <Image src={getPublicImageUrl(image)} alt="" />
        ))}
      </Modal>
    );
  }
}
