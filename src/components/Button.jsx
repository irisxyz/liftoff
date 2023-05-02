import style from 'styled-components'

const StyledButton = style.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  font-size: 1em;
  cursor: pointer;
  font-family: ${p => p.theme.font};
  color: white;
  padding: 0.75em 1.5em;
  border-radius: 10px;
  transition: all 350ms;
  background: radial-gradient(117.35% 117.35% at 50.38% 96.94%, rgba(165, 95, 255, 0.4) 0%, rgba(146, 129, 255, 0) 100%), #451DB7;
  border: 1px solid #723BE7;
  transition: all 400ms;
  :hover {
    background: radial-gradient(117.35% 117.35% at 50.38% 96.94%, rgba(160, 116, 255, 0.4) 0%, rgba(146, 129, 255, 0) 100%), #6D1ED2;
    border: 1px solid #913BE7;
    box-shadow: 0px 0px 16px #8232C0;
  }
`

export default StyledButton