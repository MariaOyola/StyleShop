# Arquitectura del Proyecto StyleShop
### Aplicación móvil en React Native con Expo

---

## ¿Por qué importa la arquitectura?

Una aplicación puede funcionar perfectamente y aun así tener mala arquitectura. El problema no aparece hoy, aparece cuando el proyecto crece: cuando hay que agregar una pantalla nueva, cuando un color cambia en toda la app, o cuando la lógica de una calculadora hay que reutilizarla en otro lugar.

Una buena arquitectura hace que esos cambios sean **predecibles, seguros y rápidos**.

---

## Estructura de carpetas

```
StyleShop/
│
├── assets/                        → Imágenes, íconos y fuentes estáticas
│
├── src/
│   ├── components/                → Piezas visuales reutilizables
│   │   ├── cards/
│   │   │   └── ProductCard.js
│   │   └── common/
│   │       ├── AppButton.js
│   │       ├── AppModal.js
│   │       └── AppDropdown.js
│   │
│   ├── screens/                   → Pantallas de la aplicación
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── DetailScreen.js
│   │   ├── CalculatorScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── SettingsScreen.js
│   │   └── ScrollLoadingScreen.js
│   │
│   ├── hooks/                     → Lógica de negocio reutilizable
│   │   ├── useCalculator.js
│   │   └── useScrollLoader.js
│   │
│   ├── navigation/                → Toda la configuración de rutas
│   │   ├── AppNavigation.js
│   │   ├── StackNavigation.js
│   │   ├── TabNavigation.js
│   │   └── DrawerNavigation.js
│   │
│   ├── styles/                    → Tokens de diseño centralizados
│   │   ├── colors.js
│   │   ├── typography.js
│   │   └── spacing.js
│   │
│   └── constants/                 → Datos estáticos de la aplicación
│       └── products.js
│
├── App.js                         → Punto de entrada
└── app.json                       → Configuración de Expo
```

---

## Qué hace cada capa y por qué existe

### `assets/`
Contiene todos los archivos estáticos: imágenes de productos, íconos de la app, fuentes. No contiene lógica. Si una imagen cambia, solo se reemplaza el archivo aquí.

---

### `src/components/`
Son las **piezas de LEGO** de la interfaz. Un componente no sabe en qué pantalla vive ni qué datos existen en la aplicación. Solo sabe cómo verse y qué hacer cuando el usuario interactúa con él.

**Ejemplo — `ProductCard.js`**
```
Recibe: imagen, nombre, precio, onPress
Devuelve: una tarjeta visual
No sabe: que existe una tienda, que hay navegación, que los productos vienen de una lista
```

**¿Por qué separar en `cards/` y `common/`?**

- `cards/` → componentes específicos del dominio de la tienda
- `common/` → componentes genéricos que puede usar cualquier pantalla (`AppButton`, `AppModal`, `AppDropdown`)

Si mañana hay una segunda app que usa los mismos botones, se copian solo los archivos de `common/` sin tocar nada más.

---

### `src/screens/`
Son las **páginas** de la aplicación. Cada screen orquesta componentes y consume hooks, pero no contiene lógica propia ni estilos inventados en el momento.

**Lo que una screen SÍ hace:**
- Importar y renderizar componentes
- Llamar a un hook para obtener datos o estado
- Pasarle funciones a los componentes (`onPress`, `onChange`)

**Lo que una screen NO debe hacer:**
- Tener operaciones matemáticas o algoritmos
- Definir los datos de los productos
- Tener `setTimeout` o lógica de carga directamente en el cuerpo del componente

**Ejemplo correcto:**
```javascript
// ✅ La screen consume el hook, no implementa la lógica
export default function CalculatorScreen() {
    const { cantidad, precio, resultado, error, calcular } = useCalculator();
    return ( /* solo JSX */ );
}
```

**Ejemplo incorrecto:**
```javascript
// ❌ La screen implementa la lógica directamente
export default function CalculatorScreen() {
    const [cantidad, setCantidad] = useState("");
    const calcularTotal = (operacion) => {
        // 20 líneas de lógica aquí dentro...
    };
}
```

---

### `src/hooks/`
Son la **inteligencia** de la aplicación. Aquí vive todo lo que no es visual: cálculos, manejo de estado, efectos secundarios, timers, llamadas a APIs.

Un hook es una función de JavaScript que empieza con `use` y puede usar otros hooks de React.

**`useCalculator.js`** — maneja las 4 operaciones y las validaciones de la calculadora.
**`useScrollLoader.js`** — maneja los timers de carga y el `ActivityIndicator` de la tienda.

**¿Por qué separarlos?**

Si la calculadora necesita cambiar (por ejemplo, agregar un historial de operaciones), solo se toca `useCalculator.js`. La pantalla no se modifica. Si el scroll necesita conectarse a una API real en lugar de usar un `setTimeout`, solo se toca `useScrollLoader.js`.

---

### `src/navigation/`
Contiene **exclusivamente** la configuración de rutas. Ningún archivo de esta carpeta renderiza contenido visual propio.

| Archivo | Responsabilidad |
|---|---|
| `AppNavigation.js` | Envuelve todo en `NavigationContainer` |
| `StackNavigation.js` | Define las pantallas con transición de pila |
| `TabNavigation.js` | Define la barra de pestañas inferior |
| `DrawerNavigation.js` | Define el menú lateral |

**¿Por qué separar cada tipo de navegación en su propio archivo?**

Porque cada uno tiene una configuración diferente (iconos, colores, opciones de header). Juntos en un solo archivo se vuelven difíciles de leer y modificar.

---

### `src/styles/`
Son los **tokens de diseño**: los valores que definen la identidad visual de la aplicación.

**`colors.js`**
```javascript
export const colors = {
    primary:    '#7A3E65',   // Color morado principal de la marca
    background: '#F8F5FA',   // Fondo general de la app
    white:      '#ffffff',
    error:      '#ca2222',
};
```

**¿Por qué centralizar los colores?**

El color `#7A3E65` aparece en más de 10 archivos del proyecto. Si el cliente decide cambiar ese color, sin esta carpeta habría que buscar y reemplazar manualmente en cada archivo, con riesgo de olvidar alguno. Con `colors.js`, el cambio es en una sola línea.

Lo mismo aplica para `typography.js` (tamaños de fuente) y `spacing.js` (márgenes y paddings).

---

### `src/constants/`
Contiene **datos que no cambian** durante la ejecución de la app y que no son lógica de negocio.

**`products.js`** — la lista de productos con sus nombres, precios e imágenes.

**¿Por qué no dejar los productos dentro de `StyleShop.js`?**

Porque los datos y la interfaz son cosas distintas. Si mañana los productos vienen de una API, solo se modifica `products.js` (o se reemplaza por un hook que llame a la API). La pantalla no se toca.

---

## Cómo se conectan las capas

```
App.js
  └── AppNavigation          (navigation/)
        └── DrawerNavigation
              └── TabNavigation
                    └── HomeScreen         (screens/)
                          ├── useScrollLoader  (hooks/)
                          ├── productosInicio  (constants/)
                          └── ProductCard      (components/)
                                └── colors     (styles/)
```

Cada capa solo conoce a la capa inmediatamente debajo de ella. Una screen no importa directamente de `navigation/`. Un componente no importa de `screens/`. Esta separación evita dependencias circulares y hace el código predecible.

---

## Los 5 principios SOLID aplicados

### S — Responsabilidad Única
Cada archivo tiene una sola razón para cambiar.
- `useCalculator.js` cambia solo si cambia la lógica matemática.
- `CalculatorScreen.js` cambia solo si cambia la apariencia de la calculadora.
- `colors.js` cambia solo si cambia la paleta de colores.

### O — Abierto/Cerrado
Los componentes están abiertos para extenderse y cerrados para modificarse.
- `AppButton` acepta props de color, texto y acción. Para crear un botón de peligro, se pasa `color={colors.error}`. No se modifica el componente.
- `ProductCard` acepta cualquier imagen, nombre y precio. Para agregar un nuevo producto, se agrega a `products.js`. No se toca el componente.

### L — Sustitución de Liskov
Cualquier componente puede recibir diferentes datos y comportarse correctamente.
- `AppDropdown` funciona igual con opciones de tallas (`['S', 'M', 'L']`) que con opciones de idioma (`['Español', 'Inglés']`).

### I — Segregación de Interfaces
Los hooks exponen solo lo que cada pantalla necesita.
- `CalculatorScreen` recibe de `useCalculator` exactamente: `{ cantidad, precio, resultado, error, calcular }`. No recibe nada extra.
- `HomeScreen` recibe de `useScrollLoader` exactamente: `{ loadingInicial, loadingMas }`.

### D — Inversión de Dependencias
Las pantallas dependen de abstracciones (hooks, componentes), no de implementaciones concretas.
- `HomeScreen` no sabe si los productos vienen de un array local, de una base de datos o de una API. Solo sabe que `useScrollLoader` le dice cuándo está listo. Si la fuente de datos cambia, la pantalla no se modifica.

---

## Resumen

| Capa | Contiene | Depende de |
|---|---|---|
| `screens/` | Estructura visual de cada página | `components/`, `hooks/`, `styles/` |
| `components/` | Piezas reutilizables de UI | `styles/` |
| `hooks/` | Lógica y estado | `constants/`, `styles/` |
| `navigation/` | Configuración de rutas | `screens/` |
| `styles/` | Colores, tipografía, espaciado | Nada |
| `constants/` | Datos estáticos | `assets/` |

> Una arquitectura bien diseñada no hace el código más corto. Lo hace más fácil de entender, cambiar y mantener.