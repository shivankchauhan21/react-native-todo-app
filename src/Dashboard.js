/**
 * 
 * This is to check 
 * This is Dashboard.js
 * In this file we are going to import Two others File i.e. List.js and Listcomponents.js
 * List.js - This file is used to display the List of TO-DO
 * ListComponents.js - This file will show a single component from  TO-DO
 *
 * ***********************************************************************
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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

  //Data stores and array of object in state for our To-Do List /.....................
  const [DATA, setData] = useState([
    {
      id: 1,
      heading: 'Heading 1',
      content: 'Content 1',
    },
    {
      id: 2,
      heading: 'Heading 2',
      content: 'Content 2',
    },
    {
      id: 3,
      heading: 'Heading 3',
      content: 'Content 3',
    },
    {
      id: 4,
      heading: 'Heading 4',
      content: 'Content 4',
    },
    {
      id: 5,
      heading: 'Heading 5',
      content: 'Content 5',
    },
    {
      id: 6,
      heading: 'Heading 6',
      content: 'Content 6',
    },
  ]);

  //This function work to delete the object from an array i.e. DATA
  const deleteFromTODO = (id) => {
    let newArray = DATA.filter(function (el){
      if(el.id !== id)
        return el;
    });
    setData(newArray);

    
  };

  //This function is called when we have Status = 0
  //Opens ListComponent Component to display selected ToDo.
  //A touchable used to delete and go back(setStatus = 1)
  const callListComponent = ({item}) => {
    if(item.id == ID)
    return (
     <View>
      <ListComponent heading={item.heading} content={item.content}/>
      <TouchableOpacity onPress={()=> {
        setStatus(1);
        deleteFromTODO(item.id);
        }}>
      <Text style={styles.right}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setStatus(1)}}>
      <Text style={styles.right}>Back</Text>
      </TouchableOpacity>
     </View>
    )
  };

  //RenderItem for FlatList ....................
  //Returning list.js Component and a touchable used to setStatus = 0................
  const renderItem = ({item}) => {
    return (
      <View>
        <View>
          <List heading={item.heading} content={item.content} />
        </View>
        <TouchableOpacity onPress={() => 
          {setID(item.id);
            setStatus(0);
          }}>
          <Text style={styles.right}>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  };

  //Returning the value of main functional component......................
  return (
    <View>
      {Status ? (
        <View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
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
    borderColor: 'red',
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
});

// Exporting Dashboard 
export default Dashboard;
