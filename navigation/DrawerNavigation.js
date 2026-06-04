import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigation from './TabNavigation';
import CalculatorScreen from '../screens/CalculatorScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name="Tienda"
                component={TabNavigation}
            />

            <Drawer.Screen
                name="Calculadora"
                component={CalculatorScreen}
            />

        </Drawer.Navigator>
    );
}