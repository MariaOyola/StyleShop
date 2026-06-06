// SplashScreen es la pantalla de inicio que se muestra 5 segundos
// y luego navega automáticamente al menú principal.
// Antes se llamaba LagePage, ahora tiene un nombre más descriptivo.

import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function SplashScreen({ navigation }) {
    const icon = require('../../assets/Shop.png');

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('MainTab');
        }, 5000);
        // Cancelamos el timer si el usuario sale antes.
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image style={styles.Image} source={icon} />
        </View>
    );
}

// Mismos estilos que tenías en LagePage.
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        backgroundColor: colors.splash,
        marginTop: -100,
    },
    Image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
});