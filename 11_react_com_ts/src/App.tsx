import React, {createContext} from "react"

// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent"

// 5 - desestruturando props
import SegundComponent from "./components/SegundComponent"
import Destructuring, {Category} from "./components/Destructuring"

// 6 - useState
import State from "./components/State"

// 11 - utilizando contexto
import Context from "./components/Context"

// 9 - type
type textOrNull = string | null

type fixed = "Isso" | "Ou" | "Aquilo"

// 10 - context (transmitir dados entre componentes no React)
interface IAppContext {
  language: string,
  framework: string,
  projects: number,
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = "Bruna"
  const age: number = 28
  const isWorking: boolean = false

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 9 - type
  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  //mySecondText = "opa"

  const testandoFixed: fixed = "Isso"

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <p> Não está trabalhando!</p>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent/>
        <SegundComponent name="Segundo"/>
        <Destructuring 
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
          />
        <Destructuring 
        title="Segundo post"
        content="Mais outro conteúdo"
        commentsQty={5}
        tags={["python"]}
        category={Category.P}
        />
        <State/>
        {myText && 
        <p>Tem texto na variável</p>}
        {mySecondText && 
        <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
