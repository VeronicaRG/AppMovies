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

  return (
    <Container>
      <BoxPosterFilm>
        <PosterFilm source={{uri: `${imagePath}${movie.backdrop_path}`}} />
        <ViewTopic>
          <NameMovie>{movie.original_title}</NameMovie>
          <Review numberOfLines={3}>{movie.overview}</Review>
        </ViewTopic>
      </BoxPosterFilm>
    </Container>
  );
};

export default MovieReview;
