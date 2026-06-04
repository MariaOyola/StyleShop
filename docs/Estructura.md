# Estructura Simple - React Native

```text id="e6oqbi"
MiProyecto/
│
├── screens/
│   ├── HomeScreen.js
│   ├── ModalScreen.js
│   ├── DropdownScreen.js
│   ├── CalculatorScreen.js
│   └── ScrollScreen.js
│
├── navigation/
│   └── AppNavigation.js
│
├── components/
│   ├── CustomButton.js
│   ├── CustomModal.js
│   └── CustomDropdown.js
│
├── App.js
└── package.json
```

---

# ¿Qué irá en cada carpeta?

---

# screens/

Aquí irán las pantallas principales.

## HomeScreen.js

Pantalla principal.

Aquí puedes poner:

* botones para navegar
* menú principal

---

## ModalScreen.js

Pantalla donde harás:

* Dialog
* Modal
* abrir/cerrar modal

---

## DropdownScreen.js

Pantalla para:

* Picker
* Dropdown Android/iOS

---

## CalculatorScreen.js

Pantalla para:

* suma
* resta
* multiplicación
* división

---

## ScrollScreen.js

Pantalla para:

* ScrollView
* FlatList
* ActivityIndicator

---

# navigation/

---

## AppNavigation.js

Aquí configurarás:

* Stack Navigation
* Bottom Tabs
* Drawer Layout

Todo React Navigation.

---

# components/

Aquí irán componentes reutilizables.

---

## CustomButton.js

Botones personalizados.

---

## CustomModal.js

Modal reutilizable.

---

## CustomDropdown.js

Dropdown reutilizable.

---

# App.js

Archivo principal.

Aquí normalmente:

* se carga la navegación
* inicia la app

Es el archivo más importante.
