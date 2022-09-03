import React from 'react';
import {StatusBar} from 'react-native';
import Colors from '../../Strings/Colors';
import Sensors from '../Sensors/Sensors';
import Tasks from '../Tasks/Tasks';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" animated={true} backgroundColor={Colors.primary}/>
        <Tab.Navigator initialRouteName="Tasks" activeColor={Colors.primary} inactiveColor="#999" barStyle={{ backgroundColor: Colors.primary }}>
        <Tab.Screen name="Tasks" component={Tasks} options={{
            tabBarColor: '#000',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} /> 
            )
        }}/>
        <Tab.Screen name="Sensors" component={Sensors} options={{
            tabBarColor: '#ccc',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
            )
        }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
