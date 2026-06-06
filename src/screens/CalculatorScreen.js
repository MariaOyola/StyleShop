// CalculatorScreen muestra la calculadora de compras.
// Usa useCalculator para la lógica y CalculatorButton para los botones.

import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useCalculator } from '../hooks/useCalculator';
import CalculatorButton from '../components/calculator/CalculatorButton';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

export default function CalculatorScreen() {
    const { cantidad, setCantidad, precio, setPrecio, resultado, error, calcular } = useCalculator();

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={styles.container}>
                <Text style={{ marginTop: -100, backgroundColor: colors.primary, paddingVertical: 15, paddingHorizontal: 25, borderRadius: spacing.borderRadius.card, fontSize: 22, fontWeight: 'bold', color: colors.white, textAlign: 'center', marginHorizontal: 20 }}>
                    Calculadora de Compras
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Cantidad"
                    value={cantidad}
                    keyboardType="numeric"
                    onChangeText={setCantidad}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Precio"
                    value={precio}
                    keyboardType="numeric"
                    onChangeText={setPrecio}
                />

                {/* Antes era Button dentro de View con width 140.
                    Ahora CalculatorButton ya tiene ese View incluido. */}
                <View style={styles.buttonGroup}>
                    <CalculatorButton title="Suma"  color={colors.btnWine}   onPress={() => calcular('suma')} />
                    <CalculatorButton title="Resta" color={colors.btnPurple} onPress={() => calcular('resta')} />
                </View>

                <View style={styles.buttonGroup}>
                    <CalculatorButton title="Multiplicar" color={colors.btnPink}  onPress={() => calcular('multiplicar')} />
                    <CalculatorButton title="Dividir"     color={colors.btnBrown} onPress={() => calcular('dividir')} />
                </View>

                {error          ? <Text style={styles.error}>{error}</Text>                        : null}
                {resultado !== null ? <Text style={styles.result}>Resultado: {resultado}</Text> : null}
            </View>
        </View>
    );
}

// Mismos estilos que tenías.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md,
        justifyContent: 'center',
        backgroundColor: colors.background,
    },
    input: {
        borderWidth: 4,
        borderColor: colors.primary,
        padding: spacing.md,
        marginBottom: spacing.md,
        borderRadius: spacing.borderRadius.card,
        marginTop: spacing.sm,
    },
    error: {
        color: colors.error,
        marginTop: spacing.md,
    },
    result: {
        marginTop: spacing.xl,
        fontWeight: 'bold',
        color: colors.primary,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: spacing.sm,
        height: 50,
    },
});