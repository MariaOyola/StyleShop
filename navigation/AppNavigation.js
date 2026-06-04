// NavigationContainer es el contenedor principal que maneja el estado de navegación.
import { NavigationContainer } from '@react-navigation/native';
// createNativeStackNavigator crea un stack de pantallas con transiciones nativas.
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos las pantallas que se mostrarán en la navegación.
import LagePages from '../screens/LagePage';
import StyleShop from "../screens/StyleShop";
import CalculatorScreen from "../screens/CalculatorScreen";
import PerfilScreen from '../screens/PerfilScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';
import React from "react";

// Creamos un navegador de pila.
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
                    name="Detail"
                    component={DetailScreen}
                    options={{ title: 'Detalle del producto' }}
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