import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ModalView = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: #171721;
  justify-content: center;
`;
export const HeaderView = styled.View``;

export const DegradeTop = styled(LinearGradient).attrs({
  colors: ['#000', 'transparent'],
})`
  width: 110%;
  height: 200px;
  position: absolute;
  top: 0px;
  padding: 15px;
  z-index: 3;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 320px;
  position: absolute;
  top: 0px;
  z-index: 1;
  background-color: white;
`;

export const CloseButton = styled.TouchableOpacity`
  background: #00000070;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  z-index: 3;
  margin: 40px 20px;
`;
export const DegradeBottom = styled(LinearGradient).attrs({
  colors: ['transparent', '#1c1825'],
})`
  width: 100%;
  height: 100px;
  margin-top: 220px;
  position: absolute;
  z-index: 3;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  margin-top: 300px;
  padding: 0px 15px;
`;

export const ViewAverage = styled.View`
  width: 60px;
  height: 30px;
  border-radius: 5px;
  border: solid;
  border-color: #2d2d2d;
  justify-content: center;
  align-items: center;
`;

export const Average = styled.Text`
  font-size: 16px;
  color: ${({average}) => {
    if (average >= 7.5) {
      return 'green';
    } else if (average >= 5) {
      return 'yellow';
    }
    return 'red';
  }};
`;

export const View = styled.View`
  padding: 0px 15px;
  margin-top: 330px;
`;

export const NameOfTheMovie = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #75757b;
`;

export const ButtonPlay = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #da1a37;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  align-self: center;
`;

export const ButtonPlayText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export const ViewOptions = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Option = styled.TouchableOpacity`
  width: 30%;
  height: 55px;
  border-radius: 5px;
  background-color: #101017;
  justify-content: center;
  align-items: center;
  margin: 10px 6px;
`;
export const OptionViewLogo = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin: 5px;
`;

export const OptionText = styled.Text`
  font-size: 8px;
  color: #6c6c71;
`;

export const Separator = styled.View`
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background-color: #da1a37;
  align-self: center;
`;

export const RecomendationsText = styled.Text`
  margin: 10px 4px;
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const ViewRecomendations = styled.TouchableOpacity``;

export const Recomendations = styled.Image`
  width: 110px;
  height: 170px;
  border-radius: 10px;
  margin: 8px 10px;
`;
