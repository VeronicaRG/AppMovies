import React, {useState, useEffect} from 'react';
import Movie from '../../Components/Movie';
import {getData} from '../Services/data';
import {SearchIcon} from '../../svgs';
import {
  Container,
  Title,
  ScrollView,
  BoxInput,
  LogoInsideInput,
  TextInput,
  Text,
} from './styles';
const Searching = () => {
  const [upcoming, setUpcoming] = useState([]);

  function fetchMovies() {
    getData(setUpcoming, '/movie/upcoming');
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <Container>
      <Title>Find your movie</Title>
      <BoxInput>
        <LogoInsideInput>
          <SearchIcon height={24} width={24} color={'#B8B7C3'} />
        </LogoInsideInput>
        <TextInput
          placeholder="Name of the movie/serie"
          placeholderTextColor="#9C9BA8"
        />
      </BoxInput>
      <ScrollView>
        <Text>Trending Now</Text>
        {upcoming.map(movie => (
          <Movie movie={movie} />
        ))}
      </ScrollView>
    </Container>
  );
};
export default Searching;
