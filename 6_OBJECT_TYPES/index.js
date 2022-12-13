"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "bruna@gmail.com", role: "Admin" };
const u2 = { email: "maria@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
coords.leo = 38;
console.log(coords);
const bruna = {
    name: "Bruna",
    age: 28
};
console.log(bruna);
const spiderman = {
    name: "Homem Aranha",
    age: 32,
    superpowers: ["Força Sobre Humana", "Sentido de Aranha"]
};
console.log(spiderman);
console.log(spiderman.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["Maçã", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number []
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5 ,6]
//const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["Bruna", 28];
console.log(anotherUser[0]);
anotherUser[0] = "Maria";
console.log(anotherUser[0]);
//anotherUser[1] = "teste"
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
