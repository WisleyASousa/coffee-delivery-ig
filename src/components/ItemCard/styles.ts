import styled from "styled-components";

export const ItemCardContainer = styled.div`
  
  background: ${props => props.theme['baseCard']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  `
export const ImgContainer = styled.div`
  /* position: absolute; */

  img {
    /* position: absolute; */
    width: 120px;
    height: 120px;
    left: calc(50% - 120px/2);
    /* top: -70px; */
  }  
`
export const BoxTags = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const TagsName = styled.p`
  
  padding: 8px 8px;
  background: ${props => props.theme['yellowLight']};
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.625rem;
  color: ${props => props.theme['yellowDark'] };
  line-height: 1.3;
  text-transform: uppercase;


`
export const ItemTitle = styled.p`
  padding-top: 1rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;

  

  color: ${props => props.theme['baseSubtitle'] };
`
export const ItemDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  text-align: center;
  padding-top: 0.5rem;
  padding: 0 1.25rem;
  margin-top: 0.5rem;
  color: ${props => props.theme['baseLabel'] };

`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4375rem;
  margin-top: 33px;
  padding-bottom: 1.25rem;

  p {
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.theme['baseText'] } !important;


    span{
      font-size: 0.875rem !important;
      line-height: 1.3;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;

    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

`
export const QuantityToBuy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  height: 2.375rem;
  background: ${props => props.theme['baseButton']};

  padding: 8px;
  gap: 4px;
  border-radius: 6px;

  span {
    color: ${props => props.theme['baseTitle']};
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: ${props => props.theme['baseButton']};
    cursor: pointer;
    svg {
      color: ${props => props.theme['purple']};
      &:hover {
        color: ${props => props.theme['purpleDark']};
        transition: all .2s ease-out;

      }
    }

  }
`

export const ButtonCart = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid transparent;
  background: ${props => props.theme['purpleDark']};
  color: ${props => props.theme['baseCard']};
  transition: all .2s ease-out;

  &:hover {
      background: ${props => props.theme['purple']}; 
    }
`

export const WarningBox = styled.div`
  position: relative;
  left: -12px;

  animation: identifier 0.5s ease-in-out;
  

  @keyframes identifier {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  div {
    position: absolute;
    top:-20px;
    left: 21px;
    color: ${props => props.theme['red']};
    
  }

  div {
    position: absolute;
    top:-20px;
    left: 21px;
    color: ${props => props.theme['red']};
    
  }
  p {
    display: flex;
    align-items: center;
    background: ${props => props.theme['red']};
    color: ${props => props.theme['white']};
    padding: 0.75rem;
    border-radius: 10px;
    font-weight: 700;
    left: -20px;
    top: 5px;
    position: absolute;

    button {
      background: inherit;
      border: none;
      color: inherit;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
      
  }
  }	
`


export const BoxWarningAddInCart = styled.div`
  border: 1px solid ${props => props.theme['yellowDark']};
  border-radius: 10px;
  padding: 1rem 0.8rem;
  position: absolute;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: slideIn 0.5s forwards;



  @keyframes slideIn {
  from {
    transform: translateY(-50%)scale(0.8);
  }
  to {
    transform: translateY(-50)scale(1);
  }
  }


  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 1.3;
  font-size: 1.3rem;
  background: ${props => props.theme['red']};
  color: ${props => props.theme['white']};
  gap: 0.5rem;


`
