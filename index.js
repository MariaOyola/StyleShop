// registerRootComponent se usa en Expo para iniciar la aplicación.
// Esto hace que el componente App funcione en Expo Go y en compilaciones nativas.
import { registerRootComponent } from 'expo';

// App es el componente principal de la aplicación.
import App from './App';

// Se registra el componente raíz para que Expo pueda renderizar la app.
registerRootComponent(App);
