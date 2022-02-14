import React, {useState, useEffect} from 'react';
import MyCarousel from '../../Components/MyCarousel';
import Catalog from '../../Components/Catalog';
import {Container, ScrollContent} from './styles';
import {getData} from '../Services/data';
import Header from '../../Components/Header';

const Series = () => {
  const [discovers, setDiscover] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);

  function fetchMovies() {
    // getData(setDiscover, '/discover/tv');
    // getData(setTrending, '/trending/tv/day');
    // getData(setPopular, '/tv/popular');
    // getData(setTopRated, '/tv/top_rated');
    getData(setOnTheAir, '/tv/on_the_air');
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Header />
      <ScrollContent>
        <MyCarousel data={onTheAir} buttonPress={fetchMovies} />
        <Catalog bigger={true} topic="Discover" imageCatalog={discovers} />
        <Catalog topic="Trending" imageCatalog={trending} />
        <Catalog topic="Popular" imageCatalog={popular} />
        <Catalog topic="Top Rated" imageCatalog={topRated} />
        <Catalog topic="On the air" imageCatalog={onTheAir} />
      </ScrollContent>
    </Container>
  );
};

export default Series;
