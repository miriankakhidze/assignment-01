import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView, Text, View
} from 'react-native';


const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else
      if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <SafeAreaView >
      <View style={{
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: "center",
      }}>

        <Text>Counter - {seconds}</Text>
        <View style={{
          marginTop: 30,

          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}>
            <Button title='STOP' onPress={toggle} />
            <Button title='RESET' onPress={reset} />
            <Button title='START' onPress={toggle} />
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
};


export default App;
