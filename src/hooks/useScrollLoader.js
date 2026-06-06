// Este hook maneja cuándo mostrar o esconder los ActivityIndicator.
// StyleShop solo le pregunta: ¿ya cargó? y actúa según la respuesta.

import { useState, useEffect } from 'react';

export function useScrollLoader() {
    const [loading, setLoading]   = useState(true);
    const [loading1, setLoading1] = useState(true);

    useEffect(() => {
        // Igual que antes, solo que ahora vive fuera de la pantalla.
        const t1 = setTimeout(() => setLoading(false),  3000);
        const t2 = setTimeout(() => setLoading1(false), 8000);

        // Si el usuario sale antes de que terminen, cancelamos los timers.
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    return { loading, loading1 };
}
