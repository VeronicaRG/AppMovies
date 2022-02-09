import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: red;
  flex: 1;
  width: 100%;
  height: 100px;
`;

export const ViewFilm = styled.View``;

export const PosterFilm = styled.View`
  background: #ffffff;
  width: 100px;
  height: 100px;
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

export const LeftButtonIcon = styled.Image`
  background: red;
  width: 30px;
  height: 30px;
`;

export const RightButton = styled.TouchableOpacity`
  background: green;
  width: 30px;
  height: 30px;
`;
export const RightButtonIcon = styled.Image`
  background: green;
  width: 30px;
  height: 30px;
`;

export const AboutFilm = styled.View`
  justify-content: space-between;
  align-items: center;
`;

export const NameFilm = styled.Text`
  font-size: 20px;
  width: bold;
  color: #ffffff;
`;

export const GenderFilm = styled.Text`
  font-size: 20px;
  color: grey;
`;

export const ButtonPlayFilm = styled.TouchableOpacity`
  background: red;
  width: 300px;
  height: 100px;
  border-radius: 30px;
`;

export const ButtonPlayFilmText = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;
