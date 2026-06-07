// CalculatorButton es el botón que usan los 4 botones de la calculadora.

import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../common/AppButton';

// title     → texto del botón (Suma, Resta, etc.)
// color     → color del botón
// onPress   → operación a ejecutar
export default function CalculatorButton({ title, color, onPress }) {
    return (
        <View style={styles.container}>
            <AppButton title={title} color={color} onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 140,
    },
});