import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {
    const citas = new Citas();
    const id = Date.now();

    test('Agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Cenizo',
            propietario: 'Jeremy',
            telefono: '19895234',
            fecha: '02-03-2023',
            hora: '4:46',
            sintomas: 'Solo duerme',
        };

        citas.agregarCita(citaObj);

        // Pruebas (Testing a la clase)
        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Silvestre',
            propietario: 'Jeremy',
            telefono: '19895234',
            fecha: '02-03-2023',
            hora: '4:46',
            sintomas: 'Solo duerme',
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    });
});
