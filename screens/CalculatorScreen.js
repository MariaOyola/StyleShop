import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TextComponent } from 'react-native';

export default function CalculatorScreen({ navigation }) {

    const [cantidad, setCantidad] = useState("");
    const [precio, setPrecio] = useState("");
    const [Total, setTotal] = useState("0");

    function caalculatTotal() {
        const resultado =
            Number(cantidad) * Number(precio);

        setTotal(resultado);
    }

    return (

        <View>
            <Text> Cantidad</Text>
            <TextInput keyboardType="numeric" onChangeText={setCantidad} />
            <Text> Precio Unidad</Text>
            <TextInput keyboardType="numeric" onChangeText={setPrecio} />
            
                    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: "30",
        backgroundColor: 'rgba(211, 194, 215, 0.4)'
    }
})

/*

return (

    <View style={styles.container}>

        <Text style={{ marginTop: -250, fontSize: 40, fontWeight: 800, textAlign: 'center',  backgroundColor: 'rgba(148, 70, 242, 0.66)', padding: 30, borderRadius: 60 }}> Calculadora de Compras </Text>
        <Text style={{ fontSize: 20, fontWeight: 700, padding: 40, marginLeft: -250, marginTop: -50  }}> Cantidad</Text>
        <TextInput style = {{ height: 50, borderWidth: 3, width: 200, marginBottom: 20, marginLeft: -100, marginTop: -50 }} keyboardType="numeric" />
 
         <Text style = {{fontSize: 20, fontWeight: 700, padding: 30, marginLeft: -200, marginTop: -40 }}> Precio Unidad</Text>
         <TextInput style = {{ height: 50, borderWidth: 3, width: 200, marginBottom: 20, marginLeft: -100, marginTop: -50 }} keyboardType="numeric" />

    </View>


)
}
const styles = StyleSheet.create({
container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'rgba(216, 194, 221, 0.4)'
}
})

*/

