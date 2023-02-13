import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import Dashboard from './src/Dashboard';
import ListComponent from './src/ListComponent';
import { Test } from './src/Test';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    //Displaying Dashboard..................
    // <View>
    //   <Dashboard />
    // </View>

    //Using Navigation to reach Home page...............
    <NavigationContainer>
      <stack.Navigator initialRouteName="Dashboard">
        <stack.Screen name='Dashboard' component={Dashboard}/>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name='Test' component={Test}/>
        <stack.Screen name='todo' component={ListComponent}/>
        </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;