// import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
// // import {AsyncStorage} from 'react-native';
// import React, { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function App() {
//   const [name, setname] = useState('hi');
//   const setData = () => {
//     AsyncStorage.setItem("name", name);
//     // console.log("tData");
//   }
//   const getData = async ()=> {
//     const name1 = await AsyncStorage.getItem("name");
//     // Alert.alert("name1");
//     console.log(name1);
//   }
//   return (
//     <View>
     
//       <View style={{ margin: 20 }}>
//         <Button title='setData' onPress={() => setData()} />
//       </View> 
//       <View style={{ margin: 20 }}>
//         <Button title='viewData' onPress={() => getData()} />
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
// });






import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import Dashboard from './src/Dashboard';

const App = () =>{
  return(
    <View> 
      <Dashboard/>
    </View>
  );
}; 
export default App;