// Mediator Pattern

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Crear objetos
const jhon = new Comprador('Jhon');
const danny = new Comprador('Danny');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

// Registro de usuarios y vendedor a la sala de subasta - Mediator
subasta.registrar(jhon);
subasta.registrar(danny);
subasta.registrar(vendedor);

vendedor.oferta('Ford Territory', 1500);

jhon.oferta(350, jhon);
danny.oferta(500, danny);
jhon.oferta(650, jhon);
danny.oferta(900, danny);

vendedor.vendido('Danny');