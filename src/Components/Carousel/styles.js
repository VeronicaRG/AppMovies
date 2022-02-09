import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const PosterFilm = styled.View`
  width: 100%;
  height: 400px;
  padding: 40px;
`;

export const OptionsButtons = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const LeftButton = styled.TouchableOpacity`
  background: red;
  width: 30px;
  height: 30px;
`;

export const LeftButtonIcon = styled.Image``;

export const RightButton = styled.TouchableOpacity`
  background: green;
  width: 30px;
  height: 30px;
`;
export const RightButtonIcon = styled.Image``;

export const AboutFilm = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;
`;

export const NameFilm = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const GenderFilm = styled.Text`
  font-size: 20px;
  color: grey;
`;

export const ButtonPlayFilm = styled.TouchableOpacity`
  background: red;
  width: 280px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const ButtonPlayFilmText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;
