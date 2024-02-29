/*
let a=6;
console.log(--a);
console.log(a++);
console.log(a++);
console.log(++a);
console.log(--a);
console.log(a--);
console.log(--a);



let a= 6;
let b=2;
 a +=b; // dependiendo lo que queramos suma, resta ,divicion, multiplicacion, solo se cambia el signo 
console.log(a);



//OPERADORES

//comparacion 
let x = 2;
let y = 2;
console.log (x==y);

//desigualdad 
let a = 5;
let b = 7;
console.log (a!=b);

//mayor que 
let c = 5;
let d = 7;
console.log (c>d);

//mayor igual que 
let e = 5;
let f = 7;
console.log (e>=f);

//operador menor igual 
let v=3;
let k=8;
console.log (v<=k);

//operador de identidad 
let g= 2;
let l= '2';
console.log (g===l);




let m = 3;
let o= 3;
console.log ( m!==o);




const hasGirl = true;
const isaCar = true;
const isProgramer = false;

console.log (! (hasGirl || isProgramer));



let num1 = 4;

console.log (num1 <<2);




//operadores especiales (,)

let nameFruits = ['pera', 'apple', 'strawbery'];
nameFruits.push('pañaple')
console.log ( nameFruits.length);

//EJEMPLOS 

let a = 3+4, b=4+4, c=8-2;
console.log (a**= 2 , b, c, a);



//OPERADOR TERNARIO 

let a =73;
let b=30;
let result = a>b? `${a} es mayor que ${b} `: `${a} es menor que ${b}`;
console.log (result);


//realizar un scrit que solicite el año de nacimiento de una persona y determine si es mayor de edad o en caso contrario menor de edad, utulizando el comando promt del navegador.

const date = new Date();

let nameUser = prompt('Ingresa tu nombre:');
let birthday = prompt('Ingresa tu año de nacimiento:');

const edad = date.getFullYear() - birthday;

let mayorEdad =
  edad >= 18 ? `${nameUser} es mayor de edad` : `${nameUser} es menor de edad`;
alert(mayorEdad);



// operador typeof
let a;
const b = 23;
console.log(typeof a);

// dara resultado en consola el tipo de dato de la variable, si no tiene devolvera "undefined"


//operador nullish coalescing
//simpre va haber un valor de respaldo, cuando la variable principal tiene un valor null, aceptamos el valor de respaldo, una ves tebga valor la variable principal, ese valor se agarrara

let clientData = {
  nameClient: ' dalilah',
  bornt: 2004,
  adress: null,
  phoneNumber: '9515679412',
};

let clientDataFinal = {
  nameClient: clientData.nameClient ?? 'demetrio',
  bornt: clientData.bornt ?? 2000,
  adress: clientData.adress ?? 'Domicilio conocido',
  phoneNumber: clientData.phoneNumber ?? '951100000000',
};

console.log(clientDataFinal);



//EJEMPLO 2 

let clientData = {
  nameClient: ' dalilah',
  bornt:'',
  adress: null,
  phoneNumber: '9515679412',
};

let clientDataFinal = {
  nameClient: clientData.nameClient ?? 'demetrio',
  born:
    !clientData.bornt == '' &&      //&& "Y - and"
    !clientData.bornt == null &&
    !clientData == undefined
      ? clientData.bornt
      : 2000,
  adress: clientData.adress ?? 'Domicilio conocido',
  phoneNumber: clientData.phoneNumber ?? '951100000000',
};

console.log(clientDataFinal);



//ARRAY - ARREGLOS

const nameStudents = ['Dalilah ', 'Emmanuel', 'Francisco', 'Gael'];
console.log(nameStudents[0]);



const nameStudents = ['Dalilah ', 'Emmanuel', 'Francisco', 'Gael'];
const number = [12, 34, 45, 78];

const mergeType = [
  'pedro',
  { nombre: 'hugo' },
  function () {
    console.log('hola');
  },
  true,
];
console.log(mergeType);


//REEMPLZAR EL VALOR DE UNA POSICION EN UN ARRAY

let frutsName = ['sandia', 'melon', 'piña', 'fresa'];

console.log(frutsName);
frutsName[0] = 'aguacate';
frutsName[4] = 'mango';
frutsName.push('lemon'); //metodo push es para añadir un elemento al fianl de array
console.log(frutsName);

console.log('el tamaño de mi array es de: ', frutsName.length); //length es para mostrar el tamaño del array



let frutsName = ['sandia', 'melon', 'piña', 'fresa'];

frutsName[0] = 'aguacate';
frutsName[4] = 'mango';
frutsName.push('lemon'); //metodo push es para añadir un elemento al fianl de array

//RECORRIDO DE ARRAYS

for (let i = 0; i < frutsName.length; i++) {
  console.log(frutsName[i]);
}



//RECORRER CON FOR EACH

let frutsName = ['sandia', 'melon', 'piña', 'fresa'];

frutsName[0] = 'aguacate';
frutsName[4] = 'mango';
frutsName.push('sandia'); //metodo push es para añadir un elemento al fianl de array

frutsName.forEach(function (elemento) {
  console.log(elemento);
});

//RECORRER CON FOR EACH con funcion ARROW

frutsName.forEach((elemento) => console.log(elemento));//=> operador flecha



let frutsName = ['sandia', 'melon', 'piña', 'fresa'];

frutsName.pop(frutsName); //metodo pop es para eliminar un elemento del array, el ultimo 

console.log(frutsName);


let frutsName = ['sandia', 'melon', 'piña', 'fresa'];

frutsName.shift(frutsName); //metodo pop es para eliminar un elemento del array, el primero 

console.log(frutsName);


let frutsName = ['sandia', 'melon', 'piña', 'fresa'];
frutsName.unshift('tomate', 'uva'); // unshift (agrega uno o mas elementos al principio del array)
console.log(frutsName);



let frutsName = ['sandia', 'melon', 'piña', 'fresa'];
let indice = frutsName.indexOf('melon'); // indexOf (muestra el lugar del elemento solicitado, funciona como un indice)
console.log(indice);



let frutsName = ['sandia', 'melon', 'piña', 'fresa'];
frutsName.splice (1, 2, 'uva', 'pera'); //remplaza valores 
console.log(frutsName);


let frutsName = ['sandia', 'melon', 'piña', 'fresa'];
let nuevaLista = frutsName.slice(1, 3);
console.log(nuevaLista);

*/
