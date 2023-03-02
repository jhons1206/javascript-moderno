// Probando Objetos

const cliente = {
    nombre: 'Jhon Sandoval',
    balance: 500,
};

describe('Testing al Cliente', () => {
    test('El Cliente es Premium', () => {
        expect(cliente.balance).toBeGreaterThan(400); // toBeGreaterThan: Si es mayor a 
    });

    test('Es Jhon Sandoval', () => {
        expect(cliente.nombre).toBe('Jhon Sandoval'); // toBe: Es igual a
    });

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Jeremy')
    })

    test('No tiene 500', () => {
        expect(cliente.balance).not.toBe(400)
    })
});
