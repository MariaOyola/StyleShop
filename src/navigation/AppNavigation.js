// AppNavigation es el punto de entrada de toda la navegación.
// Solo envuelve en NavigationContainer y delega el resto a StackNavigation.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
}