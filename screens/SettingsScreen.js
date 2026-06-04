// Componentes principales de React Native para la pantalla de ajustes.
import { Text, ScrollView, Image, StyleSheet, Button, Alert, View } from 'react-native';
import React from 'react';

export default function SettingsScreen({ navigation }) {
    // Imagen de logo que se muestra en el encabezado de configuración.
    const icon = require('../assets/logo.png');
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F5FA' }}>
            <ScrollView style={{ backgroundColor: '#F8F5FA' }} contentContainerStyle={styles.container}>
                <Text style={{ marginTop: 20, backgroundColor: '#7A3E65', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 20, fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginHorizontal: 20 }}>Configuración</Text>
                <Image style={styles.Image} source={icon} />

                {/* Grupo de botones con acciones de configuración simulado. */}
                <View style={styles.Button}>
                    <Button title='Modo oscuro' color='#8E7AB5' onPress={() => Alert.alert('¡Alerta! El modo oscuro aún no está disponible.')} />
                    <Button title='Notificaciones' color='#A2678A' onPress={() => Alert.alert('¡Silencio total! Las notificaciones están desactivadas por ahora.')} />
                    <Button title='Idioma' color='#A67B5B' onPress={() => Alert.alert(' Atención: Aquí solo hablamos español.')} />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F8F5FA',
        paddingBottom: 50,
    },

    Image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 20,
    },

    TexsName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginTop: 20,
    },

    Button: {
        marginTop: 20,
        gap: 20,
    }
})