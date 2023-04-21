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

const Slide1 = ({ onClick }) => {
  return <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1>gm! it&apos;s time to liftoff.</h1>
    <h1>8 questions.</h1>
    <h1>3 minutes.</h1>
    <h1>Start your web3 journey here.</h1>
    <Button onClick={onClick}>Start Quiz</Button>
  </m.div>
}
Slide1.propTypes = {
  onClick: PropTypes.func
}

const Slide2 = ({ onClick }) => {
  return <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1>What should we call you?</h1>
    novia
    <br/>
    <Button onClick={onClick}>Next</Button>
  </m.div>
}
Slide2.propTypes = {
  onClick: PropTypes.func
}

const Slide3 = ({ onClick }) => {
  return <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Welcome Novia! You are embarking on an expedition to discover life in space. Along this journey you make several key decisions, so choose carefully.
    Time to take off for the stars for the adventure of a lifetime.
    </h2>
    <br/>
    <Button onClick={onClick}>Next</Button>
  </m.div>
}
Slide3.propTypes = {
  onClick: PropTypes.func
}

const Slide4 = ({ onClick }) => {
  return <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2>Your primary objective is to investigate life in space life in space. What's your secret secondary objective?</h2>
    <br/>
    <Button onClick={onClick}>Collecting rare and mesmerizing rock and energy formations</Button>
    <Button onClick={onClick}>Discover alternative sources of clean energy to bring back to earth </Button>
    <Button onClick={onClick}>Mining valuable resources from asteroids</Button>
  </m.div>
}
Slide4.propTypes = {
  onClick: PropTypes.func
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
        return <Slide1 key="0" onClick={() => nextPage()}/>
      case 1: 
        return <Slide2 key="1" onClick={() => nextPage()}/>
      case 2: 
        return <Slide3 key="3" onClick={() => nextPage()}/>
      case 3: 
        return <Slide4 key="4" onClick={() => nextPage()}/>
      case 4: 
        return <Slide4 key="5" onClick={() => nextPage()}/>
      case 5: 
        return <Slide4 key="6" onClick={() => nextPage()}/>
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
