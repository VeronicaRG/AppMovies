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

const Catalog = ({topic, imageCatalog, bigger}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <Container>
      <ViewTopic>
        <TextTopic>{topic}</TextTopic>
        <Arrow>
          <Icon />
        </Arrow>
      </ViewTopic>
      <BoxPosterFilm>
        {imageCatalog?.map(movie => (
          <Film key={movie.id}>
            <PosterFilm
              bigger={bigger}
              source={{uri: `${imagePath}${movie.backdrop_path}`}}
            />
          </Film>
        ))}
      </BoxPosterFilm>
    </Container>
  );
};

export default Catalog;
