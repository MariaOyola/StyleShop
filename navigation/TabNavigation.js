// createBottomTabNavigator crea una barra de pestañas en la parte inferior.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StyleShop from '../screens/StyleShop';
import PerfilScreen from '../screens/PerfilScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Creamos el navegador de pestañas.
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
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