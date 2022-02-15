import React from 'react';
import {useTranslation} from 'react-i18next';
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

const MyCarousel = ({data, buttonPress, withGenre, genres}) => {
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const {t} = useTranslation();
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
        renderItem={({item}) =>
          item.backdrop_path ? (
            <View>
              <PosterFilm source={{uri: `${imagePath}${item.backdrop_path}`}} />

              <AboutFilm>
                <NameFilm numberOfLines={1}>
                  {item?.title || item.name}
                </NameFilm>
                {withGenre && (
                  <GenderFilm>
                    {item?.genre_ids
                      ?.map(id => genres?.find(genre => genre?.id === id).name)
                      .join(', ')}
                  </GenderFilm>
                )}
                <ButtonPlayFilm onPress={() => buttonPress(item)}>
                  <ButtonPlayFilmText>
                    {t('buttons.watchNow')}
                  </ButtonPlayFilmText>
                </ButtonPlayFilm>
              </AboutFilm>
              <DegradeBottom pointerEvents="none" />
            </View>
          ) : (
            false
          )
        }
      />
    </Container>
  );
};

export default MyCarousel;
