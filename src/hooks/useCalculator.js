// Gestionar la lógica matemática
// Toda la lógica de la calculadora vive aquí.
// CalculatorScreen solo muestra los valores y llama a calcular().

import { useState } from 'react';

export function useCalculator() {
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState('');

    // Cada vez que se presiona un botón, primero borra el error anterior.
    const calcular = (operacion) => {
        setError('');

        // !cantidad → si el campo está vacío, es true.
        // Si alguno está vacío, muestra el error y para (return).
        if (!cantidad || !precio) {
            setError('Por favor, ingrese ambos valores.');
            return;
        }

        // parseFloat → convierte el texto que escribió el usuario ("25") a número real (25).
        //  Sin esto no se puede operar matemáticamente.
        const can = parseFloat(cantidad);
        const pr = parseFloat(precio);

        // isNaN → "is Not a Number". Si el usuario escribió letras en vez de números, 
        // parseFloat devuelve NaN y esto lo detecta.
        if (isNaN(can) || isNaN(pr)) {
            setError('Por favor, ingrese valores numéricos válidos.');
            return;
        }

        // Validación especial: dividir entre cero es
        //  matemáticamente imposible, se corta antes de intentarlo.
        if (operacion === 'dividir' && pr === 0) {
            setError('No se puede dividir por cero.');
            return;
        }

        // switch → es como varios if encadenados. Según qué botón presionó 
        // el usuario ('suma', 'resta', etc.), ejecuta la operación correspondiente.
        //  El break evita que siga ejecutando los casos siguientes.
        let res = 0;
        switch (operacion) {
            case 'suma': res = can + pr; break;
            case 'resta': res = can - pr; break;
            case 'multiplicar': res = can * pr; break;
            case 'dividir': res = can / pr; break;
            default: return;
        }

        setResultado(res);
    };
 // Devuelve todo lo que la pantalla necesita. La pantalla no sabe cómo funciona 
 // la lógica, solo pide los valores y los muestra.
    return { cantidad, setCantidad, precio, setPrecio, resultado, error, calcular };
}