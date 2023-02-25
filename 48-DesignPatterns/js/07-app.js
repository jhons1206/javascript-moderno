// Namespace Pattern

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 15
    },
];

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log('Bienvenidos a nuestro menú');

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);    
        });
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se está preparando y cuesta $${restaurantApp.platillos[id].precio}`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push(nuevo);
    }
}

restaurantApp.funciones.agregarPlatillo('Churro', 10);

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);

restaurantApp.funciones.ordenar(1);