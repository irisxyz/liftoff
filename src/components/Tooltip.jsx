import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TextContainer = styled.div`
  visibility: hidden;
  background-color: #DED9FF;
  color: #000000;
  text-align: left;
  padding: 0.5em;
  border-radius: 3px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  margin-left: -6em;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
  width: 17em;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 0.7em;
    border-style: solid;
    border-color: #DED9FF transparent transparent transparent;
  }
`;

const GmText = styled.span`
  font-size: 14px;
  color: #5A46D3;
`

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1.5px solid #5A46D3;
`;

const Trigger = styled.span`
  &:hover + ${TextContainer} {
    visibility: visible;
    opacity: 1;
  }
  &:hover {
    color: ${p => p.theme.lightHover};
  }
`;

const Tooltip = () => {
  return (
    <TooltipContainer>
      <Trigger>gm!</Trigger>
      <TextContainer>
        <GmText>g•m <span style={{color: '#867FB1'}}>| giːɛm (GEE-em) |</span></GmText>
        <HorizontalLine />
        <div>
            1. an abbreviation commonly used as shorthand for "good morning."
            <br />
            2. used as a common greeting within web3 communities
        </div>
      </TextContainer>
    </TooltipContainer>
  );
};

export default Tooltip;
