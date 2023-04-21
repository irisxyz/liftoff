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
  padding: 0.5em 1em;
  border-radius: 6px;
  transition: all 200ms;
  :hover {
    background: ${p => p.theme.primaryHover};
  }
`

export default StyledButton