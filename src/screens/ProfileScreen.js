// ProfileScreen muestra los datos del perfil del usuario.
// Ahora usa AppModal y AppButton en lugar de definirlos aquí.

import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Alert } from 'react-native';
import AppButton from '../components/common/AppButton';
import AppModal from '../components/common/AppModal';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

export default function ProfileScreen() {
    // modalVisible controla si el modal está abierto o cerrado. 
    // Empieza en false → cerrado.

    const [modalVisible, setModalVisible] = useState(false);
    const icon = require('../../assets/perfil.png');

    return (
        <View style={styles.page}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Mi Perfil</Text>

                <Image style={styles.image} source={icon} />

                <Text style={styles.label}>Nombre</Text>
                <Text style={styles.value}>María José Rodríguez Oyola</Text>

                <Text style={styles.label}>Correo</Text>
                <Text style={styles.value}>mariajoserodriguez@gmail.com</Text>

                {/* Antes Button estaba suelto. Ahora usamos AppButton. */}
                <View style={styles.buttons}>
                    {/*  Cuando se presiona "Editar Perfil", cambia modalVisible a true,
                     lo que abre el modal. */}
                    <AppButton
                        title="Editar Perfil"
                        color={colors.btnMauve}
                        onPress={() => setModalVisible(true)}
                    />

                    {/* Un View sin contenido que actúa como separador entre los dos botones.
                     spacing.sm es 10 píxeles de alto. */}
                    <View style={{ height: spacing.sm }} />

                    {/* Un View sin contenido que actúa como separador entre los dos botones.
                     spacing.sm es 10 píxeles de alto. */}
                    <AppButton
                        title="Cerrar Sesión"
                        color={colors.btnRed}
                        onPress={() => Alert.alert('No se puede cerrar sesión :(')}
                    />
                </View>
            </ScrollView>

            {/* visible={modalVisible} → el modal se muestra o se oculta según el estado
                onClose={() => setModalVisible(false)} → cuando el usuario presiona "Cerrar" dentro del modal, cambia el estado a false y el modal desaparece */}
            <AppModal
                visible={modalVisible}
                title="Editar Perfil"
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

 {/* Usuario presiona "Editar Perfil"
  → setModalVisible(true)
  → AppModal aparece cubriendo la pantalla

Usuario presiona "Cerrar" dentro del modal
  → onClose se ejecuta
  → setModalVisible(false)
  → AppModal desaparece */}

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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
        borderRadius: spacing.borderRadius.lg,
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 90,
        marginTop: 20,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: colors.primary,
        marginTop: 20,
        marginBottom: 8,
        paddingRight: 200,
    },
    value: {
        fontSize: 16,
        color: colors.black,
        marginTop: 8,
        paddingRight: 70,
    },
    buttons: {
        marginTop: spacing.xl,
        width: '100%',
    },
});