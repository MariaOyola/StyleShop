// HomeScreen es la pantalla principal de la tienda.
// Antes se llamaba StyleShop, ahora tiene un nombre más descriptivo.
// HomeScreen.js — Pantalla principal de la tienda

import React from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import ProductCard from '../components/cards/ProductCard';
import { productosInicio, productosMas } from '../constants/products';
import { useScrollLoader } from '../hooks/useScrollLoader';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

// navigation es un objeto que React Navigation pasa automáticamente a cada pantalla.
// useScrollLoader devuelve los dos estados de carga.
export default function HomeScreen({ navigation }) {
    const { loading, loading1 } = useScrollLoader();


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text>Cargando productos...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            {/* ScrollView → permite desplazar el contenido cuando es más largo que la pantalla.   */}
            <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={styles.container}>

                <Text style={{ marginTop: 20, backgroundColor: colors.primary, paddingVertical: 15, paddingHorizontal: 25, borderRadius: spacing.borderRadius.card, fontSize: 22, fontWeight: 'bold', color: colors.white, textAlign: 'center', marginHorizontal: 20 }}>
                    Bienvenida a una nueva experiencia de estilo y calidad
                </Text>

                <View style={{ flexDirection: 'row', gap: spacing.md, marginTop: spacing.xxl }} />

                <View style={{ flexDirection: 'row', gap: spacing.lg }}>
                    <Text style={{ paddingVertical: 50, fontSize: 22, marginTop: -100, color: colors.primary, fontWeight: '800' }}>
                        Productos Destacados
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.lg, justifyContent: 'center', marginTop: -50 }}>
                    {productosInicio.map((producto) => (
                        <ProductCard
                            // key={producto.id} → React necesita un identificador único en cada elemento de una lista
                            //  para saber cuál actualizar cuando algo cambia.
                            key={producto.id}
                            imagen={producto.imagen}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            // navigation.navigate('Detail', {...}) → navega a la pantalla Detail y le envía los datos
                            //  del producto como parámetros. DetailScreen los recibe con route.params.
                            onPress={() => navigation.navigate('Detail', {
                                nombre: producto.nombre,
                                precio: producto.precio,
                                imagen: producto.imagen,
                            })}
                        />
                    ))}
                </View>

                {/* Mientras loading1 sea true muestra el indicador. Cuando cambia a false a los 8 segundos,
                 muestra la segunda tanda de productos. Esto simula la carga diferida (lazy loading). */}
                {loading1 ? (
                    <View style={{ marginVertical: spacing.md }}>
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.lg, justifyContent: 'center' }}>
                        {productosMas.map((producto) => (
                            <ProductCard
                                key={producto.id}
                                imagen={producto.imagen}
                                nombre={producto.nombre}
                                precio={producto.precio}
                                onPress={() => navigation.navigate('Detail', {
                                    nombre: producto.nombre,
                                    precio: producto.precio,
                                    imagen: producto.imagen,
                                })}
                            />
                        ))}
                    </View>
                )}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: spacing.md,
    },
});