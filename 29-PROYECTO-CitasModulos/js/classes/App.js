// Importamos funciones
import { datosCita, nuevaCita } from '../funciones.js';

// Importamos selectores
import { 
    mascotaInput, 
    propietarioInput, 
    telefonoInput, 
    fechaInput, 
    horaInput, 
    sintomasInput, 
    formulario 
} from '../selectores.js';

export class App {

    constructor() {
        this.initApp();
    }

    // Método
    initApp() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);

        // Formulario para nuevas citas
        formulario.addEventListener('submit', nuevaCita);

    }
}