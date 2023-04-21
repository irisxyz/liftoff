import style from 'styled-components'

const StyledButton = style.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  font-size: 1em;
  cursor: pointer;
  background: ${p => p.theme.primary};
  font-family: ${p => p.theme.font};
  color: ${p => p.theme.text};
  padding: 0.75em 1.5em;
  border-radius: 10px;
  transition: all 350ms;
  :hover {
    background: ${p => p.theme.primaryHover};
  }
`

export default StyledButton