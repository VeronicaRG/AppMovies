import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const ViewTopic = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const TextTopic = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

export const Arrow = styled.View`
  width: 10px;
  height: 20px;
  border-radius: 5px;
  background: #de1a3a;
`;

export const Icon = styled.Image``;

export const BoxPosterFilm = styled.ScrollView.attrs({
  horizontal: true,
})`
  width: 100%;
`;

export const Film = styled.View`
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
`;

export const PosterFilm = styled.Image`
  width: ${({bigger}) => (bigger === true ? 175 : 130)}px;
  height: ${({bigger}) => (bigger === true ? 260 : 200)}px;
  border-radius: 8px;
`;
