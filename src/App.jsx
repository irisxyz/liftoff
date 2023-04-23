import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion as m, useAnimate, AnimatePresence } from 'framer-motion'

import spaceship from './assets/spaceship.svg'
import Button from './components/Button'

const Background = styled(m.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: url(${spaceship});
  z-index: 0;
  background-size: cover;
`

const StyledCenter = styled.div`
  text-align: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  position: relative;
  overflow: hidden;
`

const Centered = styled.div`
  width: 1000px;
  margin: 6em;
  z-index: 1;
`

const VertCenter = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Buttons = styled.div`
  width: 1000px;
  position: absolute;
  bottom: 6em;
`

const Cta = styled(Button)`
  align-self: center;
  font-size: 20px;
`

const QuestionButton = styled(Button)`
  width: 600px;
  display: block;
  text-align: left;
  margin-bottom: 0.5em;
  font-size: 20px;
`

const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 0.5em;
  font-size: 18px;
  width: 550px;
`


const Center = ({ children, bg }) => {
  const [scope, animate] = useAnimate()
  
  useEffect(() => {
    animate(scope.current, { backgroundColor: bg }, { duration: 0.8, delay: 0.2 })
  }, [bg])

  return (
    <StyledCenter ref={scope}>{children}</StyledCenter>
  )
}
Center.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
}

const AnimationContent = ({ children, key, delay }) => {
  return (
    <m.div
      style={{ height: '100%', textAlign: 'left' }}
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: delay ? 0.3 : 0 }}
    >
      {children}
    </m.div>
  )
}
AnimationContent.propTypes = {
  children: PropTypes.node,
  key: PropTypes.string,
  delay: PropTypes.bool,
}

const Question = ({ question, index, option1, option2, option3, next, delay }) => {
  return <>
    <span>Question {index}/8</span>
    <m.h2
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0, 0.71, 0.2, 1.01], delay: delay ? 1 : 0, }}
    >
      {question}
    </m.h2>
    <Buttons>
      <QuestionButton
        onClick={() => next()}
      >
        {option1}
      </QuestionButton>
      <QuestionButton
        onClick={() => next()}
      >
        {option2}
      </QuestionButton>
      <QuestionButton
        onClick={() => next()}
      >
        {option3}
      </QuestionButton>
    </Buttons>
  </>
}
Question.propTypes = {
  index: PropTypes.string,
  question: PropTypes.string,
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  next: PropTypes.func,
  delay: PropTypes.bool,
}

function App() {
  const [page, setPage] = useState(0)
  const [bg, setBg] = useState('#131415')

  const prevPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  const pageDisplay = () => {
    switch(page) {
      case 0:
        return <AnimationContent key="0" delay>
          <VertCenter>
            <m.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
              }}
            >gm! it&apos;s time to liftoff.</m.h1>
            <br/>
            <br/>
            <m.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}>8 questions.</m.h2>
            <m.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}>3 minutes.</m.h2>
            <m.h2 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
              duration: 0.8,
              delay: 0.45,
              }}
              style={{ textAlign: 'center' }}
            >Start your web3 <br/>journey here.</m.h2>
            <br/>
            <br/>
            <br/>
            <Cta onClick={() => nextPage()}>Start Quiz</Cta>
          </VertCenter>
        </AnimationContent>
      case 1:
        return <AnimationContent key="1">
          <VertCenter>
            <div style={{ textAlign: 'left' }}>
            <span>let’s personalize your journey.</span>
            <h1>What should we call you?</h1>
            </div>
            <br/>
            <Input/>
            <br/>
            <br/>
            <Cta onClick={() => nextPage()}>Next</Cta>
          </VertCenter>
        </AnimationContent>
      case 2:
        return <AnimationContent key="2">
          <VertCenter>
            <h2>Welcome Novia! You are embarking on an expedition to discover life in space. Along this journey you make several key decisions, so choose carefully.</h2>
            <br/>
            <Cta onClick={() => nextPage()}>Next</Cta>
          </VertCenter>
        </AnimationContent>
      case 3:
        return <AnimationContent key="3" delay>
          <Question
            index="1"
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
            index="2"
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
            index="3"
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
            index="4"
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
            index="5"
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
            index="6"
            question="The anomaly corrupts your ships logs and changes them to gibberish! What's your first course of action?"
            option1="Generate music from the distorted logs and make a soundtrack"
            option2="Use AI to find patterns in the gibberish"
            option3="Preserve the gibberish as an artifact so that museums can display it"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 9:
        return <AnimationContent key="9">
          <Question
            index="7"
            question="Oh no! The anomaly causes your ship’s navigation system to go haywire and throws you off course. What do you do?"
            option1="Offer the anomaly money to stop messing with your ship"
            option2="Connect with mission control and fellow astronauts for support and guidance"
            option3="Have the crew vote on whether to let the anomaly take you to its destination"
            next={() => nextPage()}
          />
        </AnimationContent>
      case 10:
        return <AnimationContent key="10">
          <Question
            index="8"
            question="Your tactics work and you safely return to Earth as a hero! What do you do with your newfound fame?"
            option1="Use the attention to raise awareness about the importance of empowerment of other sentient beings"
            option2="Go back to space with a team of experts to investigate what intelligence and technology can be gathered from the anomaly"
            option3="Find and invest in companies that specialize in anomalies as anomalies are the future"
            next={() => nextPage()}
          />
        </AnimationContent>
    }
  }

  useEffect(() => {
    if (page < 3) {
      setBg('#131415')
    }
    if (page === 3) {
      setBg('#5134C5')
    }
  }, [page, setBg])

  return (
    <>
      <Center bg={bg}>
        <AnimatePresence>
          {page > 2 && <Background
            initial={{ opacity: 0, scale: 6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 6 }}
            transition={{ delay: 0.2, duration: 1 }}
          />}
        </AnimatePresence>
        <Centered>
          <AnimatePresence mode="wait">
            {pageDisplay()}
          </AnimatePresence>
        </Centered>
      </Center>
      <div style={{position: 'absolute', top: 0}}>
      <Button onClick={() => prevPage()}>back</Button>
      {page}
      <Button onClick={() => nextPage()}>next</Button>
      </div>
    </>
  )
}

export default App
