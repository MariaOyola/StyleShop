// Este hook maneja cuándo mostrar o esconder los ActivityIndicator.
// StyleShop solo le pregunta: ¿ya cargó? y actúa según la respuesta.
// Hook de carga progresiva

import { useState, useEffect } from 'react';

// Ambos estados empiezan en true porque al abrir la pantalla todo está "cargando".
export function useScrollLoader() {
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(true);


    useEffect(() => {
        // Igual que antes, solo que ahora vive fuera de la pantalla.
        //useEffect → se ejecuta una sola vez cuando la pantalla aparece
        //  (por el [] al final). Lanza dos timers: el primero apaga el primer indicador a los 3 segundos,
        //  el segundo a los 8.
        const t1 = setTimeout(() => setLoading(false), 3000);
        // setTimeout → ejecuta una función después de X milisegundos. 3000 = 3 segundos.
        const t2 = setTimeout(() => setLoading1(false), 8000);

        // Si el usuario sale antes de que terminen, cancelamos los timers.
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);
  // Devuelve solo los dos estados. HomeScreen los recibe y decide qué mostrar.
    return { loading, loading1 };
}
