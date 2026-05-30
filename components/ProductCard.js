import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';


const icon = require('../assets/blusa1.png');
const icon1 = require('../assets/falda.png');
const icon2 = require('../assets/conjunto.png');
const icon3 = require('../assets/vestido.png');
const icon4 = require('../assets/gala.png');
const icon5 = require('../assets/blusa2.png');
export default function ProductCard({ navigation }) {
    return (
        <View>
            <View style={style.card}>
                <Image style={style.Image} source={icon} />
                <Text style={style.productName}> Camisa crop unicolor </Text>
                <Text style={style.productPrice}>60.000 $</Text>
            </View>

            <View style={style.card}>
                <Image style={style.Image} source={icon1} />
                <Text style={style.productName}> Falda lapiz </Text>
                <Text style={style.productPrice}>80.000 $</Text>
            </View>

            <View style={style.card}>
                <Image style={style.Image} source={icon2} />
                <Text style={style.productName}> Conjunto de lana </Text>
                <Text style={style.productPrice}>150.000 $</Text>
            </View>

            <View style={style.card}>
                <Image style={style.Image} source={icon3} />
                <Text style={style.productName}> Vestido de verano </Text>
                <Text style={style.productPrice}>120.000 $</Text>
            </View>

            <View style={style.card}>
                <Image style={style.Image} source={icon4} />
                <Text style={style.productName}> Vestido de gala </Text>
                <Text style={style.productPrice}>180.000 $</Text>
            </View>

            <View style={style.card}>
                <Image style={style.Image} source={icon5} />
                <Text style={style.productName}> Camisa crop unicolor </Text>
                <Text style={style.productPrice}>60.000 $</Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    card: {
        width: 150,  // Ancho de la tarjeta.
        backgroundColor: '#FFFFFF',  // Fondo blanco.
        borderRadius: 15, // Esquinas redondeadas.
        padding: 10,  // Espacio interno.
         marginBottom: 20, // separacion entre tarjetas vertical.

        shadowColor: '#000', // Sombra en iPhone.
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,

        elevation: 5, // Sombra en Android.
    },

    Image: {
        width: '100%', // La imagen ocupa todo el ancho de la tarjeta.
        height: 150,   // Altura de la imagen.
        borderTopLeftRadius: 15, // Redondea solo las esquinas superiores,
        borderTopRightRadius: 15,
    },

    productName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2563EB',
        marginTop: 5,
    }
});