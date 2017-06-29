import React from 'react';
import DevelopmentLogo from './DevelopmentLogo';
import Promo from './Promo';
import Card from './Card';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complexList: [] };
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes')
      .then(response => response.json())
      .then((complexes) => {
        console.log(complexes);
        this.setState({
          complexList: complexes.items,
        });
      });
  }

  render() {
    return (
      <div>
        <DevelopmentLogo />
        <Promo />
        {this.state.complexList.map(complex => (
          <Card
            key={complex.id}
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
