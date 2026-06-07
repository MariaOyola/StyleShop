// Los productos de la tienda viven aquí, separados de la pantalla.
// Si se agregan o cambian productos, solo se toca este archivo.
// ¿Por qué dos listas? → productosInicio carga a los 3 segundos y productosMas a los
//  8, simulando una carga progresiva con el ActivityIndicator.
export const productosInicio = [
    { id: 1, imagen: require('../../assets/blusa1.png'), nombre: 'Camisa crop unicolor', precio: '60.000 $' },
    { id: 2, imagen: require('../../assets/blusa2.png'), nombre: 'Blusa en copa', precio: '80.000 $' },
    { id: 3, imagen: require('../../assets/conjunto.png'), nombre: 'Conjunto de lana', precio: '150.000 $' },
    { id: 4, imagen: require('../../assets/falda.png'), nombre: 'Falda de verano', precio: '120.000 $' },
    { id: 5, imagen: require('../../assets/gala.png'), nombre: 'Vestido de gala', precio: '180.000 $' },
    { id: 6, imagen: require('../../assets/vestido.png'), nombre: 'Vestido de verano', precio: '120.000 $' },
];

// export const → exporta la lista para que cualquier archivo la pueda importar.
export const productosMas = [
    { id: 7, imagen: require('../../assets/elegant.png'), nombre: 'Conjunto elegante', precio: '60.000 $' },
    { id: 8, imagen: require('../../assets/elegante.png'), nombre: 'Vestido en lana', precio: '80.000 $' },
    { id: 9, imagen: require('../../assets/elegante2.png'), nombre: 'Conjunto para matrimonio', precio: '150.000 $' },
    { id: 10, imagen: require('../../assets/elegante3.png'), nombre: 'Conjunto de verano', precio: '120.000 $' },
    { id: 11, imagen: require('../../assets/elegante5.png'), nombre: 'Vestido de gala', precio: '180.000 $' },
    { id: 12, imagen: require('../../assets/elegante6.png'), nombre: 'Conjunto de verano', precio: '120.000 $' },
];