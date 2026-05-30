import React, { useEffect } from 'react'; // useEffect se utiliza para ejecutar una acción automáticamente
import { View, Image, StyleSheet, Text } from 'react-native';


export default function LagePages({ navigation }) {
    const icon = require('../assets/Shop.png') // Imagen del logo

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('StyleShop');
        }, 5000);  // Tiempo de la  pagina Lage Page
    }, [40]);

    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={icon} ></Image>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        backgroundColor: '#d1c2d5',
        marginTop: -100,
    },
    Image: {
        width: 200,  //ancho de la imagen.
        height: 200, // alto de la imagen.
        resizeMode: 'contain', //ajusta la imagen sin deformarla.
        alignSelf: 'center', //centra la imagen horizontalmente.
        marginTop: 20, //espacio arriba.
        marginBottom: 20, //espacio abajo.

    }

});
