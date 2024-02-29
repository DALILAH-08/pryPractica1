/**
 * 
 * // metodo led 

let signo_zodiacal ="capricornio";
let MesDeNacimiento = "Enero";

console.log (signo_zodiacal);
console.log (MesDeNacimiento);



//scode de var, tiene un alcance global 
function varTest (){
    var x=31;
    if (true){
        var x=56;
        console.log (x);
    }
    console.log (x);
} 
varTest();
//por el ambito que utiliza var tomara el valor de la ultima variable, porque global, ambito de funcion pero no de bloque 



function ejemploAmbitoVar() {
    if (true){
        let x = 23 ;
    }
    console.log(x);
    
}
ejemploAmbitoVar ();





const  v = 6 ;


function constEjemplo () {
    const v = 5 ;
    if (true){
        const v=70;
        console.log(v);
    }
    console.log(v);
    
}
console.log(v);

constEjemplo();




let admin;
let nameUser; 

nameUser= "Jhon";
admin= nameUser;

console.log (admin)

* 


let nombre = prompt('introduce tu nombre ');
console.log('tu nombre es:', nombre);


//MATRICES
let matrix = [
  [1, 56, 34, 23, 67],
  [10, 560, 11, 230, 670],
  [45, 46, 47, 48, 49],
];
console.log(matrix[1][2]);

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}


let matrix = [
  [1, 56, 34, 23, 67],
  [10, 560, 11, 230, 670],
  [45, 46, 47, 48, 49],
];

matrix.forEach((fila) => fila.forEach((columna) => console.log(columna)));

//FOROF

let matrix = [
  [1, 56, 34, 23, 67],
  [10, 560, 11, 230, 670],
  [45, 46, 47, 48, 49],
];

for (let fila of matrix) {
  for (let columna of fila) {
    console.log(columna);
  }
}



//COLECCIONES CON CLAVE
//MAP Y SET

let miMapa = new Map();
//agregar elementos al mapa
miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'jasmines 203');
console.log(miMapa.get('adress'));


miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'jasmines 203');

miMapa.forEach((elementos, clave) => {
  console, log(`${clave}:${elementos}`);
});


//RECORRIDO CON FOR OF
let miMapa = new Map();
//agregar elementos al mapa
miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'jasmines 203');

for (let [clave, valor] of miMapa) {
  console, log(`${clave}:${elementos}`);
}



//RECORRIDO CON FOR VALUES

let miMapa = new Map();
miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'jasmines 203');

for (let valor of miMapa.values()) {
  console.log(valor);
}


//SET

const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add('elemento3');
objSet.forEach((elementos) => { //FOREACH PARA NO REPETIR 
  console.log(elementos);
});

*/
const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add('elemento3');

for (let valor of objSet) {
  console.log(valor);
}
