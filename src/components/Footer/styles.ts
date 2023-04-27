import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${props => props.theme['purpleLight']};

  position: fixed;
  bottom: 0;
  width: 85%;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;
    font-size: .75rem;
    padding: 1rem 0;
    
}
`