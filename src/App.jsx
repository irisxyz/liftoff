import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Analytics } from '@vercel/analytics/react'
import { motion as m, useAnimate, useAnimation, AnimatePresence } from 'framer-motion'

import stars from './assets/stars.svg'
import spaceship from './assets/spaceship.svg'
import bottom from './assets/bottom.svg'
import grain from './assets/grain.png'
import {QuizProvider} from './components/QuizProvider'
import BackButton from './components/BackButton'
import Button from './components/Button'
import Pages from './components/Pages'
import useQuiz from './components/QuizProvider'
import Stars from './components/Stars'

const Background = styled(m.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: url(${spaceship});
  z-index: 0;
  background-size: cover;
  background-position: center;
`

const Foreground = styled(m.img)`
  min-width: 100vw;
  position: absolute;
  bottom: 0;
  z-index: 1;
`

const Stars2 = styled(m.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: url(${stars});
  background-size: 100vh;
  z-index: 0;
`

const Grain = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: url(${grain});
  background-size: 100px;
  mix-blend-mode: overlay;
  z-index: 2;
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
  margin: 7em;
  z-index: 10;
`

const BetaIconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 1.5em;
  width: 3em;
  justify-content: center;
  border-radius: 1.5em;
  border: 2px solid #3986FC;
  padding: 0.5em 1.5em;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #242F72;
  position: fixed;
  top: 1em;
  right: 1em;
  margin-top: 0.5em;
  margin-right: 0.5em;
`;

const BetaText = styled.span`
  display: inline-block;
  transform-origin: center;
  color: #3986FC;
`;

const Beta = () => {
  return (
    <BetaIconWrapper>
      <BetaText>BETA</BetaText>
    </BetaIconWrapper>
  )
}

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

function App() {
  const [page, setPage] = useState(0)
  const [bg, setBg] = useState('#131415')
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;
  const ref = useRef();
  
  const showBg = () => ((page > 2 && page < 11) || (page > 12))

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;
      const parallaxFactor = 55;
      const x = (clientX - element.offsetLeft - element.offsetWidth / 2) / parallaxFactor;
      const y = (clientY - element.offsetTop - element.offsetHeight / 2) / parallaxFactor;
      setPoint({ x, y});
    };

    window.addEventListener("mousemove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, [showBg()]);

  const prevPage = () => {
    setPage(page - 1)
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    if (page < 3) {
      setBg('#131415')
    }
    if (page === 3) {
      setBg('#160F66')
    }
    if (page > 10) {
      setBg('#0B0C3F')
    }
    if (page > 12) {
      setBg('#160F66')
    }
  }, [page, setBg])

  return (
    <QuizProvider>
      <Center bg={bg}>
        <Grain />
        <Stars
          id="starss"
          style={{
            transform: `translate(${x}px, ${y}px)`,
          }}
         />
        <AnimatePresence mode="wait">
          {showBg() && <Background
            key="background"
            initial={{ opacity: 0, scale: 6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 6 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
           />}
          {showBg()  && <Foreground
            key="foreground"
            src={bottom}
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 600 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          />}
        </AnimatePresence>
        <Centered>
          <Pages page={page} nextPage={nextPage} />
        </Centered>
      </Center>
      <BackButton page={page} prevPage={prevPage} />
      <Beta />
      <Analytics/>
    </QuizProvider>
  )
}

export default App
