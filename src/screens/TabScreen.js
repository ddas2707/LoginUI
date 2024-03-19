import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import { NavigationContainer } from '@react-navigation/native';
import Detail from '../component/Detail';

const Tab = createMaterialTopTabNavigator();
const TabScreen = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator >
                    <Tab.Screen name="S1" component={Screen1} />
                    <Tab.Screen name="S2" component={Screen2} />
                    <Tab.Screen name="Detail" component={Detail} />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

export default TabScreen;

const styles = StyleSheet.create({});
