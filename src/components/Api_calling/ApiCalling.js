import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ApiCalling = () => {
  const apiUrl = 'https://reactnative.dev/movies.json';
  const [isloading, setIsloading] = useState(true);
  const [Data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {isloading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={Data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
              {item.title},{item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ApiCalling;
