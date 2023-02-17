import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = ({navigation, route}) => {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Create post" onPress={() => navigation.navigate('Test')} />
      <Text style={{margin: 10, backgroundColor: 'black'}}>
        Post: {route.params?.post}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default Home;
