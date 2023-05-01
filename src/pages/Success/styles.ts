import styled from "styled-components";
import { BaseIcon } from "../../components/Header/styles";



export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: start;
  justify-content: center;

  div {
    h3 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 2rem;
      line-height: 1.3;
      padding-top: 5rem;
      margin-bottom: 0.25rem;
      color: ${props => props.theme['yellowDark']};

    }
    p {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${props => props.theme['baseSubtitle']};
    }
    
  }
  
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    /* width: 50%; */
    border: 1px solid ${props => props.theme['yellow'] + '40'};
    border-radius: 6px 36px;
    padding: 2.5rem;
    gap: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      line-height: 1.3;
      color: ${props => props.theme['baseText']};
    
    }

  }

  @media (max-width: 425px) {
    justify-content: center;
    padding: 0 0 !important;
    grid-template-columns: 1fr;
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 0 5rem;
    grid-template-columns: 1fr;
  }
  `

export const BoxPagImg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 4rem;
  }
`
export const IconsMap = styled(BaseIcon)`
  background: ${props => props.theme['purple']};
  color: ${props => props.theme['background']};
`

export const IconsDollar = styled(BaseIcon)`
  background: ${props => props.theme['yellowDark']};
  color: ${props => props.theme['background']};
`