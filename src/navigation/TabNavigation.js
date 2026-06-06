// TabNavigation define la barra de pestañas inferior.

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen          from '../screens/HomeScreen';
import ProfileScreen       from '../screens/ProfileScreen';
import SettingsScreen      from '../screens/SettingsScreen';
import ScrollLoadingScreen from '../screens/ScrollLoadingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Inicio"   component={HomeScreen} />
            <Tab.Screen name="Revista"  component={ScrollLoadingScreen} />
            <Tab.Screen name="Perfil"   component={ProfileScreen} />
            <Tab.Screen name="Ajustes"  component={SettingsScreen} />
        </Tab.Navigator>
    );
}