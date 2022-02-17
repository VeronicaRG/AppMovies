import React from 'react';
import {
  Container,
  PosterFilm,
  ViewTopic,
  NameMovie,
  Review,
  BoxPosterFilm,
} from './styles';

const MovieReview = ({movie}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  return movie.backdrop_path ? (
    <Container>
      <BoxPosterFilm>
        <PosterFilm source={{uri: `${imagePath}${movie.backdrop_path}`}} />
        <ViewTopic>
          <NameMovie>{movie.title}</NameMovie>
          <Review numberOfLines={3}>{movie.overview}</Review>
        </ViewTopic>
      </BoxPosterFilm>
    </Container>
  ) : (
    false
  );
};

export default MovieReview;
