// React se importa para poder usar componentes y hooks.
import React from 'react';
// useState permite guardar datos que cambian con la interacción.
import { useState } from "react";
// useEffect permite ejecutar código cuando el componente se carga.
import { useEffect } from "react";
// View, Text, StyleSheet y otros componentes visuales de React Native.
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// ProductCard es un componente que se usa para mostrar cada producto.
import ProductCard from '../components/ProductCard';


export default function StyleShop({ navigation }) {

    const icon = require('../assets/blusa1.png');
    const icon1 = require('../assets/blusa2.png');
    const icon2 = require('../assets/conjunto.png');
    const icon3 = require('../assets/falda.png');
    const icon4 = require('../assets/gala.png');
    const icon6 = require('../assets/vestido.png');
    const icon7 = require('../assets/elegant.png');
    const icon8 = require('../assets/elegante.png');
    const icon9 = require('../assets/elegante2.png');
    const icon10 = require('../assets/elegante3.png');
    const icon11 = require('../assets/elegante5.png');
    const icon12 = require('../assets/elegante6.png');

    // Definimos los productos que se usan en esta pantalla.
    const productosInicio = [
        { id: 1, imagen: icon, nombre: 'Camisa crop unicolor', precio: '60.000 $' },
        { id: 2, imagen: icon1, nombre: 'Blusa en copa', precio: '80.000 $' },
        { id: 3, imagen: icon2, nombre: 'Conjunto de lana', precio: '150.000 $' },
        { id: 4, imagen: icon3, nombre: 'Falda de verano', precio: '120.000 $' },
        { id: 5, imagen: icon4, nombre: 'Vestido de gala', precio: '180.000 $' },
        { id: 6, imagen: icon6, nombre: 'Vestido de verano', precio: '120.000 $' },
    ];

    const productosMas = [
        { id: 7, imagen: icon7, nombre: 'Conjunto elegante', precio: '60.000 $' },
        { id: 8, imagen: icon8, nombre: 'Vestido en lana', precio: '80.000 $' },
        { id: 9, imagen: icon9, nombre: 'Conjunto para matrimonio', precio: '150.000 $' },
        { id: 10, imagen: icon10, nombre: 'Conjunto de verano', precio: '120.000 $' },
        { id: 11, imagen: icon11, nombre: 'Vestido de gala', precio: '180.000 $' },
        { id: 12, imagen: icon12, nombre: 'Conjunto de verano', precio: '120.000 $' },
    ];

    // useState guarda si la primera parte de la pantalla sigue cargando.
    const [loading, setLoading] = useState(true);
    // useState guarda si la segunda parte de los productos sigue cargando.
    const [loading1, setLoading1] = useState(true);

    // useEffect se ejecuta al montar la pantalla y simula la carga inicial.
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading1(false);
        }, 8000);
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F5FA' }}>
                <ActivityIndicator size="large" color="#7A3E65" />
                <Text>Cargando productos...</Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F5FA' }}>
            {/* ScrollView permite desplazar el contenido cuando es más largo que la pantalla. */}
            <ScrollView style={{ backgroundColor: '#F8F5FA' }} contentContainerStyle={style.container}>

                <Text style={{ marginTop: 20, backgroundColor: '#7A3E65', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 20, fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginHorizontal: 20, }}>Bienvenida a una nueva experiencia de estilo y calidad</Text>
                <View style={{ flexDirection: 'row', gap: "20", marginTop: 50}}>
                </View>
                <View style={{ flexDirection: 'row', gap: "30" }}>
                    <Text style={{ paddingVertical: 50, fontSize: 22, marginTop: -100, color: '#7A3E65',  fontWeight: '800' }}>Productos Destacados</Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 30, justifyContent: 'center', marginTop: -50 }}>
                    {productosInicio.map((producto) => (
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

                {loading1 ? (
                    <View style={{ marginVertical: 20 }}>
                        <ActivityIndicator size="large" color="#7A3E65" />
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 30, justifyContent: 'center' }}>
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
    )
}
const style = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: "20",
    },



})