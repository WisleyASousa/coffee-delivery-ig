import styled from "styled-components";


export const SidebarContainer = styled.div`
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
  animation: slideIn 0.5s forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }




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