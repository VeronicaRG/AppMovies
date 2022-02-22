import React, {useState, useEffect} from 'react';
import MyCarousel from '../../Components/MyCarousel';
import Catalog from '../../Components/Catalog';
import {Container, ScrollContent} from './styles';
import {getData} from '../../Services/data';
import Header from '../../Components/Header';
import ModalMovie from '../../Components/ModalMovie';
import {useTranslation} from 'react-i18next';

const Series = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState();

  const [discovers, setDiscover] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [onTheAir, setOnTheAir] = useState([]);

  const {t} = useTranslation();

  function fetchMovies() {
    getData(setDiscover, '/discover/tv');
    getData(setTrending, '/trending/tv/day');
    getData(setPopular, '/tv/popular');
    getData(setTopRated, '/tv/top_rated');
    getData(setOnTheAir, '/tv/on_the_air');
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
      <Header />
      <ScrollContent>
        <MyCarousel
          data={onTheAir}
          buttonPress={item => {
            setSelectedData(item);
            setModalVisible(true);
          }}
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
          topic={t('catalags.onTheAir')}
          imageCatalog={onTheAir}
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

export default Series;
