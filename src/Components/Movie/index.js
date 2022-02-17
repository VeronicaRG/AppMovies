import React from 'react';
import {Container, Poster, Name} from './styles';

const Movie = ({movie, modal}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  return movie.backdrop_path ? (
    <Container onPress={() => modal(movie)}>
      <Poster source={{uri: `${imagePath}${movie.backdrop_path}`}} />
      <Name>{movie.title}</Name>
    </Container>
  ) : (
    false
  );
};

export default Movie;
