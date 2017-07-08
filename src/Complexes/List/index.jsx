// @flow

import React from 'react';
import type { Children } from 'react';

import DevelopmentLogo from './DevelopmentLogo';
import Promo from './Promo';
import Card from './Card';
import get from '../../api';
import { getExternalImageUrl } from '../../utils';
import type { ComplexesResponse, Complex } from '../types';

type Props = {
  children: Children;
}

export default class Index extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = { complexes: [] };
  }

  state: {
    complexes: Array<Complex>
  }

  componentDidMount() {
    get('/complexes')
      .then((responsejson: ComplexesResponse) => {
        this.setState({
          complexes: responsejson.items,
        });
      });
  }

  render() {
    return (
      <div>
        <DevelopmentLogo />
        <Promo />
        {this.state.complexes.map(complex => (
          <Card
            key={complex.id}
            id={complex.id}
            imageLink={getExternalImageUrl(complex.image)}
            location={complex.location}
            name={complex.name}
          >
            The Lewis Steel Building is a masterful industrial conversion located in the heart of
            Williamsburg. Located at 76 North 4th Street, the former 1930&#39;s
             steel factory has been transformed into 83 individually
              unique and luxury loft apartments.
          </Card>
        ))}
      </div>
    );
  }
}
