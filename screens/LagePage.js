// React se utiliza para crear componentes de interfaz.
import React, { useEffect } from 'react';
// Importamos componentes visuales de React Native.
import { View, Image, StyleSheet, Text } from 'react-native';

export default function LagePages({ navigation }) {
    // Cargamos una imagen local para mostrar en la pantalla de inicio.
    const icon = require('../assets/Shop.png');

    // useEffect ejecuta el código dentro cuando la pantalla se monta por primera vez.
    // Aquí usamos un temporizador para ir automáticamente a la siguiente pantalla.
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MainTab');
        }, 5000);  // Después de 5 segundos, se navega a MainTab.
    }, []);

    return (
        // View es un contenedor similar a un <div> en la web.
        <View style={styles.container}>
            {/* Image muestra una imagen en la pantalla. */}
            <Image style={styles.Image} source={icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center', // Centra el contenido verticalmente.
        alignItems: 'center', // Centra el contenido horizontalmente.
        gap: 40,
        backgroundColor: '#d1c2d5',
        marginTop: -100,
    },
    Image: {
        width: 200,  // Ancho de la imagen.
        height: 200, // Alto de la imagen.
        resizeMode: 'contain', // Ajusta la imagen sin deformarla.
        alignSelf: 'center', // Centra la imagen dentro de su contenedor.
        marginTop: 20,
        marginBottom: 20,
    }
});
