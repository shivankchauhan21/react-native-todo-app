/**
 * List.js is used to display the ToDo list on our Dashboard
 * Imported by Dashboard..
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const List = (prop) => {
    return(
        <View style={styles.items}>
            <Text style={styles.text}>{prop.heading}</Text>
            <Text style={styles.text}>{prop.content}</Text>
        </View>
    );
  };
//Styling List.js..................
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'red',
    borderWidth: 1,
  },
  text:{
    padding:5
  }
});

export default List;
