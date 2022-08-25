const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

// utilizar el método reduce para sumar todos los elementos
// 21

let dup_arr = arr.map(e => e*2);

let even_arr = arr.filter(e => e%2==0);

let sum_arr = arr.reduce((a,b) => a+b, 0);

console.log(dup_arr, even_arr, sum_arr);