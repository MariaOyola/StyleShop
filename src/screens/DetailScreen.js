// DetailScreen muestra la información completa del producto seleccionado.
// Ahora usa AppDropdown en lugar de tener el dropdown definido aquí.

import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, Alert } from 'react-native';
import AppDropdown from '../components/common/AppDropdown';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

export default function DetailScreen({ route }) {
    const { nombre = 'Producto', precio = '', imagen } = route.params || {};
    const [talla, setTalla] = useState('Selecciona una talla');

    const tallas = ['S', 'M', 'L', 'XL'];

    return (
        <View style={styles.page}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Detalle del producto</Text>

                {imagen ? <Image style={styles.image} source={imagen} /> : null}

                <Text style={styles.label}>Nombre</Text>
                <Text style={styles.value}>{nombre}</Text>

                <Text style={styles.label}>Precio</Text>
                <Text style={styles.value}>{precio}</Text>

                <Text style={styles.label}>Selecciona la talla</Text>

                {/* Antes el dropdown estaba definido aquí con Pressable y estados propios.
                    Ahora se usa AppDropdown y solo se le pasan las opciones. */}
                <AppDropdown
                    opciones={tallas}
                    seleccionado={talla}
                    onSeleccionar={setTalla}
                    placeholder="Selecciona una talla"
                />

                <View style={styles.buttonContainer}>
                    <Button
                        title="Agregar al carrito"
                        color={colors.primary}
                        onPress={() => Alert.alert('Producto agregado', 'Esta función es solo demostrativa.')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

// Mismos estilos que tenías.
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        padding: spacing.md,
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        width: '100%',
        backgroundColor: colors.primary,
        color: colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
        borderRadius: spacing.borderRadius.lg,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: spacing.borderRadius.card,
        marginBottom: 20,
    },
    label: {
        width: '100%',
        fontSize: 16,
        color: colors.primary,
        fontWeight: 'bold',
        marginTop: 16,
    },
    value: {
        width: '100%',
        fontSize: 18,
        color: colors.black,
        marginTop: 6,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
    },
});