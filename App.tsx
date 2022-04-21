import React from 'react';
import {
  SafeAreaView, View
} from 'react-native';
import Colors from './components/Colors';


const App = () => {
  return (
    <SafeAreaView >
      <View style={{
        // flex: 1,
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        marginHorizontal: 5,
        paddingHorizontal: 8
      }}>
        <Colors />
      </View>
    </SafeAreaView>
  )
};


export default App;
