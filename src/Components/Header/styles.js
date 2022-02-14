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

export const LeftButtonIcon = styled.Image``;

export const RightButton = styled.TouchableOpacity`
  background: #00000070;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;
export const RightButtonIcon = styled.Image``;
