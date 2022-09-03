import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Colors from './src/components/Strings/Colors';
import Sensors from './src/components/Screens/Sensors/Sensors';
import Tasks from './src/components/Screens/Tasks/Tasks';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles}>
        <StatusBar barStyle="light-content" animated={true} backgroundColor={Colors.primary}/>
        <Tab.Navigator initialRouteName="Tasks" activeColor={Colors.orange} inactiveColor="#ffffff" barStyle={{ backgroundColor: Colors.primary }}>
        <Tab.Screen name="Tasks" component={Tasks} options={{
            tabBarColor: '#ffffff',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="access-point-network" color={color} size={26} /> 
            )
        }}/>
        <Tab.Screen name="Sensors" component={Sensors} options={{
            tabBarColor: '#ffffff',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="api" color={color} size={26} />
            )
        }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabStyle: {
    borderRadius:50,
    backgroundColor:"orange",
    position: 'absolute',
    overflow:'hidden',
    left: 0,
    bottom: 0,
    right: 0,
    padding:5,
  },
})
