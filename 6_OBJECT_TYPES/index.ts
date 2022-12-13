// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 129.99, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {email: "bruna@gmail.com", role: "Admin"}
const u2:User = {email: "maria@gmail.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - propriedades readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15
coords.leo = 38

console.log(coords)

//coords.z = "teste"

// 5 - extending interfaces (herança)
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const bruna: Human = {
    name: "Bruna",
    age: 28
}

console.log(bruna)

const spiderman: SuperHuman = {
    name: "Homem Aranha",
    age: 32,
    superpowers: ["Força Sobre Humana", "Sentido de Aranha"]
}
console.log(spiderman)

console.log(spiderman.superpowers[1])

// 6 - intersection types (une duas interfaces)
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

//myArray[3] = "Teste"

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number]

// number []

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
//const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5 ,6]
//const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Bruna", 28]

console.log(anotherUser[0])

anotherUser[0] = "Maria"

console.log(anotherUser[0])

//anotherUser[1] = "teste"


// 9 - tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])