// React es la biblioteca que usamos para crear componentes en la aplicación.
import React from 'react';
// AppNavigation contiene toda la navegación de la aplicación.
import AppNavigation from './navigation/AppNavigation';

// Componente raíz de la aplicación.
// Aquí solo devolvemos la navegación principal.
export default function App() {
  return <AppNavigation />;
}

