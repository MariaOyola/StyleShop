// StackNavigation define las pantallas que usan transición de pila.

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen        from '../screens/SplashScreen';
import HomeScreen          from '../screens/HomeScreen';
import CalculatorScreen    from '../screens/CalculatorScreen';
import ProfileScreen       from '../screens/ProfileScreen';
import SettingsScreen      from '../screens/SettingsScreen';
import DetailScreen        from '../screens/DetailScreen';
import DrawerNavigation    from './DrawerNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Shop"     component={SplashScreen} />
            <Stack.Screen name="MainTab"  component={DrawerNavigation} options={{ headerShown:  false }} />
            <Stack.Screen name="Home"     component={HomeScreen} />
            <Stack.Screen name="Detail"   component={DetailScreen} options={{ title: 'Detalle del producto' }} />
            <Stack.Screen name="Calcula"  component={CalculatorScreen} />
            <Stack.Screen name="Mi perfil"     component={ProfileScreen} />
            <Stack.Screen name="Configuración" component={SettingsScreen} />
        </Stack.Navigator>
    );
}