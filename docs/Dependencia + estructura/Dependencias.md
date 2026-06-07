# Dependencias — StyleShop

---

## ¿Para qué sirve cada una?

### El núcleo de la app

| Dependencia | Para qué sirve |
|---|---|
| `expo` | El entorno que permite correr React Native fácilmente sin configurar Android Studio o Xcode desde cero |
| `react` | La librería base para crear componentes con JSX y hooks (`useState`, `useEffect`) |
| `react-native` | Traduce los componentes de React a elementos nativos de Android e iOS (`View`, `Text`, `Image`, etc.) |
| `expo-status-bar` | Controla la barra de estado del celular (color, visibilidad) |
| `babel-preset-expo` | Permite usar sintaxis moderna de JavaScript en el proyecto |

---

### Navegación

Todas las que empiezan con `@react-navigation` trabajan juntas para que la app pueda moverse entre pantallas.

| Dependencia | Para qué sirve |
|---|---|
| `@react-navigation/native` | El núcleo de la navegación, provee el `NavigationContainer` |
| `@react-navigation/native-stack` | Crea el Stack Navigator (transición de pila entre pantallas) |
| `@react-navigation/bottom-tabs` | Crea la barra de pestañas inferior (`TabNavigation`) |
| `@react-navigation/drawer` | Crea el menú lateral deslizable (`DrawerNavigation`) |

---

### Soporte para la navegación

Estas no se usan directamente en el código, pero React Navigation las necesita para funcionar.

| Dependencia | Para qué sirve |
|---|---|
| `react-native-screens` | Optimiza el rendimiento usando pantallas nativas del sistema operativo |
| `react-native-safe-area-context` | Evita que el contenido quede detrás del notch o la barra de navegación del celular |
| `react-native-gesture-handler` | Detecta gestos táctiles (deslizar, presionar) necesarios para el Drawer |
| `react-native-reanimated` | Permite animaciones fluidas, requerida por el Drawer y el Stack |
| `react-native-worklets` | Módulo interno que usa `react-native-reanimated` para correr animaciones en un hilo separado |

---

### Íconos

| Dependencia | Para qué sirve |
|---|---|
| `react-native-vector-icons` | Librería de íconos vectoriales (flechas, menús, estrellas, etc.) lista para usar en iOS y Android |

---

### Otras

| Dependencia | Para qué sirve |
|---|---|
| `ansi-escapes` | Utilidad interna de las herramientas de desarrollo, no se usa directamente en el código de la app |

---

## Resumen visual

```
Tu código (React + React Native)
    │
    ├── Navegación → @react-navigation/*
    │       └── Soporte → screens + gesture-handler + reanimated + safe-area
    │
    ├── Íconos → react-native-vector-icons
    │
    └── Entorno → expo + babel-preset-expo
```

> Todas estas dependencias se instalan automáticamente al correr `npm install` en un proyecto clonado. Nunca se suben a GitHub porque viven en la carpeta `node_modules`.