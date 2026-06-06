// ProductCard es el componente que muestra cada producto en la tienda.
// Ahora vive en components/cards/ según la arquitectura.

import React from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

export default function ProductCard({ imagen, nombre, precio, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image style={styles.Image} source={imagen} />
            <Text style={styles.productName}>{nombre}</Text>
            <Text style={styles.productPrice}>{precio}</Text>
        </Pressable>
    );
}

// Los estilos son exactamente los mismos que tenías.
const styles = StyleSheet.create({
    card: {
        width: 150,
        backgroundColor: colors.white,
        borderRadius: spacing.borderRadius.card,
        padding: spacing.card.padding,
        marginBottom: spacing.card.marginBottom,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2.25,
        shadowRadius: 8,
        elevation: 5,
    },
    Image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: spacing.borderRadius.card,
        borderTopRightRadius: spacing.borderRadius.card,
    },
    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.black,
        marginTop: 10,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: 5,
    },
});