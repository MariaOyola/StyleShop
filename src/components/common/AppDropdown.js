// Gestionar listas desplegables
// AppDropdown es el selector desplegable estándar de la app.
// Compatible con iOS y Android sin librerías externas.
// DetailScreen lo usa para seleccionar tallas.
// Selector desplegable

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

// opciones      → array de strings, ej: ['S', 'M', 'L', 'XL']
// seleccionado  → valor actualmente elegido
// onSeleccionar → función que recibe el valor elegido
// placeholder   → texto cuando no hay selección
export default function AppDropdown({ opciones, seleccionado, onSeleccionar, placeholder = 'Selecciona una opción' }) {
    const [abierto, setAbierto] = useState(false); // ESTA CERRADO POR DEFECTO

    return (
        <View style={styles.wrapper}>
            {/* Botón que abre/cierra el dropdown */}
            <Pressable style={styles.dropdown} onPress={() => setAbierto(!abierto)}>
                <Text style={styles.dropdownText}>

                    {/* El texto que muestra el botón */}
                    {/* ¿seleccionado es diferente al placeholder? */}
                    {/* SÍ → muestra lo que eligió el usuario  (ej: "M") */}
                    {/* NO → muestra el placeholder            (ej: "Selecciona una talla") */}
                    {seleccionado !== placeholder ? seleccionado : placeholder}
                </Text>
            </Pressable>

            {/* Lista de opciones — se muestra solo cuando está abierto */}
            {/*  Si abierto es false, React no renderiza nada. Si es true, muestra la lista. */}
            {abierto && (

                // .map() recorre el array y por cada elemento crea un Pressable. 
                // Si opciones = ['S', 'M', 'L', 'XL'], crea 4 botones. 

                // Cuando el usuario toca uno hace dos cosas seguidas:
                // 1. onSeleccionar(opcion) → le avisa a DetailScreen cuál eligió, para que actualice el estado talla
                // 2. setAbierto(false) → cierra el dropdown
                <View style={styles.optionsBox}>
                    {opciones.map((opcion) => (
                        <Pressable
                            key={opcion}
                            style={styles.option}
                            onPress={() => {
                                onSeleccionar(opcion);
                                setAbierto(false);
                            }}
                        >
                            <Text style={styles.optionText}>{opcion}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    dropdown: {
        width: '100%',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: spacing.borderRadius.md,
        paddingVertical: 14,
        paddingHorizontal: 16,
        marginTop: 8,
        backgroundColor: colors.white,
    },
    dropdownText: {
        fontSize: 18,
        color: colors.black,
    },
    optionsBox: {
        width: '100%',
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: spacing.borderRadius.md,
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
        color: colors.black,
    },
});

// Usuario ve:  [ Selecciona una talla ▾ ]

// Toca el botón
//→ setAbierto(true)
//→ aparece la lista: S / M / L / XL

// Toca "M"
//→ onSeleccionar("M")  → DetailScreen guarda talla = "M"
//→ setAbierto(false)   → se cierra la lista

// Usuario ve:  [ M ▾ ]