import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    padding-top: .5rem;
    padding-bottom: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: .5rem 0;

    a {
      

    }
  }

  @media (max-width: 425px){
    flex-direction: column;
    nav {
      gap: 4rem;
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
  border: 1px solid transparent;
  
`

export const BtnLocation = styled(BtnBase) `
  background: ${props => props.theme['purpleLight']};
  color: ${props => props.theme['purpleDark']};


  &:hover {
    border: 1px solid ${props => props.theme['purpleDark']};
    transition: all 3s ease-in;

  }

`
export const BtnCart = styled(BtnBase) `
  background: ${props => props.theme['yellowLight']};
  color: ${props => props.theme['yellowDark']};
  &:hover {
    border: 1px solid ${props => props.theme['yellowDark']};
  }


`