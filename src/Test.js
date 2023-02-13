import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
export const Test = ({navigation, route}) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'black' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { newp: "something3" },
          });
        }}
      />
    </>
  );
}
