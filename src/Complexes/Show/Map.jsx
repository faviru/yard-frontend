// @flow

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import type { Location } from '../types';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoianVzdHVzZWJyYWluIiwiYSI6ImNpbHV1dWlmYTAwNmp2Zm02NjZkZmIybGkifQ.feSAgXjbU00mlAjBQyv1lQ',
});

type Props = { location: Location};

export default (props: Props) => {
  const { latitude = '55.739630',
          longitude = '37.610780' } = props.location;

  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/streets-v9"
      zoom={[16]}
      center={[longitude, latitude]}
      containerStyle={{
        height: '19.5rem',
      }}
    >
      <Layer
        type="symbol"
        id="marker"
        layout={{ 'icon-image': 'marker-15' }}
      >
        <Feature coordinates={[latitude, longitude]} />
      </Layer>
    </Map>
  );
};
