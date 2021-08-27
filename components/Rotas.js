import * as React from 'react';
import {Text, View, Image , StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Home from './Home';
import FreeFire from './FreeFire';
import Fortnite from './Fortnite';


const Tab = createBottomTabNavigator();

export default function Rotas(){
return (
<Tab.Navigator 
initialRouteName="Home"
tabBarOptions = {{activeTinColor:'#88aaee'}}
>

<Tab.Screen 
name="Home"
component={Home}
options={{
  tabBarLabel:"Home",
  tabBarIcon:({color,size}) => (
<MaterialCommunityIcons name="home" color={color} size={size}/> 
  ),
}}
/>

<Tab.Screen 
name="Free Fire"
component={FreeFire}
options={{
  tabBarLabel:"Free Fire",
  tabBarIcon:({color,size}) => (
<MaterialCommunityIcons s name="nintendo-game-boy" color={color} size={size}/> 
  ),
}}
/>

<Tab.Screen 
name="Fortnite"
component={Fortnite}
options={{
  tabBarLabel:"Fortnite",
  tabBarIcon:({color,size}) => (
<MaterialCommunityIcons name="gamepad-variant" color={color} size={size}/> 
  ),
}}
/>



</Tab.Navigator>
);
}