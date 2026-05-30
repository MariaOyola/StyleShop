import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LagePages from '../screens/LagePage';
import StyleShop from "../screens/StyleShop";
import CalculatorScreen from "../screens/CalculatorScreen";
import react from "react";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="LagePage"
                    component={LagePages}
                />
                <Stack.Screen
                    name="StyleShop"
                    component={StyleShop}
                />

                <Stack.Screen
                    name="CalculatorScreen"
                    component={CalculatorScreen}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
} 