// Cotizador de Criptomonedas

const criptomonedasSelect = document.querySelector('#criptomonedas')

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
})

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => console.log(resultado.Data) )
}