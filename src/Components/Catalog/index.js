import React from 'react';
import {
  Container,
  ViewTopic,
  TextTopic,
  Arrow,
  Icon,
  BoxPosterFilm,
  Film,
  PosterFilm,
} from './styles';

const Catalog = () => {
  return (
    <Container>
      <ViewTopic>
        <TextTopic>Hola</TextTopic>
        <Arrow>
          <Icon />
        </Arrow>
      </ViewTopic>
      <BoxPosterFilm>
        <Film>
          <PosterFilm />
        </Film>
      </BoxPosterFilm>
    </Container>
  );
};

export default Catalog;
