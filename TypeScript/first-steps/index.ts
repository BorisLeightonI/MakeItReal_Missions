/* let str = 'un string';
str = 5; */ // Coherción implícita de JS

let str:string = 'un string';

console.log('-----Coherción implícita------');
let str2:any = 'un string';
console.log(typeof str2);
str2 = 5;
console.log(typeof str2);

let str3: string|number = 'un string';
console.log(typeof str3);
str3 = 5; 
console.log(typeof str3);

console.log('------Funciones-------');

function hello(name: string, age?: number): string {
  return `Hola soy ${name} y tengo ${age} años`;
}

console.log(hello('un string', 10));
console.log(hello('un string'), 'para marcar el uso de ?');

function secondHello(obj: {name: string, age?: number}): string {
  return `Hola soy ${obj.name} y tengo ${obj.age} años`;
}

type Person = {
  name: string,
  age: number
}

function thirdHello(obj: Person): string {
  return `Hola soy ${obj.name} y tengo ${obj.age} años`;
}

console.log('-----Arreglos-----');

const arr: number[] = [1,2,3];
const arr2: Array<number> = [1,2,3]; /* Genéricos */
const arr3: (string|number)[] = [1,2,''];
const people: Person[] = [ {name:'', age: 1}, {name:'', age: 1}, {name:'', age: 1}, {name:'', age: 1} ]
