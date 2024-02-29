/*

let num = 20;
if (num === 2) {
  console.log('Son iguales ');
}
console.log('Haz llegado al final de la sentencia');


//GETDATE

let currentDay = new Date().getDay();

const days = {
  domingo: 0,
  lunes: 1,
  Martes: 2,
  Miercoles: 3,
  jueves: 4,
  viernes: 5,
  sabado: 6,
};

if (days.Martes === currentDay) {
  console.log('Echale ganas mijo aun no acaba la semana');
}

//Desarrollar un script que imprima en orden desendente de tres numeros dados



//TRABAJOOOOO

let a = 78;
let b = 11;
let c = 12;

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
}
else if (a>b){
    console.log (c,a,b);

}



let a = 78;
let b = 11;
let c = 12;

const arrayNumeros = [a, b, c];
const arrayOrdenado = arrayNumeros.sort((a, b) => b - a);//sort ordena de mayor o amenor o menor a mayor 
console.log(arrayOrdenado.join(','));

*/
