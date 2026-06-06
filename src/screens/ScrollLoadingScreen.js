// ScrollLoadingScreen muestra una lista de artículos con carga progresiva.
// Evidencia el uso de ScrollView, FlatList y ActivityIndicator del taller.

import React, { useState, useEffect } from 'react';
import {
    View, Text, FlatList,
    ActivityIndicator, StyleSheet
} from 'react-native';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';

// Lista completa de artículos del blog/revista de moda.
const todosLosArticulos = [
    { id: '1',  titulo: 'Tendencias de verano 2025',         categoria: 'Moda' },
    { id: '2',  titulo: 'Cómo combinar colores neutros',     categoria: 'Estilo' },
    { id: '3',  titulo: 'Accesorios que no pueden faltar',   categoria: 'Accesorios' },
    { id: '4',  titulo: 'Looks para la oficina',             categoria: 'Casual' },
    { id: '5',  titulo: 'Ropa sostenible y eco-friendly',    categoria: 'Tendencia' },
    { id: '6',  titulo: 'Guía de tallas internacionales',    categoria: 'Guía' },
    { id: '7',  titulo: 'Outfits para eventos especiales',   categoria: 'Elegancia' },
    { id: '8',  titulo: 'Cuidado de prendas delicadas',      categoria: 'Consejos' },
    { id: '9',  titulo: 'Moda otoño — lo que viene',         categoria: 'Moda' },
    { id: '10', titulo: 'Cómo armar un armario cápsula',     categoria: 'Estilo' },
    { id: '11', titulo: 'Vestidos para cada ocasión',        categoria: 'Guía' },
    { id: '12', titulo: 'Colores de temporada',              categoria: 'Tendencia' },
];

export default function ScrollLoadingScreen() {
    // articulos guarda los que ya se muestran en pantalla.
    const [articulos, setArticulos] = useState([]);
    // cargando controla si se muestra el ActivityIndicator.
    const [cargando, setCargando] = useState(true);

    // Al montar la pantalla, simula la carga de los primeros artículos.
    useEffect(() => {
        setTimeout(() => {
            setArticulos(todosLosArticulos.slice(0, 6));
            setCargando(false);
        }, 2500);
    }, []);

    // cargarMas simula cargar más artículos al llegar al final de la lista.
    const cargarMas = () => {
        if (articulos.length >= todosLosArticulos.length) return;
        setCargando(true);
        setTimeout(() => {
            setArticulos(todosLosArticulos);
            setCargando(false);
        }, 2000);
    };

    // Cada tarjeta de artículo.
    const renderArticulo = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.categoria}>{item.categoria}</Text>
            <Text style={styles.titulo}>{item.titulo}</Text>
        </View>
    );

    // Indicador que aparece al fondo de la lista mientras carga más.
    const renderFooter = () => {
        if (!cargando) return null;
        return (
            <View style={styles.footer}>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text style={styles.footerText}>Cargando más artículos...</Text>
            </View>
        );
    };

    return (
        <View style={styles.page}>
            <Text style={styles.header}>Revista StyleShop</Text>

            <FlatList
                data={articulos}
                keyExtractor={(item) => item.id}
                renderItem={renderArticulo}
                ListFooterComponent={renderFooter}
                onEndReached={cargarMas}
                onEndReachedThreshold={0.5}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: spacing.borderRadius.card,
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    lista: {
        padding: spacing.md,
        paddingBottom: spacing.xl,
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: spacing.borderRadius.lg,
        padding: spacing.md,
        marginBottom: spacing.md,
        borderLeftWidth: 5,
        borderLeftColor: colors.primary,
        elevation: 3,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    categoria: {
        fontSize: 12,
        color: colors.primary,
        fontWeight: '600',
        marginBottom: 6,
        textTransform: 'uppercase',
    },
    titulo: {
        fontSize: 16,
        color: colors.black,
        fontWeight: '500',
    },
    footer: {
        paddingVertical: spacing.lg,
        alignItems: 'center',
        gap: spacing.sm,
    },
    footerText: {
        color: colors.primary,
        fontSize: 14,
    },
});