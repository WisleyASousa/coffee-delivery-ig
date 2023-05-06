import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid ${props => props.theme['purpleLight']};
  padding: 1rem;
  
  a {
    text-decoration: none;
  }
  
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
  }

  @media (max-width: 425px){
    flex-direction: column;
    img {
    padding-bottom: .5rem;
    }

    nav {
      gap: 4rem;
    }
  }
  @media (min-width: 768px){
    margin: 0 0;
  }

`

const BtnBase = styled.div `
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
  white-space: nowrap;
  gap: 0.25rem;
  
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
export const CounterBox = styled.div`
  position: relative;
  width: 100%;
`

export const AmountOfItemInCart = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: ${props => props.theme['yellowDark']};
  color: ${props => props.theme['white']};

  position: absolute;
  left: 65px;
  bottom: 25px;


  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.3;

`
export const BtnHome = styled.button`
  background: ${props => props.theme['yellowLight']};
  color: ${props => props.theme['yellowDark']};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    border: 1px solid ${props => props.theme['yellowDark']};
    transition: all .2s ease-out;

  }
  width: 74px;
  height: 38.38px;
  padding: 0.2rem 0.5rem;

`