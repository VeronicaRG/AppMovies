import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {Movie as MovieIcon, TvShow, SearchIcon, Calendar} from './svgs';
import Movies from './Screens/Movies';
import Series from './Screens/Series';
import ComingSoon from './Screens/ComingSoon';
import Searching from './Screens/Searching';
import {StatusBar} from 'react-native';

const Tab = AnimatedTabBarNavigator();

export function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#222222',
          activeBackgroundColor: '#DE1A3A',
        }}
        appearance={{
          tabBarBackground: '#212031',
        }}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <MovieIcon
                height={size ? size : 24}
                width={size ? size : 24}
                color={focused ? color : '#B8B7C3'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Series"
          component={Series}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <TvShow
                height={size ? size : 24}
                width={size ? size : 24}
                color={focused ? color : '#B8B7C3'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ComingSoon"
          component={ComingSoon}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <SearchIcon
                height={size ? size : 24}
                width={size ? size : 24}
                color={focused ? color : '#B8B7C3'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Searching"
          component={Searching}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Calendar
                height={size ? size : 24}
                width={size ? size : 24}
                color={focused ? color : '#B8B7C3'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
