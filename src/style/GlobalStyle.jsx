import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  font-family: ${p => p.theme.font};
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
  background: ${p => p.theme.bg};
  background: radial-gradient(79.35% 79.35% at 50% 100%, rgba(133, 58, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #18191C;
  padding: 0;
  margin: 0;
  color: white;
  
  @media only screen 
  and (max-device-width: 480px) {
    font-size: 12px;
  }
}
h1, h2, h3 {
  margin: 0;
}
h1 {
  font-size: 3.5em;
}
h2 {
  font-size: 2.2em;
}
h3 {
  font-size: 28px;
}
p {
  color: #A89DD9;
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

@keyframes animStar {
  from { transform: translateY(0px) }
  to { transform: translateY(-2000px) }
}
`

export default GlobalStyles;