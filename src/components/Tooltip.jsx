import styled from 'styled-components';

const TextContainer = styled.div`
  visibility: hidden;
  background: rgba(64, 34, 150, 0.3);
  color: ${p=>p.theme.textSecondary};
  text-align: left;
  padding: 1.5em;
  border-radius: 8px;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: -8.5em;
  opacity: 0;
  transition: all 400ms;
  font-size: 14px;
  width: 19em;
  backdrop-filter: blur(3px);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -1em;
    border-width: 1em;
    border-style: solid;
    border-color: rgba(64, 34, 150, 0.4) transparent transparent transparent;
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${TextContainer} {
    visibility: visible;
    opacity: 1;
  }
`;

const GmText = styled.h2`
  font-size: 24px;
  font-weight: normal;
  color: #fff;
`

const DefText = styled.div`
  font-weight: normal;
`

const HorizontalLine = styled.hr`
  border: 0;
  border-top: 1.5px solid #6C64C5;
`;

const Trigger = styled.span`
  transition: color 0.5s;
  color: #9382FC;
  &:hover {
    color: ${p => p.theme.lightHover};
  }
`;

const Tooltip = () => {
  return (
    <TooltipContainer>
      <Trigger>gm!</Trigger>
      <TextContainer>
        <GmText>g•m <span style={{color: '#6C64C5'}}>| giːɛm (GEE-em)</span></GmText>
        <HorizontalLine />
        <DefText>
            1. an abbreviation commonly used as shorthand for "good morning."
            <br />
            2. used as a common greeting within web3 communities
        </DefText>
      </TextContainer>
    </TooltipContainer>
  );
};

export default Tooltip;
