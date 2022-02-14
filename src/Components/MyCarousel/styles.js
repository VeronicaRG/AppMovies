import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View``;

export const DegradeBottom = styled(LinearGradient).attrs({
  colors: ['transparent', '#1c1825'],
})`
  width: 100%;
  height: 200px;
  margin-top: 210px;
  position: absolute;
  z-index: 2;
`;

export const View = styled.View``;

export const PosterFilm = styled.Image`
  margin-top: 10px;
  height: 400px;
  width: 100%;
`;

export const AboutFilm = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-top: 260px;
  position: absolute;
  height: 120px;
  width: 100%;
  z-index: 70;
`;

export const NameFilm = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
`;

export const GenderFilm = styled.Text`
  font-size: 15px;
  color: grey;
`;

export const ButtonPlayFilm = styled.TouchableOpacity`
  background: #de1a3a;
  width: 280px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const ButtonPlayFilmText = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-weight: 800;
`;
