import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Address from './Address';
import Gallery from './Gallery';
import Summary from './Summary';
import Features from './Features';
import Description from './Description';
import Infrastructure from './Infrastructure';
import OfferCard from './OfferCard';
import AreaGuide from './AreaGuide';
import AreaFeatures from './AreaFeatures';

const Complex = styled.div`
  background: #fff;
`;

const OfferCards = styled.section`
  padding: 4rem 0;
  background: #f4f5f9;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complexData: [] };
  }

  componentDidMount() {
    return fetch(
      `https://api.jqestate.ru/v1/complexes/${this.props.match.params.id}`,
    )
      .then(response => response.json())
      .then((complex) => {
        this.setState({
          complexData: complex,
        });
      });
  }

  render() {
    return (
      <Complex>
        <Address
          name={this.state.complexData.name}
          detailed={this.state.complexData.location}
        />
        <Gallery images={this.state.complexData.images || []} />
        <Summary />
        <Features
          propertiesCount={
            (this.state.complexData.statistics || { propertiesCount: '' })
              .propertiesCount
          }
          priceFrom={
            (this.state.complexData.statistics || {
              price: { from: { rub: 0 } },
            }).price.from.rub
          }
          priceTo={
            (this.state.complexData.statistics || { price: { to: { rub: 0 } } })
              .price.to.rub
          }
        />
        <Description />
        <Infrastructure />
        <OfferCards>
          <Grid>
            <Row center="lg">
              <Col lg={4}>
                <Title>Предложения в ЖК «Полянка/44»</Title>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <OfferCard
                  count={1}
                  area={{ min: 59, max: 120 }}
                  cost={{ min: 20.3, max: 84.2 }}
                />
              </Col>
              <Col lg={4}>
                <OfferCard
                  count={2}
                  area={{ min: 59, max: 120 }}
                  cost={{ min: 20.3, max: 84.2 }}
                />
              </Col>
              <Col lg={4}>
                <OfferCard
                  count={3}
                  area={{ min: 59, max: 120 }}
                  cost={{ min: 20.3, max: 84.2 }}
                />
              </Col>
            </Row>
          </Grid>
        </OfferCards>
        <AreaGuide />
        <AreaFeatures />
      </Complex>
    );
  }
}
