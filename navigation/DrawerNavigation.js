import React from 'react';
// createDrawerNavigator crea un menú lateral donde el usuario puede cambiar de pantalla.
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigation from './TabNavigation';
import CalculatorScreen from '../screens/CalculatorScreen';

// Creamos el navegador de cajón.
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        // Drawer.Navigator es el contenedor del menú lateral.
        <Drawer.Navigator>

            {/* Pantalla principal que contiene la navegación por pestañas. */}
            <Drawer.Screen
                name="Tienda"
                component={TabNavigation}
            />

            {/* Pantalla independiente de calculadora. */}
            <Drawer.Screen
                name="Calculadora"
                component={CalculatorScreen}
            />

        </Drawer.Navigator>
    );
}