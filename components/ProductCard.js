import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';


const icon = require('../assets/blusa1.png');
const icon1 = require('../assets/falda.png');
const icon2 = require('../assets/conjunto.png');
const icon3 = require('../assets/vestido.png');
const icon4 = require('../assets/gala.png');
const icon5 = require('../assets/blusa2.png');
export default function ProductCard({ imagen, nombre, precio }) {
    return (
        <View>
            <View style={style.card}>
                <Image style={style.Image} source={imagen} />
                <Text style={style.productName}> {nombre} </Text>
                <Text style={style.productPrice}> {precio} </Text>
            </View>
        </View>
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