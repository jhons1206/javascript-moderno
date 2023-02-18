const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async (cliente) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente), // stringify: convierte nuestro objeto a un string (cadena)
            headers: {
                'Content-Type': 'application/json',
            },
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
};

// Obtiene todos los clientes
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url); // fetch por default envía un GET a la API
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
};

// Elimina un cliente
export const eliminarCliente = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
};

// Obtiene un cliente por su ID
export const obtenerClienteId = async (id) => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
};

// Actualiza un registro
export const editarCliente = async (cliente) => {
    try {
        // PUT: Reescribe el objeto completo
        // PATCH: Reescribe el objeto parcial
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
};
