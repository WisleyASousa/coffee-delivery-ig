import styled from "styled-components";

export const ItemCardContainer = styled.div`
  background: ${props => props.theme['baseCard']};
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

export const TagsName = styled.p`

  padding: 4px 8px;
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

  color: ${props => props.theme['baseLabel'] };

`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4375rem;

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

  }

`