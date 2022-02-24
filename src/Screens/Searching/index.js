/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import ModalMovie from '../../Components/ModalMovie';
import Movie from '../../Components/Movie';
import {getData} from '../../Services/data';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [trending, setTrending] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef();
  const {t} = useTranslation();

  function inputFocus() {
    inputRef.current.focus();
  }

  function fetchMovies() {
    getData(setTrending, '/trending/movie/day');
  }
  function findMovies() {
    getData(setFoundMovies, `/search/movie?query=${searchText}`);
  }
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchText) {
      findMovies();
    }
  }, [searchText]);

  return (
    <Container>
      <Title>{t('titles.findYourMovie')}</Title>
      <BoxInput onPress={inputFocus}>
        <LogoInsideInput>
          <SearchIcon height={24} width={24} color={'#B8B7C3'} />
        </LogoInsideInput>
        <TextInput
          ref={inputRef}
          placeholder={t('inPut.nameOfTheMovie/Serie')}
          placeholderTextColor="#9C9BA8"
          value={searchText}
          onChangeText={setSearchText}
        />
      </BoxInput>
      <ScrollView>
        {searchText === '' ? (
          <>
            <Text>{t('titles.trendingNow')}</Text>
            {trending.map(movie => (
              <Movie
                key={movie.id}
                modal={item => {
                  setSelectedData(item);
                  setModalVisible(true);
                }}
                movie={movie}
              />
            ))}
          </>
        ) : (
          foundMovies.map(movie => (
            <Movie
              modal={item => {
                setSelectedData(item);
                setModalVisible(true);
              }}
              key={movie.id}
              movie={movie}
            />
          ))
        )}
      </ScrollView>
      <ModalMovie
        data={selectedData}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setData={setSelectedData}
      />
    </Container>
  );
};
export default Searching;
