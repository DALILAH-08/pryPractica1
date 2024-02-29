/*
let count = 0;
while (count <= 5) {
  console.log('count');
  count++;
}
*/

//Elavorar un scriot que permita mostrar la tabla de multiplicar de un numero determinado

let count = 1;
const tableNumber = 6;
let resultTable = `La tabla del ${tableNumber} es : \n`;

while (count <= 10) {
  resultTable += `${tableNumber} * ${count} = ${tableNumber * count}`;
  count++;
}

console.log(resultTable);
