import React from 'react';
import {
  Container,
  DegradeTop,
  OptionsButtons,
  LeftButton,
  RightButton,
} from './styles';
import {Globe, Logo} from '../../svgs';

const Header = () => {
  return (
    <Container pointerEvents={'none'}>
      <DegradeTop>
        <OptionsButtons>
          <LeftButton>
            <Logo />
          </LeftButton>
          <RightButton>
            <Globe />
          </RightButton>
        </OptionsButtons>
      </DegradeTop>
    </Container>
  );
};

export default Header;
