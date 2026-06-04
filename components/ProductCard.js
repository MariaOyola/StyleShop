// ProductCard es un componente reutilizable para mostrar un producto.
import React from "react";
import { Text, StyleSheet, Image, Pressable } from 'react-native';

export default function ProductCard({ imagen, nombre, precio, onPress }) {
    return (
        <Pressable onPress={onPress} style={style.card}>
            <Image style={style.Image} source={imagen} />
            <Text style={style.productName}>{nombre}</Text>
            <Text style={style.productPrice}>{precio}</Text>
        </Pressable>
    )
}
const style = StyleSheet.create({
    card: {
        width: 150,  // Ancho de la tarjeta.
        backgroundColor: '#ffffff',  // Fondo blanco.
        borderRadius: 20, // Esquinas redondeadas.
        padding: 10,  // Espacio interno.
         marginBottom: 20, // separacion entre tarjetas vertical.

        shadowColor: '#000000', // Sombra en iPhone.
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 2.25,
        shadowRadius: 8,

        elevation: 5, // Sombra en Android.
    },

    Image: {
        width: '100%', // La imagen ocupa todo el ancho de la tarjeta.
        height: 150,   // Altura de la imagen.
        borderTopLeftRadius: 20, // Redondea solo las esquinas superiores,
        borderTopRightRadius: 20,
    },

    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7A3E65',
        marginTop: 5,
    }
});