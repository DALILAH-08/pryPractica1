/*
//EJERCICIO 1.- Realiza una suma de un array de enteros utilizando el metodo reduceRight (), ciclo for y forEach

//REDUCERIGHT

let ArrayEnteros1 = [10, 20, 80];
let sumaEnterosReduceRight = ArrayEnteros1.reduceRight(
  (total, valorActual) => total + valorActual,
  0,
);
console.log(sumaEnterosReduceRight);

//FOR

let Enteros = [10, 20, 80];
let sumaEnteros = 0;
for (let i = 0; i < Enteros.length; i++) {
  sumaEnteros += Enteros[i];
}
console.log(sumaEnteros);

//FOREACH

let ArrayEntero = [10, 20, 80];
let SumaEnterosForEach = 0;

ArrayEntero.forEach(function (element) {
  SumaEnterosForEach += element;
});

console.log(SumaEnterosForEach);

*/

/*
EJERCICO 2.- Dado un areglo de numeros enteros positivos y negativos, utilicen el metodo Mathmax() y el operador
de programacion, para encontrar el numero mayor
*/

let NumerosPosNeg = [1, -8, 5, 8, 9, 89];
let NumeroValMax = Math.max(...NumerosPosNeg);
console.log(`el numero mayor es:  ${NumeroValMax}`);

/*





//EJERCICO 3.- Dado un arreglo de numeros de 10 estudiantes, usar el metodo filter()para filtar unicamente los nombres con una de las letras en especifico

let LetraNombre = 'D';
let Alumnos = ['Dalilah', 'Daniela', 'Daniel', 'DOnato', 'Raul'];
let AlumnoNombreFilter = Alumnos.filter((Alumnos) =>
  Alumnos.startsWith(LetraNombre),
);

console.log(
  `Los nombres de los alumnos con inicial "D" son : `,
  AlumnoNombreFilter,
);

/*
//EJERCICO 4.- Dado un array de un numero entero positivo, determinar el total de numeros pares existentes

let Numeros = [9, 10, 5, 7, 8, 4, 2];
function NumerosPares(Numeros) {
  let i = 0;
  for (let num of Numeros) {
    if (num % 2 == 0) {
      i++;
    }
  }
  return i;
}
let totalPares = NumerosPares(Numeros);
console.log('El total de numeros pares en el array es:', totalPares);
*/
