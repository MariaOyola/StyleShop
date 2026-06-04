// DetailScreen muestra la información completa del producto seleccionado.
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, Alert, Pressable } from 'react-native';

export default function DetailScreen({ route }) {
    // Recibimos los datos que envía StyleShop a través de navigation.navigate.
    const { nombre = 'Producto', precio = '', imagen } = route.params || {};

    // Estado para guardar la talla seleccionada.
    const [talla, setTalla] = useState('Selecciona una talla');
    const [mostrarTallas, setMostrarTallas] = useState(false);

    const tallas = ['S', 'M', 'L', 'XL'];

    return (
        <View style={styles.page}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Detalle del producto</Text>

                {/* Imagen del producto que se seleccionó en StyleShop. */}
                {imagen ? <Image style={styles.image} source={imagen} /> : null}

                <Text style={styles.label}>Nombre</Text>
                <Text style={styles.value}>{nombre}</Text>

                <Text style={styles.label}>Precio</Text>
                <Text style={styles.value}>{precio}</Text>

                <Text style={styles.label}>Selecciona la talla</Text>
                <Pressable style={styles.dropdown} onPress={() => setMostrarTallas(!mostrarTallas)}>
                    <Text style={styles.dropdownText}>{talla}</Text>
                </Pressable>

                {mostrarTallas && (
                    <View style={styles.optionsBox}>
                        {tallas.map((opcion) => (
                            <Pressable
                                key={opcion}
                                style={styles.option}
                                onPress={() => {
                                    setTalla(opcion);
                                    setMostrarTallas(false);
                                }}
                            >
                                <Text style={styles.optionText}>{opcion}</Text>
                            </Pressable>
                        ))}
                    </View>
                )}

                <View style={styles.buttonContainer}>
                    <Button
                        title="Agregar al carrito"
                        color="#7A3E65"
                        onPress={() => Alert.alert('Producto agregado', 'Esta función es solo demostrativa.')}
                    />
                </View>
            </ScrollView>
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
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
        borderRadius: 18,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        marginBottom: 20,
    },
    label: {
        width: '100%',
        fontSize: 16,
        color: '#7A3E65',
        fontWeight: 'bold',
        marginTop: 16,
    },
    value: {
        width: '100%',
        fontSize: 18,
        color: '#000',
        marginTop: 6,
    },
    dropdown: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#7A3E65',
        borderRadius: 14,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginTop: 8,
        backgroundColor: '#fff',
    },
    dropdownText: {
        fontSize: 18,
        color: '#000',
    },
    optionsBox: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#7A3E65',
        borderRadius: 14,
        marginTop: 10,
        overflow: 'hidden',
    },
    option: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 16,
        color: '#000',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
    },
});