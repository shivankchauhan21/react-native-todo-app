/**
 * ListComponent.js is used to display a single todo
 * Imported by Dashboard..
 */

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';

const ListComponent = ({route}) => {
  const navigation = useNavigation();
  const {heading,content} = route.params;
  const {id} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>heading : {JSON.stringify(heading)}</Text>
      <Text style={styles.text}>content : {JSON.stringify(content)}</Text>
      <Button title='Delete' onPress={()=>{
        navigation.navigate({
          name:'Dashboard',
          params:{deleteid : JSON.stringify(id)}
        })
      }}/>
      <Button title='Back' onPress={()=>navigation.goBack()}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
  items: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'red',
    borderWidth: 1,
  },
  text: {
    padding: 5,
    color:'white'
  },
});

export default ListComponent;
