// AppModal es el modal estándar de la app.
// Cualquier pantalla que necesite un modal usa este componente
// en lugar de definir su propio Modal desde cero.

import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import AppButton from './AppButton';

// visible    → true/false para abrir o cerrar
// title      → título que aparece en el modal
// onClose    → función para cerrarlo
// children   → contenido adicional dentro del modal (opcional)
export default function AppModal({ visible, title, onClose, children }) {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.background}>
                <View style={styles.box}>
                    <Text style={styles.title}>{title}</Text>
                    {children}
                    <AppButton title="Cerrar" color={colors.btnRed} onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '85%',
        backgroundColor: colors.white,
        borderRadius: spacing.borderRadius.lg,
        padding: spacing.md,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 15,
        textAlign: 'center',
    },
});