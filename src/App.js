import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from './Screens/Movies';
import Series from './Screens/Series';
import ComingSoon from './Screens/ComingSoon';
import Searching from './Screens/Searching';

export function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#212031'},
        }}>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Series" component={Series} />
        <Tab.Screen name="ComingSoon" component={ComingSoon} />
        <Tab.Screen name="Searching" component={Searching} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
