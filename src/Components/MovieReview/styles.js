import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 400px;
  background: #da1c3b;
`;

export const BoxPosterFilm = styled.View``;

export const Film = styled.View`
  background: #1c1825;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
`;

export const PosterFilm = styled.Image`
  width: 100%;
  height: 260px;
`;

export const ViewTopic = styled.View`
  height: 130px;
  padding: 10px;
  background: #1c1825;
`;

export const NameMovie = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
`;
export const Review = styled.Text`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 300;
  color: grey;
`;
