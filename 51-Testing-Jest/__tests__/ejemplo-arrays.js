// Probando Arrays

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

describe('Testing al carrito de compras', () => {
    test('Probar que el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(2);
    });

    test('Verificar que el carrito no esté vacío', () => {
        expect(carrito).not.toHaveLength(0);
    });
});
