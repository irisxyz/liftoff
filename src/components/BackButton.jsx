import styled from 'styled-components'

import Button from './Button'
import useQuiz from './QuizProvider'

const StyledButton = styled(Button)`
  display: flex;
  z-index: 10;
  position: fixed;
  top: 1em;
  left: 1em;
  margin-top: 0.5em;
  margin-left: 0.5em;
  padding: 1.2em 2.5em;
`

const BackButton = ({ page, prevPage }) => {
  const { removeChoice } = useQuiz()
  const handleClick = () => {
    if (page > 2 && page < 11) {
      removeChoice()      
    }
    prevPage()
  }
  return (
    <div>
      {page > 0 && <StyledButton onClick={() => handleClick()}>&larr;</StyledButton>}
    </div>
  )
}

export default BackButton