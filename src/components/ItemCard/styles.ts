import styled from "styled-components";
import { BtnBase } from "../Navbar/styles";

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

export const ButtonCart = styled(BtnBase)`
  background: ${props => props.theme['purpleDark']};
  color: ${props => props.theme['baseCard']};
  transition: all .2s ease-out;

  &:hover {
      background: ${props => props.theme['purple']}; 
    }
`