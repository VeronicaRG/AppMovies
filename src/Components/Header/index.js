import React from 'react';
import {
  Container,
  DegradeTop,
  OptionsButtons,
  LeftButton,
  RightButton,
  TextRightButton,
  ViewRightButton,
} from './styles';
import {Globe, Logo} from '../../svgs';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const {t, i18n} = useTranslation();

  function changeCurrentLanguage() {
    if (i18n.language === 'en') {
      return i18n.changeLanguage('es');
    } else if (i18n.language === 'es') {
      return i18n.changeLanguage('pt-BR');
    }
    return i18n.changeLanguage('en');
  }

  return (
    <Container>
      <DegradeTop pointerEvents={'none'}>
        <OptionsButtons>
          <LeftButton>
            <Logo />
          </LeftButton>
        </OptionsButtons>
      </DegradeTop>
      <ViewRightButton
        onPress={() => {
          changeCurrentLanguage();
        }}>
        <TextRightButton>{t('language')}</TextRightButton>
        <RightButton>
          <Globe />
        </RightButton>
      </ViewRightButton>
    </Container>
  );
};

export default Header;
