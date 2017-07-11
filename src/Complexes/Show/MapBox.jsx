// @flow

import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import type { Location } from '../types';

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAP_TOKEN,
});

type Props = { location: Location};

export default (props: Props) => {
  const { latitude = '55.739630',
          longitude = '37.610780' } = props.location;

  return (
    <MapBox
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/streets-v9"
      zoom={[11.5]}
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
    </MapBox>
  );
};
