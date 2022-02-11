import React from 'react';
import {
  Container,
  BoxPosterFilm,
  Film,
  PosterFilm,
  ViewTopic,
  NameMovie,
  Review,
} from './styles';

const MovieReview = ({nameMovie, review, imageMovieReview}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <Container>
      <BoxPosterFilm>
        {imageMovieReview?.map(movie => (
          <Film>
            <PosterFilm source={{uri: `${imagePath}${movie.backdrop_path}`}} />
          </Film>
        ))}
      </BoxPosterFilm>
      <ViewTopic>
        <NameMovie>{nameMovie}</NameMovie>
        <Review>{review}</Review>
      </ViewTopic>
    </Container>
  );
};

export default MovieReview;
