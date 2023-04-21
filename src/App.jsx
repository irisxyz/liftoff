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
`

const Slide1 = ({ onClick }) => {
  return <m.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
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
        return <Slide1 onClick={() => nextPage()}/>
    }
  }

  return (
    <Center>
      <Centered>
        <Button onClick={() => prevPage()}>back</Button>
        <Button onClick={() => nextPage()}>next</Button>
        <AnimatePresence >
        {page}
        {pageDisplay()}
        </AnimatePresence>
      </Centered>
    </Center>
  )
}

export default App
