// Toda la lógica de la calculadora vive aquí.
// CalculatorScreen solo muestra los valores y llama a calcular().

import { useState } from 'react';

export function useCalculator() {
    const [cantidad,   setCantidad]  = useState('');
    const [precio,     setPrecio]    = useState('');
    const [resultado,  setResultado] = useState(null);
    const [error,      setError]     = useState('');

    // Exactamente la misma función que tenías, solo movida aquí.
    const calcular = (operacion) => {
        setError('');

        if (!cantidad || !precio) {
            setError('Por favor, ingrese ambos valores.');
            return;
        }

        const can = parseFloat(cantidad);
        const pr  = parseFloat(precio);

        if (isNaN(can) || isNaN(pr)) {
            setError('Por favor, ingrese valores numéricos válidos.');
            return;
        }

        if (operacion === 'dividir' && pr === 0) {
            setError('No se puede dividir por cero.');
            return;
        }

        let res = 0;
        switch (operacion) {
            case 'suma':        res = can + pr; break;
            case 'resta':       res = can - pr; break;
            case 'multiplicar': res = can * pr; break;
            case 'dividir':     res = can / pr; break;
            default: return;
        }

        setResultado(res);
    };

    return { cantidad, setCantidad, precio, setPrecio, resultado, error, calcular };
}