// 1 - type of type guard
function sum(a: number | string, b: number | string) {

    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar a soma!")
    }

}

sum("4", "59")
sum(12, 42.3)
sum("5", 6)

// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }

    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([1, 2, 3])
operations([1, 2, 3], "sum")
operations([2, 4, 8], "multiply")

// 3 - instance of
class User{
    name

    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User{
    constructor(name: string){
        super(name)
    }
}

const raul = new User("Raul")
const cazuza = new SuperUser("Cazuza")

console.log(raul)
console.log(cazuza)

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    }else if(user instanceof User){
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(raul)
userGreeting(cazuza)

// 4 - Operador in
class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name
        if(breed){
            this.breed = breed
        }
    }
}

const liz = new Dog("Liz")
const petunia = new Dog("Petunia", "Chihuahua")

function showDogDetails (dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else{
        console.log("O cachorro é um SRD")
    }
}

showDogDetails(liz)
showDogDetails(petunia)


// Desafio 3
/* Vamos criar uma função que recebe review dos 
usuários, precisamos utilizar o narrowing para receber o dado;
As possibilidades são boolean e number;
Serão enviados números de 1 a 5 (estrelas), prever uma mensagem para cada uma destas notas;
Ou false, que é quando o usuário não deixa uma review, prever um retorno para este caso tbm.
*/

type Review = number | boolean

function showUserReview(review: Review) {

    if(!review) {
        console.log("Você não avaliou o produto!")
        return
    }

    console.log(`A nota que você deu foi: ${review}, obrigado!`)


}

showUserReview(false)
showUserReview(5)
showUserReview(2)