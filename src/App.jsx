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

const QuestionButton = styled(Button)`
  width: 500px;
  display: block;
  text-align: left;
  margin-bottom: 0.5em;
`

const AnimationContent = ({ children, key }) => {
  return (
    <m.div
      key={key}
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
  children: PropTypes.node,
  key: PropTypes.string,
}

const Question = ({ question, option1, option2, option3, next }) => {
  return <>
    <h2>{question}</h2>
    <QuestionButton onClick={() => next()}>{option1}</QuestionButton>
    <QuestionButton onClick={() => next()}>{option2}</QuestionButton>
    <QuestionButton onClick={() => next()}>{option3}</QuestionButton>
  </>
}
Question.propTypes = {
  question: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  next: PropTypes.func,
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
          <Question
            question="Your primary objective is to investigate life in space life in space. What's your secret secondary objective?"
            option1="Collecting rare and mesmerizing rock and energy formations"
            option2="Discover alternative sources of clean energy to bring back to earth"
            option3="Mining valuable resources from asteroids"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 4:
        return <AnimationContent key="4">
          <Question
            question="What are you bringing with you?"
            option1="A variety of rare and expensive metals to use to trade with extraterrestrial life"
            option2="A journal to record the unique characteristics and behaviors of each life form you encounter"
            option3="A social relations expert and translator to interact with extraterrestrial life"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 5:
        return <AnimationContent key="5">
          <Question
            question="You have extra space in your bag. What do you grab?"
            option1="Your phone so you can tweet progress reports to your followers "
            option2="A camera to capture breathtaking photos of cosmic phenomena"
            option3="Organic seeds for growing your own crops in space"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 6:
        return <AnimationContent key="6">
          <Question
            question="Your spacecraft encounters a mysterious anomaly in deep space! What do you do?"
            option1="Pull out your notebook to quickly capture the anomaly's form"
            option2="Take a selfie and post it to ask your followers for guidance"
            option3="Calculate the risk to reward ratio of welcoming the anomaly onboard your ship"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 7:
        return <AnimationContent key="7">
          <Question
            question="The anomaly is hungry. What do you feed it?"
            option1="You want the anomaly to be your friend, so cookies and cake"
            option2="Iridescent mushrooms that cause the anomaly to illuminate fluorescent patterns in space"
            option3="Truth serum, so you can figure out exactly what the anomaly wants"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 8:
        return <AnimationContent key="8">
          <Question
            question=" The anomaly corrupts your ships logs and changes them to gibberish! What's your first course of action?"
            option1="Generate music from the distorted logs and make a soundtrack"
            option2="Use AI to find patterns in the gibberish"
            option3="Preserve the gibberish as an artifact so that museums can display it"
            next={() => nextPage()}
          />
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
