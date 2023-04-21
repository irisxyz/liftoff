import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion as m, AnimatePresence } from 'framer-motion'

import Button from './components/Button'

const Center = styled.div`
  text-align: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const Centered = styled.div`
  max-width: 700px;
`

const AnimationContent = ({ children }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </m.div>
  )
}
AnimationContent.propTypes = {
  children: PropTypes.node
}

function App() {
  const [page, setPage] = useState(0)

  const prevPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const pageDisplay = () => {
    switch(page) {
      case 0:
        return <AnimationContent key="0">
          <h1>gm! it&apos;s time to liftoff.</h1>
          <h1>8 questions.</h1>
          <h1>3 minutes.</h1>
          <h1>Start your web3 journey here.</h1>
          <Button onClick={() => nextPage()}>Start Quiz</Button>
        </AnimationContent>
      case 1:
        return <AnimationContent key="1">
          <h1>What should we call you?</h1>
          novia
          <br/>
          <Button onClick={() => nextPage()}>Next</Button>
        </AnimationContent>
      case 2:
        return <AnimationContent key="2">
          <h2>Welcome Novia! You are embarking on an expedition to discover life in space. Along this journey you make several key decisions, so choose carefully.
          Time to take off for the stars for the adventure of a lifetime.
          </h2>
          <br/>
          <Button onClick={() => nextPage()}>Next</Button>
        </AnimationContent>
      case 3:
        return <AnimationContent key="3">
          <h2>Your primary objective is to investigate life in space life in space. What's your secret secondary objective?</h2>
          <br/>
          <Button onClick={() => nextPage()}>Collecting rare and mesmerizing rock and energy formations</Button>
          <Button onClick={() => nextPage()}>Discover alternative sources of clean energy to bring back to earth </Button>
          <Button onClick={() => nextPage()}>Mining valuable resources from asteroids</Button>
        </AnimationContent>
    }
  }

  return (
    <>
      <div style={{position: 'absolute'}}>
      <Button onClick={() => prevPage()}>back</Button>
      {page}
      <Button onClick={() => nextPage()}>next</Button>
      </div>
      <Center>
        <Centered>
          <AnimatePresence mode="wait">
            {pageDisplay()}
          </AnimatePresence>
        </Centered>
      </Center>
    </>
  )
}

export default App
