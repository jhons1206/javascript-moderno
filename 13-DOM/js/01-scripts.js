let elemento;




elemento = document;
elemento = document.all; // Método .all deprecado (En desuso)
// elemento = document.querySelectorAll("*"); // Reemplazo al método .all
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links;
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;


console.log(elemento);