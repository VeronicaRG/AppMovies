import React, {useState, useEffect} from 'react';
import {Container, Title, ScrollView} from './styles';
import {getData} from '../Services/data';
import MovieReview from '../../Components/MovieReview';

const ComingSoon = () => {
  const [upcoming, setUpcoming] = useState([]);

  function fetchMovies() {
    getData(setUpcoming, '/movie/upcoming');
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>COMING SOON</Title>
      <ScrollView>
        {upcoming.map(movie => (
          <MovieReview movie={movie} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default ComingSoon;
