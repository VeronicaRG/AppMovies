import React, {useEffect, useState} from 'react';
import MyCarousel from '../../Components/MyCarousel';
import Catalog from '../../Components/Catalog';
import {Container, ScrollContent} from './styles';
import {getData, getGenre} from '../Services/data';
import Header from '../../Components/Header';

const Movies = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [discovers, setDiscover] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genre, setGenre] = useState([]);

  function fetchMovies() {
    // getData(setDiscover, '/discover/movie');
    // getData(setTrending, '/trending/movie/day');
    // getData(setPopular, '/movie/popular');
    // getData(setTopRated, '/movie/top_rated');
    getData(setUpcoming, '/movie/upcoming');
    getGenre(setGenre, '/genre/movie/list');
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Header />
      <ScrollContent>
        <MyCarousel
          data={upcoming}
          buttonPress={fetchMovies}
          withGenre={true}
          genres={genre}
        />
        <Catalog bigger={true} topic="Discover" imageCatalog={discovers} />
        <Catalog topic="Trending" imageCatalog={trending} />
        <Catalog topic="Popular" imageCatalog={popular} />
        <Catalog topic="Top Rated" imageCatalog={topRated} />
        <Catalog topic="Upcoming" imageCatalog={upcoming} />
      </ScrollContent>
    </Container>
  );
};

export default Movies;
