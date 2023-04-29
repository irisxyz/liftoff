import styled from 'styled-components'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const multipleBoxShadow = (n) => {
  let boxShadow = ''
  for(let i = 0; i < n; i++){
      boxShadow += `${getRandomInt(2000)}px ${getRandomInt(2000)}px #FFF, `
  }
  return boxShadow.slice(0, -2)
}

const Span = styled.div`
  width: ${p=>p.size || 1}px;
  height: ${p=>p.size || 1}px;
  background: transparent;
  border-radius: 100%;
  box-shadow: ${p=>multipleBoxShadow(p.count || 300)};
  animation: animStar ${p=>p.timing || 100}s linear infinite;
`

const Stars = () => {
  return <>
    <Span count={500} size={1} timing={130} />
    <Span count={100} size={2} timing={160}  />
    <Span count={40} size={3} timing={220}  />
  </>
}

export default Stars