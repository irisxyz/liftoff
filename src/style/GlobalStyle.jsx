import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
html,
body {
  height: 100%;
  font-size: 14px;
  background: #101113;
  padding: 0;
  margin: 0;
  color: white;
}
h1, h2 {
  margin: 0;
}
h1 {
  font-size: 48px;
}
h2 {
  font-size: 36px;
}
a {
  color: ${p => p.theme.primary};
  text-decoration: none;
  
  text-decoration: underline rgba(187, 237, 85, 0);
  transition: text-decoration-color 200ms;
  text-underline-offset: 2px;
  
  &:hover {
    text-decoration: underline rgba(187, 237, 85, 1);
  }
}
`

export default GlobalStyles;