/**
 * This is Dashboard.js
 * In this file we are going to import Two others File i.e. List.js and Listcomponents.js
 * List.js - This file is used to display the List of TO-DO
 * ListComponents.js - This file will show a single component from  TO-DO
 *
 * ***********************************************************************
 */

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  ActionSheetIOS,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Importing Two components to dashboard whic we are going to render according to user................
import List from './List';
import ListComponent from './ListComponent';
import ListComponents from './ListComponent';

//Main Functional Component........................
const Dashboard = () => {
  //Usestate to switch between components (0 = ListComponent and 1 = List)  .......
  const [Status, setStatus] = useState(1);

  //Use to store id for clicked object helps in openeing the clicked component.............
  const [ID, setID] = useState(0);

  const [HEADING, setHEADING] = useState('');
  const [CONTENT, setCONTENT] = useState('');

  //Data stores and array of object in state for our To-Do List /.....................
  const [DATA, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData(DATA);
  },[DATA]);

  //to add all todo to DATA state.........
  const saveData = async (DATA) => {
    await AsyncStorage.setItem('localData', JSON.stringify(DATA));
  };

  const loadData = async () => {
    const tempData = await AsyncStorage.getItem('localData');
    if (DATA != null) setData(JSON.parse(tempData));
  };

  //This function work to delete the object from an array i.e. DATA
  const deleteFromTODO = id => {
    let newArray = DATA.filter(function (el) {
      if (el.id !== id) return el;
    });
    setData(newArray);
  };
  const addTodo = async () => {
    //If information is not entered the data will not save............
    if (HEADING == '') {
      Alert.alert('Enter Heading');
    } else if (CONTENT == '') {
      Alert.alert('Enter Content');
    } else {
      const obj = {
        id: DATA.length + 1,
        heading: HEADING,
        content: CONTENT,
      };
      setData([...DATA, obj]);
      setHEADING('');
      setCONTENT('');
    }
  };

  //This function is called when we have Status = 0
  //Opens ListComponent Component to display selected ToDo.
  //A touchable used to delete and go back(setStatus = 1)
  const callListComponent = ({ item }) => {
    if (item.id == ID)
      return (
        <View>
          <ListComponent heading={item.heading} content={item.content} />
          <TouchableOpacity
            onPress={() => {
              setStatus(1);
              deleteFromTODO(item.id);
            }}>
            <Text style={styles.right}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setStatus(1);
            }}>
            <Text style={styles.right}>Back</Text>
          </TouchableOpacity>
        </View>
      );
  };

  //RenderItem for FlatList ....................
  //Returning list.js Component and a touchable used to setStatus = 0................
  const renderItem = ({ item }) => {
    return (
      <View>
        <View>
          <List heading={item.heading} content={item.content} />
        </View>
        <TouchableOpacity
          onPress={() => {
            setID(item.id);
            setStatus(0);
          }}>
          <Text style={styles.right}>View</Text>
        </TouchableOpacity>
      </View>
    );
  };

  //Returning the value of main functional component......................
  return (
    <View>
      {Status ? (
        <View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter Heading"
              onChangeText={e => setHEADING(e)}></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Enter TO-DO"
              onChangeText={e => setCONTENT(e)}></TextInput>
            <View style={{ margin: 10 }}>
              <Button
                title="setData"
                onPress={() => {
                  addTodo();
                }}
              />
            </View>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View>
            {DATA.length == 0 ? (
              <View>
                <Text style={styles.empty}>ToDo is Empty Please enter a value</Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={DATA}
            renderItem={callListComponent}
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};

// Styling for Dashboard.js......................
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  items: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'white',
    borderWidth: 1,

  },
  text: {
    padding: 5,
  },
  right: {
    textAlign: 'center',
    marginTop: 10,
    margin: 20,
    padding: 5,
    backgroundColor: 'green',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'white',
    color:'white',
    borderRadius:20,
    textAlign:'center'
  },
  empty:{
    margin:40,
    textAlign:'center',
    fontSize:30,
    borderRadius:10,
    borderColor : "white",
    borderWidth:2,
    padding:10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

// Exporting Dashboard
export default Dashboard;
