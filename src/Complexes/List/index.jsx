import React from 'react';
import DevelopmentLogo from './DevelopmentLogo';
import Promo from './Promo';
import Card from './Card';
import ComplexesResponse from '../types';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complexes: [] };
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes')
      .then(response => response.json())
      .then((responsejson: ComplexesResponse) => {
        console.log(responsejson);
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
            image={complex.images[0]}
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
