"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.584848;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Bruna";
console.log(firstName.toUpperCase());
let fullName;
let lastName = "Francisco";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
let ann = "Teste";
let inf = "Teste";
//ann = 1
//inf = 1
console.log("Testando 3");
/* Desafio 2 - Crie uma variável que recebe um número
 converta esse número para string em uma nova variável
 esta variável de conversão deve estar tipada por inferência
 Imprima esse número em uma string maior, utilizando o recurso de
 template strings ou concatenação
*/
const n1 = 10;
const numberToString = n1.toString();
const printMyNumber = `Eu vou imprimir o número ${numberToString}`;
console.log(printMyNumber);
