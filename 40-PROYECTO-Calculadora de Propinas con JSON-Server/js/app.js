// REST API de Restaurant con Consumos y Propinas

let cliente = {
    mesa: '',
    hora: '',
    pedido: [],
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres',
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some((campo) => campo === '');

    if (camposVacios) {
        // Verificar si ya hay una alerta
        const existeAlerta = document.querySelector('.invalid-feedback');

        if (!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
    }

    cliente = { ...cliente, mesa, hora };

    // console.log(cliente)

    // Ocultar Modal
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // Mostrar las secciones
    mostrarSecciones();

    // Obtener platillos de la API de JSON Server
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach((seccion) => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => mostrarPlatillos(resultado))
        .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach((platillo) => {
        const { id, nombre, precio, categoria } = platillo;

        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombrePlatillo = document.createElement('DIV');
        nombrePlatillo.classList.add('col-md-4');
        nombrePlatillo.textContent = nombre;

        const precioPlatillo = document.createElement('DIV');
        precioPlatillo.classList.add('col-md-3', 'fw-bold');
        precioPlatillo.textContent = `$ ${precio}`;

        const categoriaPlatillo = document.createElement('DIV');
        categoriaPlatillo.classList.add('col-md-3');
        categoriaPlatillo.textContent = categorias[categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.id = `producto-${id}`;
        inputCantidad.classList.add('form-control');
        inputCantidad.value = 0;

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombrePlatillo);
        row.appendChild(precioPlatillo);
        row.appendChild(categoriaPlatillo);
        row.appendChild(agregar);

        contenido.appendChild(row);
    });
}
