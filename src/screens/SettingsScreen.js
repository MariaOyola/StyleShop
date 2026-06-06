// SettingsScreen muestra las opciones de configuración de la app.

import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import AppButton from '../components/common/AppButton';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

export default function SettingsScreen() {
    const icon = require('../../assets/logo.png');

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={styles.container}>

                <Text style={{ marginTop: 20, backgroundColor: colors.primary, paddingVertical: 15, paddingHorizontal: 25, borderRadius: spacing.borderRadius.card, fontSize: 22, fontWeight: 'bold', color: colors.white, textAlign: 'center', marginHorizontal: 20 }}>
                    Configuración
                </Text>

                <Image style={styles.Image} source={icon} />

                {/* Antes Button estaba suelto. Ahora usamos AppButton. */}
                <View style={styles.Button}>
                    <AppButton title="Modo oscuro"    color={colors.btnPurple} onPress={() => Alert.alert('¡Alerta! El modo oscuro aún no está disponible.')} />
                    <AppButton title="Notificaciones" color={colors.btnPink}   onPress={() => Alert.alert('¡Silencio total! Las notificaciones están desactivadas por ahora.')} />
                    <AppButton title="Idioma"         color={colors.btnBrown}  onPress={() => Alert.alert('Atención: Aquí solo hablamos español.')} />
                </View>
            </ScrollView>
        </View>
    );
}

// Mismos estilos que tenías.
const styles = StyleSheet.create({
    container: {
        padding: spacing.md,
        backgroundColor: colors.background,
        paddingBottom: 50,
    },
    Image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 20,
    },
    Button: {
        marginTop: spacing.md,
        gap: spacing.md,
    },
});