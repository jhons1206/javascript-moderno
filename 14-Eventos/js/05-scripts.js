window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log(ubicacion);

    if(ubicacion.top < 748) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aun no, da más scroll');
    }
})