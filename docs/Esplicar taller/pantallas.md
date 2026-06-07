# Lectura de código — ProfileScreen, SettingsScreen y SplashScreen

---

## `SplashScreen.js` — Pantalla de inicio

```javascript
export default function SplashScreen({ navigation }) {
    const icon = require('../../assets/Shop.png');
```
`navigation` lo pasa React Navigation automáticamente. `require()` carga la imagen del logo.

```javascript
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('MainTab');
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
```

**`useEffect`** → se ejecuta una vez cuando la pantalla aparece. El `[]` al final es el array de dependencias vacío, que le dice a React "ejecuta esto solo al montar, no lo repitas".

**`setTimeout`** → espera 5000 milisegundos (5 segundos) y luego ejecuta `navigation.navigate('MainTab')`, que lleva al usuario a la pantalla principal.

**`return () => clearTimeout(timer)`** → si el usuario cierra la app o navega antes de los 5 segundos, esto cancela el timer para que no intente navegar en una pantalla que ya no existe.

**Flujo:**
```
App abre → SplashScreen aparece → espera 5 seg → navega a MainTab (Drawer + Tab)
```

---

## `ProfileScreen.js` — Perfil del usuario

```javascript
export default function ProfileScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const icon = require('../../assets/perfil.png');
```
`modalVisible` controla si el modal está abierto o cerrado. Empieza en `false` → cerrado.

```javascript
    <AppButton
        title="Editar Perfil"
        color={colors.btnMauve}
        onPress={() => setModalVisible(true)}
    />
```
Cuando se presiona "Editar Perfil", cambia `modalVisible` a `true`, lo que abre el modal.

```javascript
    <View style={{ height: spacing.sm }} />
```
Un `View` sin contenido que actúa como separador entre los dos botones. `spacing.sm` es `10` píxeles de alto.

```javascript
    <AppButton
        title="Cerrar Sesión"
        color={colors.btnRed}
        onPress={() => Alert.alert('No se puede cerrar sesión :(')}
    />
```
**`Alert.alert()`** → muestra un diálogo nativo del sistema operativo con un mensaje. En esta app es demostrativo, no cierra sesión realmente.

```javascript
    <AppModal
        visible={modalVisible}
        title="Editar Perfil"
        onClose={() => setModalVisible(false)}
    />
```
El modal vive **fuera del ScrollView** pero dentro del `View` principal. Esto es importante porque un modal debe cubrirlo todo, no solo el área del scroll.

- `visible={modalVisible}` → el modal se muestra o se oculta según el estado
- `onClose={() => setModalVisible(false)}` → cuando el usuario presiona "Cerrar" dentro del modal, cambia el estado a `false` y el modal desaparece

**Flujo del modal:**
```
Usuario presiona "Editar Perfil"
  → setModalVisible(true)
  → AppModal aparece cubriendo la pantalla

Usuario presiona "Cerrar" dentro del modal
  → onClose se ejecuta
  → setModalVisible(false)
  → AppModal desaparece
```

---

## `SettingsScreen.js` — Configuración

```javascript
export default function SettingsScreen() {
    const icon = require('../../assets/logo.png');
```
Esta pantalla no tiene `useState` porque no necesita guardar ningún estado. Solo muestra información y botones con alertas.

```javascript
    <AppButton
        title="Modo oscuro"
        color={colors.btnPurple}
        onPress={() => Alert.alert('¡Alerta! El modo oscuro aún no está disponible.')}
    />
    <AppButton
        title="Notificaciones"
        color={colors.btnPink}
        onPress={() => Alert.alert('¡Silencio total! Las notificaciones están desactivadas.')}
    />
    <AppButton
        title="Idioma"
        color={colors.btnBrown}
        onPress={() => Alert.alert('Atención: Aquí solo hablamos español.')}
    />
```
Tres `AppButton` cada uno con su propio color y su propio mensaje de alerta. Cada `onPress` es una función anónima `() =>` que ejecuta `Alert.alert()` con el mensaje correspondiente.

**¿Por qué `AppButton` en vez del `Button` nativo directamente?**

Antes había esto en cada pantalla:
```javascript
// Repetido en Settings, Perfil, Calculadora...
<Button title="Modo oscuro" color="#8E7AB5" onPress={...} />
```
Ahora hay esto:
```javascript
// El color viene de colors.js, el componente es siempre AppButton
<AppButton title="Modo oscuro" color={colors.btnPurple} onPress={...} />
```
Si mañana se decide cambiar `Button` por un componente personalizado con animaciones, el cambio se hace solo en `AppButton.js` y se aplica automáticamente en `Settings`, `Perfil` y donde sea que se use.

---

## Comparación: antes vs después

| | Antes | Después |
|---|---|---|
| Modal en Perfil | 25 líneas de JSX directo en la pantalla | `<AppModal ... />` en 4 líneas |
| Botones | `Button` nativo con color hardcodeado | `AppButton` con `colors.btn*` |
| Dropdown en Detail | 40 líneas con `Pressable` y `useState` | `<AppDropdown ... />` en 5 líneas |

La pantalla se vuelve más fácil de leer porque muestra **qué** hace, no **cómo** lo hace internamente.