import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    a {
      

    }
  }

`

export const BtnBase = styled.a `
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
`

export const BtnLocation = styled(BtnBase) `
  background: ${props => props.theme['purpleLight']};
  
  color: ${props => props.theme['purpleDark']}


`
export const BtnCart = styled(BtnBase) `
  background: ${props => props.theme['yellowLight']};
  color: ${props => props.theme['yellowDark']};

`