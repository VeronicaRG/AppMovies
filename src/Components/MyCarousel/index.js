import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  Container,
  View,
  PosterFilm,
  AboutFilm,
  NameFilm,
  GenderFilm,
  ButtonPlayFilm,
  ButtonPlayFilmText,
  DegradeBottom,
} from './styles';

const MyCarousel = ({data, buttonPress, genres}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  return (
    <Container>
      <Carousel
        data={data}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        loop={true}
        autoplay={true}
        autoplayInterval={10000}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        renderItem={({item}) => (
          <View>
            <PosterFilm source={{uri: `${imagePath}${item.backdrop_path}`}} />

            <AboutFilm>
              <NameFilm>{item.original_title}</NameFilm>
              <GenderFilm>
                {item.genre_ids.map(
                  id => genres.find(genre => genre.id === id).name,
                )}
              </GenderFilm>
              <ButtonPlayFilm onPress={buttonPress}>
                <ButtonPlayFilmText>Watch Now</ButtonPlayFilmText>
              </ButtonPlayFilm>
            </AboutFilm>
            <DegradeBottom pointerEvents="none" />
          </View>
        )}
      />
    </Container>
  );
};

export default MyCarousel;
