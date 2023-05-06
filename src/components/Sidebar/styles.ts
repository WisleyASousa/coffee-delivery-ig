import styled, { css, keyframes } from "styled-components";

interface SidebarContainerProps {
  isOpen: boolean;
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

export const SidebarContainer = styled.div<SidebarContainerProps>`
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
  animation: ${inAnimation} 0.5s ease-in-out;
  ${props => props.isOpen && css`
    animation: ${outAnimation} 0.5s ease-in-out;
  `}


  h3 {
    text-align: center;
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.3;
  }

  @media (max-width: 425px) {
    width: 280px;
    align-items: center;
    
  }
/* 
  @keyframes in {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  } */
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

  &:hover {
    background: ${props => props.theme['yellowDark']};
    transition: all .2s ease-out;  

  }
  @media (max-width: 425px) {

  }

`