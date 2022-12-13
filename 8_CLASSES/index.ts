// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const bruna = new User()

console.log(bruna)

bruna.name = "Bruna"
//bruna.job = "Student"

// 2 - Constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const maria = new NewUser("Maria", 40)

console.log(maria)

//const joao = new NewUser(12, 12)

// 3 - campos readonly
class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

//fusca.wheels = 5

// 4 - herança e super
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - métodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)

// 6 - this
class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters
class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const brunaFrancisco = new Person("Bruna", "Francisco")

console.log(brunaFrancisco.name)

console.log(brunaFrancisco.fullName)

// 8 - setters
class Coords {
    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso!")
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso!")
    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 0
myCoords.fillY = 10

console.log(myCoords)

console.log(myCoords.getCoords)

// 9 - implements - herança de interface (classe)
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {

    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título é: ${this.title}`
    }

}

const myInterface = new TestingInterface("Hi World")

console.log(myInterface.itemTitle())

// 10 - override de métodos
class Base {
    someMethod() {
        console.log("alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa")

    }

    showName() {

    }

}

const myObject = new Nova()

myObject.someMethod()

// 11 - visibilidade (public)
class C {
    x = 10
}

class D extends C {

}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new C()

console.log(dInstance.x)

// 12 - visibilidade (protected)
class E {
    protected x = 10

    protected protectedMethod() {
        console.log("Esse método é protegido!")
    }
}

class F extends E {

    showX() {
        console.log("X: " + this.x)
    }

    showProtectedMethod() {
        console.log("Esse método é protegido!")
    }
}

const fInstance = new F()

fInstance.showX()

fInstance.showProtectedMethod()

// 13 - visibilidade (private)
class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Método privado")
    }
    showPrivateMethod() {
        this.privateMethod()
    }

}

const pObj = new PrivateClass()

//console.log(pObj.name)

console.log(pObj.showName())

//console.log(pObj.privateMethod)

pObj.showPrivateMethod()

//class TestingPrivate extends PrivateClass {
//    myMethod() {
//       this.privateMethod()
//    }
//}

// 14 - Static members (criar propriedades e métodos estáticos)
class StaticMembers {
    static prop = "Teste static"

    static staticMethod() {
        console.log("Esse é um método estático")
    }
}

console.log(StaticMembers.prop)

StaticMembers.staticMethod()

// 15 - Generic class (classe com tipo genérico)
class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first}`
    }

}

const newItem = new Item("caixa", "surpresa")

console.log(newItem)

console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.first)

// 16 - parameters properties
class ParametersProperties {
    constructor(
        public name: string,
        private qty: number,
        private price: number
    ) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return `Preço: ${this.price}`
    }

}

const newShirt = new ParametersProperties("Camisa", 5, 19.99)

console.log(newShirt.name)

//console.log(newShirt.price)

console.log(newShirt.showPrice)

console.log(newShirt.showQty)

// 17 - class expressions (classe anônima)
const myClass = class <T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Joana")

console.log(pessoa)

console.log(pessoa.name)

// 18 - classe abstrata
abstract class AbstractClass {
    abstract showName(): void
}

//const newObj = new AbstractClass()

class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName() {
        console.log (`O nome é: ${this.name}`)
    }
}

const newAbstractObject = new AbstractExample("Juliana")

newAbstractObject.showName()

// 19 - relações entre classes
class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho)