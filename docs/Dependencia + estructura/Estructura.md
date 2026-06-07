# Arquitectura StyleShop — React Native

## Nombre de la arquitectura

**Layered Architecture + Component-Driven Development con principios SOLID**

Separa la aplicación en capas donde cada una tiene una sola responsabilidad. Una capa no mezcla su trabajo con el de otra.

---

## Estructura de carpetas

```
StyleShop/
├── assets/
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   └── ProductCard.js
│   │   ├── common/
│   │   │   ├── AppButton.js
│   │   │   ├── AppModal.js
│   │   │   └── AppDropdown.js
│   │   └── calculator/
│   │       └── CalculatorButton.js
│   ├── screens/
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── DetailScreen.js
│   │   ├── CalculatorScreen.js
│   │   ├── ProfileScreen.js
│   │   └── SettingsScreen.js
│   ├── hooks/
│   │   ├── useCalculator.js
│   │   └── useScrollLoader.js
│   ├── navigation/
│   │   ├── AppNavigation.js
│   │   ├── StackNavigation.js
│   │   ├── TabNavigation.js
│   │   └── DrawerNavigation.js
│   ├── styles/
│   │   ├── colors.js
│   │   ├── typography.js
│   │   └── spacing.js
│   └── constants/
│       └── products.js
├── App.js
└── app.json
```

---

## Capas y responsabilidades

### `assets/`
Imágenes, íconos y fuentes. No contiene lógica. Si una imagen cambia, solo se toca aquí.

---

### `src/components/`
Piezas visuales reutilizables. Un componente no sabe en qué pantalla vive, solo sabe cómo verse.

| Archivo | Para qué sirve |
|---|---|
| `cards/ProductCard.js` | Tarjeta de producto (imagen, nombre, precio) usada en HomeScreen |
| `common/AppButton.js` | Botón estándar de la app, recibe color y acción como props |
| `common/AppModal.js` | Modal reutilizable, recibe título y función de cierre |
| `common/AppDropdown.js` | Selector desplegable compatible iOS y Android |
| `calculator/CalculatorButton.js` | Botón específico de la calculadora, incluye su contenedor |

---

### `src/screens/`
Pantallas de la aplicación. Solo ensamblan componentes y consumen hooks, sin lógica propia.

| Archivo | Para qué sirve |
|---|---|
| `SplashScreen.js` | Pantalla inicial con logo, navega sola a los 5 segundos |
| `HomeScreen.js` | Tienda principal con productos y carga progresiva |
| `DetailScreen.js` | Detalle de un producto con selector de talla y botón de carrito |
| `CalculatorScreen.js` | Calculadora con las 4 operaciones matemáticas |
| `ProfileScreen.js` | Perfil del usuario con modal de edición |
| `SettingsScreen.js` | Configuración de la app con botones de opciones |

---

### `src/hooks/`
Lógica de negocio extraída de las pantallas. Si la lógica cambia, solo se toca el hook, la pantalla no se modifica.

| Archivo | Para qué sirve |
|---|---|
| `useCalculator.js` | Maneja los estados y operaciones de la calculadora |
| `useScrollLoader.js` | Maneja los tiempos de carga del ActivityIndicator en HomeScreen |

---

### `src/navigation/`
Configuración de rutas. Ningún archivo aquí renderiza contenido visual propio.

| Archivo | Para qué sirve |
|---|---|
| `AppNavigation.js` | Punto de entrada, solo envuelve en `NavigationContainer` |
| `StackNavigation.js` | Define las pantallas con transición de pila |
| `TabNavigation.js` | Barra de pestañas inferior (Inicio, Perfil, Configuración) |
| `DrawerNavigation.js` | Menú lateral (Tienda, Calculadora) |

---

### `src/styles/`
Tokens de diseño centralizados. Si el color principal cambia, se modifica en un solo lugar y se aplica en toda la app.

| Archivo | Para qué sirve |
|---|---|
| `colors.js` | Paleta de colores (primary, background, error, botones) |
| `typography.js` | Tamaños y pesos de fuente |
| `spacing.js` | Márgenes, paddings y border radius |

---

### `src/constants/`
Datos estáticos que no cambian durante la ejecución.

| Archivo | Para qué sirve |
|---|---|
| `products.js` | Lista de productos con nombre y precio, separada de la UI |

---

## Cómo se conectan las capas

```
App.js
  └── AppNavigation
        └── DrawerNavigation
              ├── Calculadora → CalculatorScreen → useCalculator
              └── TabNavigation
                    ├── Inicio  → HomeScreen → useScrollLoader + products.js + ProductCard
                    ├── Perfil  → ProfileScreen → AppModal + AppButton
                    └── Config  → SettingsScreen → AppButton
```

Cada capa solo conoce a la capa inmediatamente inferior. Una screen no importa de navigation. Un componente no importa de screens. Esto evita dependencias circulares.

---

## Principios SOLID aplicados

**S — Responsabilidad única:** cada archivo hace una sola cosa. `useCalculator` solo calcula, `CalculatorScreen` solo muestra.

**O — Abierto/Cerrado:** `AppButton` se extiende con props sin modificar el componente. Para un nuevo color de botón, se pasa el prop, no se edita el archivo.

**L — Sustitución:** `AppDropdown` funciona igual con tallas, idiomas o cualquier lista de opciones.

**I — Segregación:** los hooks exponen solo lo que cada pantalla necesita, nada más.

**D — Inversión de dependencias:** las pantallas dependen de hooks y componentes abstractos, no de implementaciones concretas. Si los productos pasan a venir de una API, solo cambia `products.js`, las pantallas no se tocan.