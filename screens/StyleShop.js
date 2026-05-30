import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView, ActivityIndicator } from 'react-native';
import ProductCard from '../components/ProductCard';


export default function StyleShop({ navigation }) {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F8F5FA' }}>
                <ActivityIndicator size="large" color="#7814db" />
                <Text>Cargando productos...</Text>
            </View>
        )
    }
    return (
        <ScrollView style={{ backgroundColor: '#F8F5FA' }} contentContainerStyle={style.container}>

            <Text style={{ marginTop: 20, backgroundColor: '#7A3E65', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 20, fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginHorizontal: 20, }}>Bienvenida a una nueva experiencia de estilo y calidad</Text>
            <View style={{ flexDirection: 'row', gap: "20" }}>
                <Button title='Ver Productos' color='#A2678A' onPress={() => navigation.navigate('HomeScreen')} />
                <Button title='Ver calculadora' color='#8E7AB5' onPress={() => navigation.navigate('CalculatorScreen')} />
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Button title='Ver Carrito' color='#5E4B56' onPress={() => navigation.navigate('ScrollScreen')} />
            </View>

            <View style={{ flexDirection: 'row', gap: "30" }}>
                <Text style={{ paddingVertical: 50, fontSize: 22, color: '#4d1770', marginRight: 90, fontWeight: '800' }}>Productos Destacados</Text>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 30, justifyContent: 'center', marginTop: -50, marginVertical: 10, }}>

                
                <ProductCard />
                <ProductCard />
    


            </View>

        </ScrollView>
    )
}
const style = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: "20",
    },



})