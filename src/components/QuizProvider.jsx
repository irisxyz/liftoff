import { createContext, useContext, useState } from 'react'

const Context = createContext('');

export default function useQuiz() {
    return useContext(Context)
}

function mostFrequent(array) {
    var map = array.map(function(a) {
        return array.filter(function(b) {
            return a === b;
        }).length;
    });

    return array[map.indexOf(Math.max.apply(null, map))];
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

  const getPersonality = () => {
    return mostFrequent(chosen)
  }

  return (
    <Context.Provider value={{addChoice, removeChoice, getPersonality}}>
        {children}
    </Context.Provider>
  );
}