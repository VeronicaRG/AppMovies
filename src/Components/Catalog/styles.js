import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 320px;
  background: purple;
`;

export const ViewTopic = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const TextTopic = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: white;
`;

export const Arrow = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: red;
`;

export const Icon = styled.Image``;

export const BoxPosterFilm = styled.ScrollView.attrs({
  horizontal: true,
})`
  width: 100%;
`;

export const Film = styled.View`
  width: 175px;
  height: 260px;
  border-radius: 8px;
  background: black;
  flex-direction: row;
  margin-left: 10px;
`;

export const PosterFilm = styled.Image`
  width: 175px;
  height: 260px;
  border-radius: 8px;
`;
