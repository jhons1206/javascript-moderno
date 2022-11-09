const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo("JavaScript", "Node.js");

// Cuando le pasas un parámetro a los Arrow Functions los paréntesis no son necesarios (opcional)
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2("HTML5", "CSS3"));