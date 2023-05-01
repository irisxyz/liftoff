import { ThemeProvider } from 'styled-components'

const PRIMITIVES = {
  primary01: '#FFFFFF',
  primary02: '#CCCED1',
  primary03: '#AAADB3',
  primary04: '#A89DD9',
  surface01: '#1C1D1F',
  surface02: '#232427',
  primary: '#2E1D98',
  primaryHover: '#4830DE',
  secondary: '#7857ED',
}

const theme = {
  color: PRIMITIVES,
  primary: PRIMITIVES.primary,
  primaryHover: PRIMITIVES.primaryHover,
  lightHover: '#D1D0FF',
  secondary: PRIMITIVES.secondary,
  text: PRIMITIVES.primary01,
  textSecondary: PRIMITIVES.primary04,
  bg: '#131415',
  font: 'Switzer, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
}

const MyThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default MyThemeProvider