// Introducción a Snapshots
// Actualizar Snapshot: npm t -- -u
// toMatchSnapshot: Probar o testear todo el objeto

const cliente = {
    nombre: 'Jeremy Sandoval',
    balance: 500,
    tipo: 'Premium',
};

describe('Testing al cliente', () => {
    test('Es Jhon Sandoval', () => {
        expect(cliente).toMatchSnapshot();
    });
});
