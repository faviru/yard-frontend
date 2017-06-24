import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Description = styled.section`
  padding: 2rem 0 1.5rem 0;
  border-bottom: 1px solid #e0e0e1;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.13;
  font-weight: 700;
  font-family: 'Philosopher', serif;
  color: #3e4247;
`;

const Text = styled.p`
  margin: 0 0 1.7rem 0;
  font-size: 1rem;
  line-height: 1.56;
  font-family: 'Fira Sans', sans-serif;
  color: #3e4247;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default () => (
  <Description>
    <Grid>
      <Row>
        <Col lg={2}>
          <Title>Описание</Title>
        </Col>
        <Col lg={10}>
          <Text class="complex-description-text">ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля. Территория разделена на три зоны: жилой район, центральный стадион «Динамо» и большой спортивный парк.</Text>
          <Text class="complex-description-text">Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо», отель «Hyatt Regency Moscow» и четыре современных бизнес-центра. На территории — рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки, магазины и отделения банков. В каждом корпусе работает консьерж и круглосуточная охрана. Для жителей оборудованы технические помещения под хранение колясок и велосипедов, комнаты для домашних животных и уютные вестибюли с мягкими креслами для встреч с друзьями и соседями.</Text>
          <Text class="complex-description-text">Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей, торгово-развлекательный комплекс, подземная парковка для гостей и две крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне: здесь можно сходить на концерт или фестиваль, поболеть за любимую команду и купить новую рубашку в торговом комплексе.</Text>
          <Text class="complex-description-text">Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые зоны, для подростков — спортивные площадки на открытом воздухе, для взрослых — велосипедные дорожки и зоны отдыха, где можно подышать свежим воздухом во время рабочего перерыва.</Text>
        </Col>
      </Row>
    </Grid>
  </Description>
);
