const reproductor = {
    reproducir: function(id) { // Método de propiedad
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log("pausando...");
    },
    borrar: function(id) {
        console.log(`Borrando canción...${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(playlist) {
        console.log(`Reproduciendo la playlist de ${playlist}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();


// reproductor.borrar = function(id) {
//     console.log(`Borrando canción...${id}`);
// }

reproductor.borrar(30);
reproductor.crearPlaylist("Salsa Variada");
reproductor.reproducirPlaylist("Rock Alternativo");