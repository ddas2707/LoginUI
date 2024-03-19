import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './src/screens/Screen1';
import Screen2 from './src/screens/Screen2';
import { NavigationContainer } from '@react-navigation/native';
import Detail from './src/component/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Demo from './src/screens/Demo';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Queries" component={Screen1} />
          <Tab.Screen name="My Queries" component={Screen2} />
          <Tab.Screen name="Detail" component={Detail} />
          <Tab.Screen name="Demo" component={Demo} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({});
