const aprendiendo = function() {
    console.log("Aprendiendo JavaScript");
}

// Los Arrow Functions cuando tienen una función con una sola línea:
// - Las llaves no son necesarias, por lo tanto se eliminan
// - Dan por implicito el return, por lo que no es necesario colocar el console.log
const aprendiendo2 = () => "Aprendiendo JavaScript";

console.log(aprendiendo2());