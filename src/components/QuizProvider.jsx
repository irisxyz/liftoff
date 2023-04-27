import { createContext, useContext, useState } from 'react'

const Context = createContext('');

export default function useQuiz() {
    return useContext(Context)
}

export function QuizProvider({ children }) {
  const [chosen, setChosen] = useState([])

  const addChoice = (personality) => {
    const newChosen = [...chosen]
    newChosen.push(personality)
    console.log(newChosen)
    setChosen(newChosen)
  }

  const removeChoice = () => {
    const newChosen = [...chosen]
    newChosen.pop()
    console.log(newChosen)
    setChosen(newChosen)
  }

  return (
    <Context.Provider value={{addChoice, removeChoice}}>
        {children}
    </Context.Provider>
  );
}