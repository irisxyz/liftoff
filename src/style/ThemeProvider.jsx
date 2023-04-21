import { ThemeProvider } from 'styled-components'

const PRIMITIVES = {
  primary01: '#FFFFFF',
  primary02: '#CCCED1',
  primary03: '#AAADB3',
  primary04: '#71767B',
  surface01: '#1C1D1F',
  surface02: '#232427',
  primary: '#646cff',
  primaryHover: '#D8FF88',
  secondary: '#7857ED',
}

const theme = {
  color: PRIMITIVES,
  primary: PRIMITIVES.primary,
  primaryHover: PRIMITIVES.primaryHover,
  secondary: PRIMITIVES.secondary,
  text: PRIMITIVES.primary01,
  textSecondary: PRIMITIVES.primary04,
  bg: '#131415',
  font: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
}

const MyThemeProvider = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default MyThemeProvider