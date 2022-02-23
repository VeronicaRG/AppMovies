import {getData} from '../../Services/data';
import React, {useState, useEffect} from 'react';
import {Container, Title, ScrollView} from './styles';
import MovieReview from '../../Components/MovieReview';
import {useTranslation} from 'react-i18next';

const ComingSoon = () => {
  const [upcoming, setUpcoming] = useState([]);
  const {t} = useTranslation();

  function fetchMovies() {
    getData(setUpcoming, '/movie/upcoming');
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>{t('titles.comingSoon')}</Title>
      <ScrollView>
        {upcoming.map(movie => (
          <MovieReview key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </Container>
  );
};

export default ComingSoon;
