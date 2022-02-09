import React from 'react';
import {
  Container,
  ViewFilm,
  PosterFilm,
  OptionsButtons,
  LeftButton,
  LeftButtonIcon,
  RightButton,
  RightButtonIcon,
  AboutFilm,
  NameFilm,
  GenderFilm,
  ButtonPlayFilm,
  ButtonPlayFilmText,
} from './styles';

const Carousel = () => {
  return (
    <Container>
      <ViewFilm>
        <PosterFilm />

        <OptionsButtons>
          <LeftButton>
            <LeftButtonIcon />
          </LeftButton>
          <RightButton>
            <RightButtonIcon />
          </RightButton>
        </OptionsButtons>

        <AboutFilm>
          <NameFilm>Vero</NameFilm>
          <GenderFilm>Ruiz</GenderFilm>
          <ButtonPlayFilm>
            <ButtonPlayFilmText>Garcia</ButtonPlayFilmText>
          </ButtonPlayFilm>
        </AboutFilm>
      </ViewFilm>
    </Container>
  );
};

export default Carousel;
