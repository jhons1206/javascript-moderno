const reproductor = {
    cancion: "",
    reproducir: (id) => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log("pausando..."),
    borrar: (id) => console.log(`Borrando canción...${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: playlist => console.log(`Reproduciendo la playlist de ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(40);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Salsa Variada");
reproductor.reproducirPlaylist("Rock Alternativo");