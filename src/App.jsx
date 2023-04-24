import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion as m, useAnimate, AnimatePresence } from 'framer-motion'

import spaceship from './assets/spaceship.svg'
import bottom from './assets/bottom.svg'
import Button from './components/Button'
import Pages from './components/Pages'

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
  z-index: 1;
`

const BackButton = styled(Button)`
  z-index: 10;
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

function App() {
  const [page, setPage] = useState(0)
  const [bg, setBg] = useState('#131415')

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
      setBg('#090B5C')
    }
    if (page > 11) {
      setBg('#39375D')
    }
    if (page > 13) {
      setBg('#160F66')
    }
  }, [page, setBg])

  return (
    <>
      <Center bg={bg}>
        <AnimatePresence mode="wait">
          {((page > 2 && page < 11) || (page > 13)) && <Background
            key="background"
            initial={{ opacity: 0, scale: 6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 6 }}
            transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
          />}
          {((page > 2 && page < 11) || (page > 13))  && <Foreground
            key="foreground"
            src={bottom}
            initial={{ opacity: 0, y: 600 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 600 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          />}
        </AnimatePresence>
        <Centered>
          <Pages page={page} nextPage={nextPage}/>
        </Centered>
      </Center>
      <div style={{position: 'absolute', top: '1em', left: '1em' }}>
      {(page > 0 && page < 14) && <BackButton onClick={() => prevPage()}>&larr;</BackButton>}
      </div>
    </>
  )
}

export default App
