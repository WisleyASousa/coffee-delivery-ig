import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid ${props => props.theme['purpleLight']};

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 425px){
    flex-direction: column;

    nav {
      gap: 4rem;
    }
  }
  @media (min-width: 768px){
    margin: 0 0;
  }

`

export const BtnBase = styled.a `
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  
  
`

export const BtnLocation = styled(BtnBase) `
  background: ${props => props.theme['purpleLight']};
  color: ${props => props.theme['purpleDark']};


  &:hover {
    border: 1px solid ${props => props.theme['purpleDark']};
    transition: all .2s ease-out;


  }

`
export const BtnCart = styled(BtnBase) `
  background: ${props => props.theme['yellowLight']};
  color: ${props => props.theme['yellowDark']};
  &:hover {
    border: 1px solid ${props => props.theme['yellowDark']};
    transition: all .2s ease-out;

  }


`