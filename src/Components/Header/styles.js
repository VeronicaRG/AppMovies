import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  width: 100%;
  height: 200px;
  position: absolute;
  z-index: 1;
`;

export const DegradeTop = styled(LinearGradient).attrs({
  colors: ['#000', 'transparent'],
})`
  width: 100%;
  height: 300px;
`;

export const OptionsButtons = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin: 45px;
  width: 320px;
`;

export const LeftButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ViewRightButton = styled.TouchableOpacity`
  background: #00000070;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
  position: absolute;
  top: 55px;
  right: 10px;
`;

export const RightButton = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 30;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TextRightButton = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  margin-left: 10px;
`;
