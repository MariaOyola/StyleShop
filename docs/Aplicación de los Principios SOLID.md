# Aplicación de los Principios SOLID en StyleShop

## Introducción

La arquitectura de **StyleShop** fue diseñada siguiendo buenas prácticas de desarrollo de software, aplicando los principios **SOLID** para mejorar la mantenibilidad, reutilización, escalabilidad y organización del código.

Los principios SOLID son un conjunto de cinco principios orientados al diseño de software orientado a objetos y arquitecturas modulares:

* **S** → Single Responsibility Principle (SRP)
* **O** → Open/Closed Principle (OCP)
* **L** → Liskov Substitution Principle (LSP)
* **I** → Interface Segregation Principle (ISP)
* **D** → Dependency Inversion Principle (DIP)

---

# S — Single Responsibility Principle (SRP)

## Principio de Responsabilidad Única

Este principio establece que una clase, componente o módulo debe tener una única responsabilidad dentro del sistema y una sola razón para cambiar.

## Implementación en StyleShop

La arquitectura separa claramente cada responsabilidad:

| Archivo            | Responsabilidad                  |
| ------------------ | -------------------------------- |
| ProductCard.js     | Mostrar visualmente un producto  |
| AppButton.js       | Renderizar botones reutilizables |
| AppModal.js        | Gestionar ventanas modales       |
| AppDropdown.js     | Gestionar listas desplegables    |
| useCalculator.js   | Gestionar la lógica matemática   |
| useScrollLoader.js | Gestionar tiempos de carga       |
| products.js        | Almacenar los datos de productos |
| HomeScreen.js      | Mostrar productos                |
| DetailScreen.js    | Mostrar detalles de productos    |
| ProfileScreen.js   | Mostrar perfil del usuario       |
| SettingsScreen.js  | Mostrar configuraciones          |
| SplashScreen.js    | Mostrar pantalla de carga        |

## Evidencia

### Separación de lógica y presentación

La lógica de la calculadora se encuentra en:

```javascript
useCalculator.js
```

Mientras que la interfaz gráfica se encuentra en:

```javascript
CalculatorScreen.js
```

De esta forma:

* CalculatorScreen muestra información.
* useCalculator realiza cálculos.

Cada módulo tiene una única responsabilidad.

### Beneficios

* Código más organizado.
* Menor acoplamiento.
* Mayor facilidad de mantenimiento.
* Más sencillo realizar pruebas.

---

# O — Open/Closed Principle (OCP)

## Principio Abierto/Cerrado

Los componentes deben estar abiertos para extender funcionalidades pero cerrados para modificaciones.

## Implementación en StyleShop

Los componentes reutilizables permiten comportamientos diferentes mediante propiedades (props), sin modificar su código interno.

### Evidencia con AppButton

El mismo componente se reutiliza en distintas pantallas:

```javascript
<AppButton
    title="Editar Perfil"
    color={colors.btnMauve}
    onPress={() => setModalVisible(true)}
/>
```

```javascript
<AppButton
    title="Modo Oscuro"
    color={colors.btnPurple}
    onPress={() => Alert.alert('Modo oscuro')}
 />
```

No fue necesario modificar AppButton para soportar nuevos botones.

### Evidencia con ProductCard

```javascript
<ProductCard
    imagen={producto.imagen}
    nombre={producto.nombre}
    precio={producto.precio}
/>
```

Si se agregan nuevos productos en:

```javascript
products.js
```

el componente sigue funcionando sin cambios.

### Beneficios

* Mayor reutilización.
* Menos modificaciones en código estable.
* Menor riesgo de errores.

---

# L — Liskov Substitution Principle (LSP)

## Principio de Sustitución de Liskov

Los componentes deben poder reemplazarse por otros equivalentes sin afectar el comportamiento esperado.

## Implementación en StyleShop

### Evidencia con CalculatorButton

```javascript
<CalculatorButton
    title="Suma"
    color={colors.btnWine}
    onPress={() => calcular('suma')}
/>
```

Internamente utiliza:

```javascript
<AppButton />
```

Si en el futuro se reemplaza AppButton por otro componente compatible, CalculatorButton continuará funcionando.

### Evidencia con React Navigation

```javascript
<Tab.Screen
    name="Inicio"
    component={HomeScreen}
/>
```

```javascript
<Tab.Screen
    name="Perfil"
    component={ProfileScreen}
/>
```

Todas las pantallas cumplen el contrato esperado por React Navigation y pueden sustituirse sin afectar la navegación.

### Beneficios

* Flexibilidad.
* Componentes intercambiables.
* Menor dependencia entre módulos.

---

# I — Interface Segregation Principle (ISP)

## Principio de Segregación de Interfaces

Los componentes deben recibir únicamente la información que necesitan.

## Implementación en StyleShop

### Evidencia con ProductCard

```javascript
function ProductCard({
    imagen,
    nombre,
    precio,
    onPress
})
```

Solo recibe:

* imagen
* nombre
* precio
* onPress

No recibe información innecesaria.

### Evidencia con AppModal

```javascript
function AppModal({
    visible,
    title,
    onClose,
    children
})
```

Únicamente recibe las propiedades necesarias para funcionar.

### Evidencia con AppDropdown

```javascript
function AppDropdown({
    opciones,
    seleccionado,
    onSeleccionar,
    placeholder
})
```

Recibe solamente la información requerida para construir el selector.

### Beneficios

* Interfaces simples.
* Menor acoplamiento.
* Componentes más reutilizables.

---

# D — Dependency Inversion Principle (DIP)

## Principio de Inversión de Dependencias

Los módulos de alto nivel no deben depender directamente de implementaciones concretas, sino de abstracciones.

## Implementación en StyleShop

### Evidencia con useCalculator

CalculatorScreen no realiza cálculos directamente.

Obtiene la lógica desde:

```javascript
const {
    cantidad,
    precio,
    resultado,
    calcular
} = useCalculator();
```

La lógica se encuentra abstraída dentro del hook:

```javascript
useCalculator.js
```

### Evidencia con useScrollLoader

HomeScreen no administra los temporizadores.

Simplemente consume:

```javascript
const {
    loading,
    loading1
} = useScrollLoader();
```

Toda la lógica de carga está encapsulada en:

```javascript
useScrollLoader.js
```

### Evidencia con products.js

HomeScreen no contiene los productos directamente.

Los obtiene desde:

```javascript
import {
    productosInicio,
    productosMas
} from '../constants/products';
```

Si en el futuro los datos provienen de una API o base de datos, HomeScreen requerirá mínimos cambios.

### Beneficios

* Menor dependencia.
* Mayor facilidad para escalar.
* Mayor facilidad para pruebas unitarias.

---

# Relación de SOLID con la Arquitectura del Proyecto

La estructura del proyecto también contribuye al cumplimiento de SOLID:

```text
src/
├── components/
├── hooks/
├── screens/
├── navigation/
├── styles/
└── constants/
```

### Components

Contienen elementos reutilizables.

Ejemplos:

* AppButton
* AppModal
* ProductCard
* AppDropdown

### Hooks

Contienen lógica reutilizable.

Ejemplos:

* useCalculator
* useScrollLoader

### Screens

Representan las vistas de la aplicación.

Ejemplos:

* HomeScreen
* DetailScreen
* ProfileScreen

### Navigation

Gestionan únicamente la navegación.

Ejemplos:

* StackNavigation
* DrawerNavigation
* TabNavigation

### Constants

Contienen datos constantes.

Ejemplo:

* products.js

---

# Conclusión

La aplicación StyleShop implementa los principios SOLID mediante una arquitectura modular basada en componentes, hooks, pantallas y navegación separada.

### Principios aplicados

| Principio | Evidencia                                                            |
| --------- | -------------------------------------------------------------------- |
| SRP       | Separación de responsabilidades entre componentes, hooks y pantallas |
| OCP       | Componentes reutilizables mediante props                             |
| LSP       | Componentes intercambiables manteniendo el comportamiento esperado   |
| ISP       | Interfaces pequeñas y específicas                                    |
| DIP       | Uso de hooks y módulos independientes para desacoplar la lógica      |

Gracias a esta implementación, StyleShop presenta una arquitectura más mantenible, reutilizable, escalable y alineada con las buenas prácticas modernas de desarrollo de software.
