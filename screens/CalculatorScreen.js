// Importamos React y useState para manejar el estado local.
import React, { useState } from "react";
// Importamos componentes de interfaz de React Native.
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function CalculadoraScreen({ navigation }) {
    // useState guarda el valor ingresado en el campo Cantidad.
    const [cantidad, setCantidad] = useState("");
    // useState guarda el valor ingresado en el campo Precio.
    const [precio, setPrecio] = useState("");
    // useState guarda el resultado de la operación matemática.
    const [resultado, setResultado] = useState(null);
    // useState guarda el mensaje de error si el usuario ingresa datos inválidos.
    const [error, setError] = useState("");

    // Función que calcula el total según la operación seleccionada.
    const calcularTotal = (operacion) => {
        setError("");

        if (!cantidad || !precio) {
            setError("Por favor, ingrese ambos valores.");
            return;
        }

        const can = parseFloat(cantidad);
        const pr = parseFloat(precio);

        if (isNaN(can) || isNaN(pr)) {
            setError("Por favor, ingrese valores numéricos válidos.");
            return;
        }

        if (operacion === "dividir" && pr === 0) {
            setError("No se puede dividir por cero.");
            return;
        }

        let res = 0;
        switch (operacion) {
            case "suma":res = can + pr; break;
            case "resta": res = can - pr; break;
            case "multiplicar": res = can * pr;  break;
            case "dividir": res = can / pr;  break;
            default:
                return;
        }

        setResultado(res);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#F8F5FA' }}>
            <View style={styles.container}>
                <Text style={{ marginTop: -100, backgroundColor: '#7A3E65', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 20, fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center', marginHorizontal: 20, }}>Calculadora de Compras</Text>

                {/* TextInput permite escribir texto en la aplicación. */}
                <TextInput style={styles.input} placeholder="Cantidad" value={cantidad} keyboardType="numeric" onChangeText={setCantidad} />
                <TextInput style={styles.input} placeholder="Precio" value={precio} keyboardType="numeric" onChangeText={setPrecio} />

                <View style={styles.buttonGroup}>
                    <View style={styles.buttonContainer}>
                        <Button title="Suma" color='#8B5E5A' onPress={() => calcularTotal("suma")} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Resta" color='#8E7AB5' onPress={() => calcularTotal("resta")} />
                    </View>
                </View>

                <View style={styles.buttonGroup}>
                    <View style={styles.buttonContainer}>
                        <Button title="Multiplicar" color='#A2678A' onPress={() => calcularTotal("multiplicar")} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Dividir" color='#A67B5B' onPress={() => calcularTotal("dividir")} />
                    </View>
                </View>

                {/* Si hay un error, se muestra en pantalla. */}
                {error ? <Text style={styles.error}>{error}</Text> : null}
                {/* Si ya se calculó un resultado, se muestra aquí. */}
                {resultado !== null ? <Text style={styles.result}>Resultado: {resultado}</Text> : null}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: '#F8F5FA',
    },
    input: {
        borderWidth: 4,
        borderColor: "#7A3E65",
        padding: 20,
        marginBottom: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    error: {
        color: "#ca2222",
        marginTop: 20,
    },
    result: {
        marginTop: 40,
        fontWeight: "bold",
        color: "#7A3E65"
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        height: 50,
    },
    buttonContainer: {
        width: 140,
    },
});

