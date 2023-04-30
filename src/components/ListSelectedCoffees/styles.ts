import styled from "styled-components";

export const ListSelectedCoffeesLine = styled.div`
  width: 100%;
  border: 1px solid ${props => props.theme['baseButton']};

`

export const ListSelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  width: 100%;


`
export const ActionBoxSelected = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

`

export const ItemPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
  line-height: 1.3;
  color: ${props => props.theme['baseSubtitle']};

  span{
    font-weight: 700;
    color: ${props => props.theme['baseText']};
    white-space: nowrap;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ItemRemoveBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['baseButton']};
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 6px;
    span{
      color: ${props => props.theme['baseTitle']};
    }
  }

`

const BtnBaseChecked = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    color: ${props => props.theme['purple']};
    &:hover {
      color: ${props => props.theme['purpleDark']};
      transition: all .2s ease-out;
    }
  }
`

export const BtnAmount = styled(BtnBaseChecked)`
`
export const BtnRemove = styled(BtnBaseChecked)`
  background: ${props => props.theme['baseButton']};
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['baseText']};

  &:hover {
    background: ${props => props.theme['baseHover']};
    transition: all .2s ease-out;  

    svg{
      color: ${props => props.theme['purpleDark']};

    }
  }
`
