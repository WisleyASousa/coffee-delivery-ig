import styled from "styled-components";

export const HomeContainer = styled.main`
  h3 {
    padding: 2rem 0 3.375rem 0;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    font-size: 2rem;
    color: ${props => props.theme['baseSubtitle']};
    font-weight: 800;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`


export const MenuContainer = styled.div`
  width: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 1439px) {
    justify-content: center;
  }
`