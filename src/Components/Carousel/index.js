import React from 'react';
import {
  Container,
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
      <PosterFilm>
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
      </PosterFilm>
    </Container>
  );
};

export default Carousel;
