import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const Poster = styled.Image`
  width: 150px;
  height: 110px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  flex: 1;
  margin: 20px;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
