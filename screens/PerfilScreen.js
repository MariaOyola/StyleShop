import { Text, ScrollView, Image, StyleSheet, Button, Alert, View, Modal } from 'react-native';
import React, { useState } from 'react';


export default function PerfilScreen() {
    // Estado para controlar si el modal está visible o no
    const [modalVisible, setModalVisible] = useState(false);

    // Imagen de perfil fija para mostrar en la pantalla
    const icon = require('../assets/perfil.png');

    return (
        <View style={styles.page}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Mi Perfil</Text>

                <Image style={styles.image} source={icon} />

                <Text style={styles.label}>Nombre</Text>
                <Text style={styles.value}>María José Rodríguez Oyola</Text>

                <Text style={styles.label}>Correo</Text>
                <Text style={styles.value}>mariajoserodriguez@gmail.com</Text>

                {/* Botones de acción */}
                <View style={styles.buttons}>
                    <Button
                        title='Editar Perfil'
                        color='#9e7268'
                        onPress={() => setModalVisible(true)}
                    />
                    <View style={{ height: 10 }} />
                    <Button
                        title='Cerrar Sesión'
                        color='#a94630'
                        onPress={() => Alert.alert('No se puede cerrar sesión :(')}
                    />
                </View>
            </ScrollView>

            {/* Modal sencillo controlado por el estado modalVisible */}
            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Editar Perfil</Text>
                        <Button
                            title='Cerrar'
                            color='#a94630'
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F8F5FA',
    },
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        marginTop: 20,
        width: '100%',
        backgroundColor: '#7A3E65',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 12,
        borderRadius: 18,
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
        color: '#7A3E65',
        marginTop: 20,
        marginBottom: 8,
        paddingRight: 200,
    
    },
    value: {
        fontSize: 16,
        color: '#000',
        marginTop: 8,
        paddingRight: 70,
    },
    buttons: {
        marginTop: 40,
        width: '100%',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#7A3E65',
        marginBottom: 15,
        textAlign: 'center',
    },
});