import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenBeranda from './screens/ScreenBeranda';
import ScreenDaftar from './screens/ScreenDaftar';
import ScreenBatal from './screens/ScreenBatal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenBeranda" component={ScreenBeranda} />
        <Stack.Screen name="ScreenDaftar" component={ScreenDaftar} />
        <Stack.Screen name="ScreenBatal" component={ScreenBatal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
