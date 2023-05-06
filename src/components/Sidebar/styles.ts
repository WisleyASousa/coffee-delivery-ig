import styled, { css, keyframes } from "styled-components";

interface SidebarProps {
  show: boolean;
}

const inAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const outAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100px);
  }
`;

export const SidebarContainer = styled.div<SidebarProps>`
  position: absolute;
  position: fixed;
  right: 0;
  padding: 0.8rem;
  width: 350px;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background: ${props => props.theme['baseCard']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid ${props => props.theme['yellowDark']};
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-name: ${props => (props.show ? outAnimation : inAnimation)};



  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.3;
  }

  @media (max-width: 425px) {
    width: 280px;
    align-items: center;
    
  }

`


export const BoxTitleBtnSidebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    color: ${props => props.theme['baseLabel']};
    cursor: pointer;

    &:hover{
      color: ${props => props.theme['baseSubtitle']};
    }
  }
  @media (max-width: 425px) {
    width: 280px;
    display: flex;
    
    padding: 0 1rem;

    button{
      display: flex;
    }
    
  }

`

export const ItemListBoxSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const BtnSidebar = styled.button`

  
  display: flex;
  padding: 0.2rem 0.5rem;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 6px;
  background: ${props => props.theme['yellow']};
  color: ${props => props.theme['white']}; 
  cursor: pointer;

  svg {
    animation: spin 1s alternate;
  }
  

  
  
@keyframes spin {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  &:hover {
    background: ${props => props.theme['yellowDark']};
    transform: rotate(360deg);  

  }
  @media (max-width: 425px) {

  }

`