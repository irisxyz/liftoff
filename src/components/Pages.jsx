import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { AnimatePresence, motion as m } from 'framer-motion'

import Button from './Button'
import useQuiz from './QuizProvider'

import q1_asteroids from '../assets/q1_asteroids_selected.svg'
import q1_energy from '../assets/q1_energy_selected.svg'
import q1_rarerock from '../assets/q1_rarerock_selected.svg'
import q2_gem from '../assets/q2_gem_selected.svg'
import q2_nametag from '../assets/q2_nametag_selected.svg'
import q2_notebook from '../assets/q2_notebook_selected.svg'
import q3_camera from '../assets/q3_camera_selected.svg'
import q3_phone from '../assets/q3_phone_selected.svg'
import q3_seeds from '../assets/q3_seeds_selected.svg'
import q4_calc from '../assets/q4_calculator_selected.svg'
import q4_notebook from '../assets/q4_notebook_selected.svg'
import q5_cake from '../assets/q5_cakencookie_selected.svg'
import q5_shroom from '../assets/q5_mushroom_selected.svg'
import q5_serum from '../assets/q5_serum_selected.svg'
import q6_ai from '../assets/q6_ai_selected.svg'
import q6_artifact from '../assets/q6_artifact_selected.svg'
import q6_music from '../assets/q6_music_selected.svg'
import q7_ballot from '../assets/q7_ballot_selected.svg'
import q7_connect from '../assets/q7_connect_selected.svg'
import q7_money from '../assets/q7_money_selected.svg'
import q8_awareness from '../assets/q8_awareness_selected.svg'
import q8_invest from '../assets/q8_invest_selected.svg'
import q8_return from '../assets/q8_return_selected.svg'
import modal from '../assets/modal.svg'
import modal2 from '../assets/modal2.svg'
import content from '../assets/content.svg'
import d_q4 from '../assets/d_q4.svg'
import twitter from '../assets/twitter.svg'


const VertCenter = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Cta = styled(Button)`
  align-self: center;
  font-size: 20px;
`

const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 0.5em;
  font-size: 18px;
  width: 550px;
`

const Images = styled(m.div)`
  margin: 2em 0;
`

const Image = styled(m.img)`
    max-height: 300px;
    max-width: 300px;
    margin: 0 1em;
`

const Illustration = styled(m.img)`
    max-height: 300px;
    margin: 0 2em;
`

const Buttons = styled.div`
  width: 1000px;
  position: absolute;
  bottom: 6em;
`

const QuestionButton = styled(Button)`
  width: 600px;
  display: block;
  text-align: left;
  margin-bottom: 0.5em;
  font-size: 20px;
`

const Text = styled.div`
  max-width: 600px;
  font-size: 18px;
`

const Columns = styled.div`
  display: flex;
  align-items: center;
`

const H4 = styled.h4`
  color: ${p=>p.theme.textSecondary};
  text-transform: uppercase;
`

const P = styled.p`
    font-size: 24px;
    margin: 0;
`

const Modal = styled.a`
    font-size: 18px;
    text-decoration: none;
    padding: 1em 2em;
    margin: 0.5em;
    border-radius: 8px;
    color: white;
    background: #25137E;
    box-shadow: 1px 2px 22px rgba(26, 16, 72, 1);
    transition: all 200ms;
    display: flex;
    gap: 0.5em;
    align-items: center;
    :hover {
        background: #1C0C66;
        text-decoration: none;
    }
`

const AnimationContent = ({ children, myKey, delay }) => {
    return (
        <m.div
            style={{ height: '100%', textAlign: 'left' }}
            key={myKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: delay ? 0.2 : 0 }}
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


const Question = ({
  question,
  index,
  option1,
  option2,
  option3,
  person1,
  person2,
  person3,
  next,
  delay,
  children
}) => {
  const { addChoice } = useQuiz()
  const handleOption = (option) => {
    addChoice(option)
    next()
  }
    return <>
        <span>Question {index}/8</span>
        <m.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0, 0.71, 0.2, 1.01], delay: delay ? 1 : 0, }}
        >
            {question}
        </m.h2>
        <Images>
            {children}
        </Images>
        <Buttons>
            <QuestionButton
              onClick={() => handleOption(person1)}
            >
            {option1}
            </QuestionButton>
            <QuestionButton
              onClick={() => handleOption(person2)}
            >
            {option2}
            </QuestionButton>
            <QuestionButton
              onClick={() => handleOption(person3)}
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
    person1: PropTypes.string,
    person2: PropTypes.string,
    person3: PropTypes.string,
    next: PropTypes.func,
    delay: PropTypes.bool,
    children: PropTypes.node,
}

const Pages = ({ page, nextPage }) => {  
  const [name, setName] = useState('')
  const { getPersonality } = useQuiz()

    const pages = () => {
        switch(page) {
            case 0:
              return <AnimationContent myKey="0" delay>
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
              return <AnimationContent myKey="1">
                <VertCenter>
                  <div style={{ textAlign: 'left' }}>
                  <span>let’s get to know each other.</span>
                  <h1>What should we call you?</h1>
                  </div>
                  <br/>
                  <Input onChange={(e) => setName(e.target.value)} onKeyDown={(e) => {if (name && e.key === 'Enter') nextPage()}}/>
                  <br/>
                  <br/>
                  <Cta onClick={() => {if (name) nextPage()}}>Next</Cta>
                </VertCenter>
              </AnimationContent>
            case 2:
              return <AnimationContent myKey="2">
                <VertCenter>
                  <h2>Welcome {name}! You are embarking on an expedition to discover life in space. Along this journey you make several key decisions, so choose carefully.</h2>
                  <br/>
                  <Cta onClick={() => nextPage()}>Next</Cta>
                </VertCenter>
              </AnimationContent>
            case 3:
              return <AnimationContent myKey="3" delay>
                <Question
                  index="1"
                  question="Your primary objective is to investigate life in space. What's your secret secondary objective?"
                  option1="Collecting rare and mesmerizing rock and energy formations"
                  option2="Discover alternative sources of clean energy to bring back to earth"
                  option3="Mining valuable resources from asteroids"
                  person1='collector'
                  person2='disruptor'
                  person3='investor'
                  next={() => nextPage()}
                >
                    <Image src={q1_rarerock} />
                    <Image src={q1_energy} />
                    <Image src={q1_asteroids} />
                </Question>
              </AnimationContent>
            case 4:
              return <AnimationContent myKey="4">
                <Question
                  index="2"
                  question="What are you bringing with you?"
                  option1="A variety of rare and expensive metals to use to trade with extraterrestrial life"
                  option2="A journal to record the unique characteristics and behaviors of each life form you encounter"
                  option3="A social relations expert and translator to interact with extraterrestrial life"
                  person1='investor'
                  person2='collector'
                  person3='advocate'
                  next={() => nextPage()}
                >
                    <Image src={q2_gem} />
                    <Image src={q2_notebook} />
                    <Image src={q2_nametag} />
                </Question>
              </AnimationContent>
            case 5:
              return <AnimationContent myKey="5">
                <Question
                  index="3"
                  question="You have extra space in your bag. What do you grab?"
                  option1="Your phone so you can tweet progress reports to your followers "
                  option2="A camera to capture breathtaking photos of cosmic phenomena"
                  option3="Organic seeds for growing your own crops in space"
                  person1='socialite'
                  person2='creator'
                  person3='disruptor'
                  next={() => nextPage()}
                >
                    <Image src={q3_phone} />
                    <Image src={q3_camera} />
                    <Image src={q3_seeds} />
                </Question>
              </AnimationContent>
            case 6:
              return <AnimationContent myKey="6">
                <Question
                  index="4"
                  question="Your spacecraft encounters a mysterious anomaly in deep space! What do you do?"
                  option1="Pull out your notebook to quickly capture the anomaly's form"
                  option2="Take a selfie and post it to ask your followers for guidance"
                  option3="Calculate the risk to reward ratio of welcoming the anomaly onboard your ship"
                  person1='creator'
                  person2='socialite'
                  person3='investor'
                  next={() => nextPage()}
                >
                    <Image src={q4_notebook} />
                    <Image src={q3_phone} />
                    <Image src={q4_calc} />
                </Question>
              </AnimationContent>
            case 7:
              return <AnimationContent myKey="7">
                <Question
                  index="5"
                  question="The anomaly is hungry. What do you feed it?"
                  option1="You want the anomaly to be your friend, so cookies and cake"
                  option2="Iridescent mushrooms that cause the anomaly to illuminate fluorescent patterns in space"
                  option3="Truth serum, so you can figure out exactly what the anomaly wants"
                  person1='socialite'
                  person2='creator'
                  person3='advocate'
                  next={() => nextPage()}
                >
                    <Image src={q5_cake} />
                    <Image src={q5_shroom} />
                    <Image src={q5_serum} />
                  </Question>
              </AnimationContent>
            case 8:
              return <AnimationContent myKey="8">
                <Question
                  index="6"
                  question="The anomaly corrupts your ships logs and changes them to gibberish! What's your first course of action?"
                  option1="Generate music from the distorted logs and make a soundtrack"
                  option2="Use AI to find patterns in the gibberish"
                  option3="Preserve the gibberish as an artifact so that museums can display it"
                  person1='creator'
                  person2='disruptor'
                  person3='collector'
                  next={() => nextPage()}
                >
                    <Image src={q6_music} />
                    <Image src={q6_ai} />
                    <Image src={q6_artifact} />
                  </Question>
              </AnimationContent>
            case 9:
              return <AnimationContent myKey="9">
                <Question
                  index="7"
                  question="Oh no! The anomaly causes your ship’s navigation system to go haywire and throws you off course. What do you do?"
                  option1="Offer the anomaly money to stop messing with your ship"
                  option2="Connect with mission control and fellow astronauts for support and guidance"
                  option3="Have the crew vote on whether to let the anomaly take you to its destination"
                  person1='investor'
                  person2='socialite'
                  person3='advocate'
                  next={() => nextPage()}
                >
                    <Image src={q7_money} />
                    <Image src={q7_connect} />
                    <Image src={q7_ballot} />
                  </Question>
              </AnimationContent>
            case 10:
              return <AnimationContent myKey="10">
                <Question
                  index="8"
                  question="Your tactics work and you safely return to Earth as a hero! What do you do with your newfound fame?"
                  option1="Use the attention to raise awareness about the importance of empowerment of other sentient beings"
                  option2="Go back to space with a team of experts to investigate what intelligence and technology can be gathered from the anomaly"
                  option3="Find and invest in companies that specialize in anomalies as anomalies are the future"
                  person1='advocate'
                  person2='disruptor'
                  person3='investor'
                  next={() => nextPage()}
                >
                    <Image src={q8_awareness} />
                    <Image src={q8_return} />
                    <Image src={q8_invest} />
                  </Question>
              </AnimationContent>
            case 11:
                return <AnimationContent myKey="11">
                  <br/>
                  <br/>
                  <Columns>
                    <Text>
                      <h1>Congrats {name}! You completed the adventure.</h1>
                      <p>
                        You prepared for your journey to space and saved the crew from an
                        anomaly, becoming a hero in the process.
                      </p> 
                      <p>
                        The world of web3 is vast and ever-expanding, just like space. We know
                        that figuring out what web3 is and learning key concepts is difficult. 
                      </p>
                      <p>
                        Through your completion of this personality test, we will help guide you. 
                        Using your answers, we’re able to show you one of six potential web3 
                        “personalities” or niches that suits your interests and passions.
                      </p>
                      <p>
                        This quiz is just the start!
                      </p>
                    </Text>
                    <img src={q2_gem} style={{height: '420px'}}/>
                  </Columns>
                  <br/>
                  <m.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    <h2>Are you ready to find out your results?</h2>
                    <br/>
                    <Button onClick={() => nextPage()}>Heck yea!</Button>
                  </m.div>
                </AnimationContent>
            case 12: 
                return <AnimationContent myKey="12">
                  {/* {getPersonality()} */}
                    <m.img
                        src={content}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.6, x: 0 }}
                        transition={{ duration: 0.5 }}
                        width="1200px"
                    />
                    <div style={{position: 'absolute', top: '100px', left: '100px', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <m.img
                        style={{ position: 'absolute', cursor: 'pointer' }}
                        src={modal}
                        initial={{ opacity: 0, x: -200, y: -100 }}
                        animate={{ opacity: 1, x: -100, y: -100 }}
                        transition={{ delay: 1, duration: 1 }}
                        onClick={() => nextPage()}
                    />
                    </div>
                </AnimationContent>
            case 13: 
                return <AnimationContent myKey="13">
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        marginTop: '6em',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        }}>
                        <img src={q2_gem} height="300px"/>
                        <h1>{name}, you're a Trailblazer!</h1>
                        <br/>
                        <P>You completed the Liftoff web3 personality quiz!</P>
                        <P>Congrats on being one of the first 🎉</P>
                        <p>Stay tuned for more.</p>
                        <Modal href="https://twitter.com/liftoff_quest" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} height="20px"/>
                            @liftoff_quest
                        </Modal>
                    </div>
                </AnimationContent>
        }
    }

    return (
        <AnimatePresence mode="wait">
            {pages()}
        </AnimatePresence>
    )
    
}
Pages.propTypes = {
    page: PropTypes.number,
    nextPage: PropTypes.func,
}

export default Pages