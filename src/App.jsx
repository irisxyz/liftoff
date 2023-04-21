import { useState } from 'react'
import styled from 'styled-components'

import Button from './components/Button'

const Center = styled.div`
  text-align: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const Centered = styled.div`
`

const Slide1 = () => {
  return <>
    <h1>gm! it&apos;s time to liftoff.</h1>
    <h1>8 questions.</h1>
    <h1>3 minutes.</h1>
    <h1>Start your web3 journey here.</h1>
    <Button>Start Quiz</Button>
  </>
}

function App() {
  const [page, setCount] = useState(0)

  return (
    <Center>
      <Centered>
        <Slide1/>
      </Centered>
    </Center>
  )
}

export default App
