import React from 'react';
import {ChevronRight} from '../../svgs';
import {
  Container,
  ViewTopic,
  TextTopic,
  Arrow,
  BoxPosterFilm,
  Film,
  PosterFilm,
} from './styles';

const Catalog = ({topic, imageCatalog, bigger, modal}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <Container>
      <ViewTopic>
        <TextTopic>{topic}</TextTopic>
        <Arrow>
          <ChevronRight />
        </Arrow>
      </ViewTopic>
      <BoxPosterFilm>
        {imageCatalog?.map(movie =>
          movie.backdrop_path ? (
            <Film onPress={() => modal(movie)} key={movie.id}>
              <PosterFilm
                bigger={bigger}
                source={{uri: `${imagePath}${movie.backdrop_path}`}}
              />
            </Film>
          ) : (
            false
          ),
        )}
      </BoxPosterFilm>
    </Container>
  );
};

export default Catalog;
