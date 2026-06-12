// Renderizar botones reutilizables
// AppButton es el botón estándar de la app.
// En lugar de repetir color y estilo en cada pantalla,
// se usa este componente y se le pasa el color que se necesite.
 
import React from 'react';
import { Button } from 'react-native';
 
// title   → texto del botón
// color   → color de fondo (viene de colors.js)
// onPress → función que se ejecuta al presionar
export default function AppButton({ title, color, onPress }) {
    return (
        <Button
            title={title}
            color={color}
            onPress={onPress}
        />
    );
}
 