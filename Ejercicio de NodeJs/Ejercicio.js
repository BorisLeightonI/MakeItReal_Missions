/* Utilizar la librería faker para generar 1000 nombres falsos y utilizar el módulo fs para crear un archivo de texto y guardar los 1000 nombres.

Imprimir en consola un mensaje para avisar al usuario que el proceso ha terminado satisfactoriamente o con un error.

Bonus: Crear otro proyecto y utilizar ES6 Modules. */

// import {faker} from '@faker-js/faker';
const {faker} = require('@faker-js/faker');
const fs = require('fs');

faker.setLocale('es');

let n = 10;
const names = [];

for (let i = 0; i < n; i++) {
    names.push(faker.name.fullName());
}

console.log(names);

fs.writeFile('./test.txt', names.toString(), (err)=>{
    if(err) return console.log(err);
    console.log('Archivo Escrito');
});