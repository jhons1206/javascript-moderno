const diaHoy = new Date(); // Date es un objeto

moment.locale('es');

console.log( moment().format('MMMM D YYYY h:mm:ss a') );


console.log( moment().format('LLLL', diaHoy) );


console.log( moment().add(3, 'days').calendar() );