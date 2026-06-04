# Conceptos Básicos React Native

## 1. Dialog o Modal

Un **Dialog** o **Modal** es una ventana emergente que aparece encima de la pantalla principal de la aplicación.

Se utiliza para:

* Confirmaciones
* Advertencias
* Formularios rápidos
* Mostrar mensajes importantes

### Ejemplo:

```text
¿Deseas eliminar este usuario?

[Cancelar]   [Aceptar]
```

---

# 2. Dropdown compatible con Android e iOS

Un **Dropdown** es una lista desplegable que permite seleccionar una opción entre varias disponibles.

Se usa comúnmente para:

* Seleccionar ciudades
* Escoger categorías
* Elegir estados o tipos

### Ejemplo:

```text
Selecciona una ciudad ▼

- Bogotá
- Medellín
- Cali
```

Debe funcionar correctamente tanto en Android como en iOS.

---

# 3. Calculadora básica

Una **Calculadora básica** es un componente o aplicación que realiza operaciones matemáticas simples.

Operaciones principales:

* Suma
* Resta
* Multiplicación
* División

### Ejemplo:

```text
5 + 3 = 8
```

Sirve para practicar:

* Inputs
* Botones
* Eventos
* Estados (`useState`)

---

# 4. Scroll Loading

El **Scroll Loading** permite cargar contenido mientras el usuario sigue bajando en la pantalla.

También se conoce como:

* Infinite Scroll
* Lazy Loading

### Ejemplo:

En aplicaciones como redes sociales, al bajar siguen apareciendo más publicaciones automáticamente.

Ventajas:

* Mejor rendimiento
* Menor consumo de memoria
* Carga progresiva de datos

---

# 5. Navegación

La navegación permite moverse entre diferentes pantallas dentro de la aplicación.

---

## Stack Navigation

La **Stack Navigation** funciona como una pila de pantallas.

Cuando el usuario entra a una nueva pantalla, esta se coloca encima de la anterior.

### Ejemplo:

```text
Inicio → Perfil → Configuración
```

El usuario puede regresar usando el botón “atrás”.

---

## Bottom Menu

El **Bottom Menu** es un menú ubicado en la parte inferior de la aplicación.

Generalmente contiene accesos rápidos a las secciones principales.

### Ejemplo:

* Inicio
* Buscar
* Favoritos
* Perfil

Es muy utilizado en aplicaciones móviles modernas.

---

## React Navigation

**React Navigation** es la librería principal utilizada en React Native para manejar la navegación entre pantallas.

Permite implementar:

* Stack Navigation
* Bottom Tabs
* Drawer Navigation
* Navegación avanzada

Es compatible con Android e iOS.

---

## Drawer Layout

El **Drawer Layout** es un menú lateral desplegable.

Se abre normalmente desde un botón tipo hamburguesa (☰).

### Ejemplo:

```text
☰ Menú

- Inicio
- Configuración
- Perfil
- Cerrar sesión
```

Es útil para mostrar múltiples opciones sin ocupar espacio en la pantalla principal.
