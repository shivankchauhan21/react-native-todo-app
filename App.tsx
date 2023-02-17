import React from 'react';
// import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/components/TempComponents/Home';
import Dashboard from './src/components/todoComponents/Dashboard';
import ListComponent from './src/components/todoComponents/ListComponent';
import {Test} from './src/components/TempComponents/Test';
import ApiCalling from './src/components/Api_calling/ApiCalling';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    //Displaying Dashboard..................
    // <View>
    //   <Dashboard />
    // </View>

    //Using Navigation to reach Home page...............
    <NavigationContainer>
      <stack.Navigator initialRouteName="Api">
        <stack.Screen name="Dashboard" component={Dashboard} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Test" component={Test} />
        <stack.Screen name="todo" component={ListComponent} />
        <stack.Screen name="Api" component={ApiCalling} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
