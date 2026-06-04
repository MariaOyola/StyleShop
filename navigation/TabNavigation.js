import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StyleShop from '../screens/StyleShop';
import PerfilScreen from '../screens/PerfilScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={StyleShop}
            />

            <Tab.Screen name="Perfil" component={PerfilScreen}
            />
            
            <Tab.Screen name="Configuración" component={SettingsScreen}
            />
        </Tab.Navigator>
    );
}