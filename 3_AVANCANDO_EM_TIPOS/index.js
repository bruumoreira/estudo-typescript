"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
//numbers = "teste"
const nomes = ["Bruna", "Maria"];
//nomes.push(4)
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
//nums.push("teste")
console.log(nums[5]);
// 3 - O tipo any
const arr1 = [1, "teste", true, [], { nome: "Bruna" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma("a", "b")
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Bruna"));
// 6 - função anônima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//passCoordinates({nome: 1, sobrenome: 2})
const pessoaObj = { nome: "Bruna", surname: "Francisco" };
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
//showNumbers(6)
// 9 - validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Bruna", "Francisco"));
console.log(advancedGreeting("Maria"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
//showBalance(true)
const arr2 = [1, "teste", true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "Bruna", age: 28 };
console.log(somePerson);
//type personType = {
//    age: number
//}
// 15 - Literal types
let test;
test = "testando";
console.log(test);
function showDirections(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirections("left");
//showDirections("top")
// 16 - Non-Null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - Bigint
let n;
//n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB); // valores
console.log(symbolA === symbolB); // tipos
