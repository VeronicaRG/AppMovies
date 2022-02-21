import React, {useEffect, useState} from 'react';
import MyCarousel from '../../Components/MyCarousel';
import Catalog from '../../Components/Catalog';
import {Container, ScrollContent} from './styles';
import {getData, getGenre} from '../../Services/data';
import Header from '../../Components/Header';
import ModalMovie from '../../Components/ModalMovie';
import {useTranslation} from 'react-i18next';

const Movies = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const [discovers, setDiscover] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genre, setGenre] = useState([]);

  const {t} = useTranslation();

  function fetchMovies() {
    getData(setDiscover, '/discover/movie');
    getData(setTrending, '/trending/movie/day');
    getData(setPopular, '/movie/popular');
    getData(setTopRated, '/movie/top_rated');
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
          buttonPress={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
          withGenre={true}
          genres={genre}
        />
        <Catalog
          bigger={true}
          topic={t('catalags.discover')}
          imageCatalog={discovers}
          modal={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
        />
        <Catalog
          topic={t('catalags.trending')}
          imageCatalog={trending}
          modal={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
        />
        <Catalog
          topic={t('catalags.popular')}
          imageCatalog={popular}
          modal={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
        />
        <Catalog
          topic={t('catalags.topRated')}
          imageCatalog={topRated}
          modal={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
        />
        <Catalog
          topic={t('catalags.upcoming')}
          imageCatalog={upcoming}
          modal={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
        />
      </ScrollContent>
      <ModalMovie
        data={selectedData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setData={setSelectedData}
      />
    </Container>
  );
};

export default Movies;
