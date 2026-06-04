import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LagePages from '../screens/LagePage';
import StyleShop from "../screens/StyleShop";
import CalculatorScreen from "../screens/CalculatorScreen";
import PerfilScreen from '../screens/PerfilScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';
import React from "react";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Shop"
                    component={LagePages}
                />


                <Stack.Screen
                    name="MainTab"
                    component={DrawerNavigation}
                    options={{ headerShown: false }}
                />
                

                <Stack.Screen
                    name="Home"
                    component={StyleShop}
                />

                <Stack.Screen
                    name="Calcula"
                    component={CalculatorScreen}
                />

                <Stack.Screen
                    name="Mi perfil"
                    component={PerfilScreen}
                />

                <Stack.Screen
                    name="Configuración"
                    component={SettingsScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
} 