// createBottomTabNavigator crea una barra de pestañas en la parte inferior.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StyleShop from '../screens/StyleShop';
import PerfilScreen from '../screens/PerfilScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Creamos el navegador de pestañas.
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        // Oculta el encabezado (header) que React Navigation muestra por defecto en cada pantalla.
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {/* Pestaña principal de la tienda. */}
            <Tab.Screen name="Inicio" component={StyleShop}
            />

            {/* Pestaña de perfil del usuario. */}
            <Tab.Screen name="Perfil" component={PerfilScreen}
            />

            {/* Pestaña de configuración. */}
            <Tab.Screen name="Configuración" component={SettingsScreen}
            />
        </Tab.Navigator>
    );
}