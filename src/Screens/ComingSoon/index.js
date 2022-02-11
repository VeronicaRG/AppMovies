import React, {useState} from 'react';
import {Container, Title, ScrollView} from './styles';
import {getData} from '../Services/data';
import MovieReview from '../../Components/MovieReview';

const ComingSoon = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [upcoming, setUpcoming] = useState([]);

  function fetchMovies() {
    getData(setUpcoming, '/movie/upcoming');
  }

  return (
    <Container>
      <Title>COMING SOON</Title>
      <ScrollView>
        <MovieReview
          nameMovie="Discover"
          review="holancrnmcvkrckmxikmef4kcm"
          imageMovieReview={upcoming}
        />

        <MovieReview
          nameMovie="Discover"
          review="holancrnmcvkrckmxikmef4kcm"
          imageMovieReview={upcoming}
        />

        <MovieReview
          nameMovie="Discover"
          review="holancrnmcvkrckmxikmef4kcm"
          imageMovieReview={upcoming}
        />

        <MovieReview
          nameMovie="Discover"
          review={
            'holancrnmcvkrckmxikmef4kcm \nholancrnmcvkrckmxikmef4kcm\nholancrnmcvkrckmxikmef4kcm'
          }
          imageMovieReview={upcoming}
        />

        <MovieReview
          nameMovie="Discover"
          review="holancrnmcvkrckmxikmef4kcm"
          imageMovieReview={upcoming}
        />
      </ScrollView>
    </Container>
  );
};

export default ComingSoon;
