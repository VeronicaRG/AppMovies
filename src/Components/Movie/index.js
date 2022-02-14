import React from 'react';
import {Container, Poster, Name} from './styles';

const Movie = ({movie}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  return (
    <Container>
      <Poster source={{uri: `${imagePath}${movie.backdrop_path}`}} />
      <Name>{movie.original_title}</Name>
    </Container>
  );
};

export default Movie;
