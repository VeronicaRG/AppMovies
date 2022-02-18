/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Modal} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getData} from '../../Services/data';
import {Logo, ArrowLeft, Add, Like, Send} from '../../svgs';
import {
  ModalView,
  DegradeTop,
  Poster,
  ButtonPlay,
  CloseButton,
  Description,
  Info,
  NameOfTheMovie,
  ViewOptions,
  Average,
  Recomendations,
  RecomendationsText,
  Separator,
  ViewAverage,
  ButtonPlayText,
  Option,
  OptionText,
  DegradeBottom,
  HeaderView,
  View,
  OptionViewLogo,
  ViewRecomendations,
} from './styles';

const ModalMovie = ({modalVisible, setModalVisible, data, setData}) => {
  const safeArea = useSafeAreaInsets();
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const [recommendations, setRecommendations] = useState([]);
  const {t} = useTranslation();

  function fetchRecommendations() {
    if (data.title) {
      return getData(setRecommendations, `/movie/${data?.id}/similar`);
    }
    return getData(setRecommendations, `tv/${data?.id}/similar`);
  }

  useEffect(() => {
    if (data) {
      fetchRecommendations();
    }
  }, [data]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <ModalView>
        <FlatList
          data={recommendations}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => (
            <HeaderView>
              <DegradeTop style={{paddingTop: safeArea.top}} />
              <Poster source={{uri: `${imagePath}${data?.backdrop_path}`}} />
              <CloseButton onPress={() => setModalVisible(!modalVisible)}>
                <ArrowLeft width={30} height={30} />
              </CloseButton>
              <DegradeBottom />

              <Info>
                <Logo width={30} height={30} />
                {!!data?.vote_average && (
                  <ViewAverage>
                    <Average average={data?.vote_average}>
                      {data?.vote_average.toFixed(1)}
                    </Average>
                  </ViewAverage>
                )}
              </Info>

              <View>
                <NameOfTheMovie>{data?.title || data?.name}</NameOfTheMovie>
                <Description numberOfLines={3}>{data?.overview}</Description>

                <ButtonPlay>
                  <ButtonPlayText>{t('buttons.playNow')}</ButtonPlayText>
                </ButtonPlay>

                <ViewOptions>
                  <Option>
                    <OptionViewLogo>
                      <Add width={25} height={25} />
                    </OptionViewLogo>
                    <OptionText>{t('buttons.myList')}</OptionText>
                  </Option>
                  <Option>
                    <OptionViewLogo>
                      <Like width={25} height={25} />
                    </OptionViewLogo>
                    <OptionText>{t('buttons.like')}</OptionText>
                  </Option>
                  <Option>
                    <OptionViewLogo>
                      <Send width={25} height={25} />
                    </OptionViewLogo>
                    <OptionText>{t('buttons.share')}</OptionText>
                  </Option>
                </ViewOptions>

                <Separator />
                <RecomendationsText>
                  {t('titles.recommendation')}
                </RecomendationsText>
              </View>
            </HeaderView>
          )}
          renderItem={({item: recommendation}) =>
            recommendation.backdrop_path ? (
              <ViewRecomendations onPress={() => setData(recommendation)}>
                <Recomendations
                  source={{uri: `${imagePath}${recommendation.backdrop_path}`}}
                />
              </ViewRecomendations>
            ) : (
              false
            )
          }
          horizontal={false}
          numColumns={3}
        />
      </ModalView>
    </Modal>
  );
};

export default ModalMovie;
