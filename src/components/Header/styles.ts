import styled from "styled-components";

// import imgbackground from '../../assets/Background.png'

export const HeaderContainer = styled.header `
  width: 100%;
  display: flex;
  padding: 3rem 0;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  /* background-image: url('../../assets/Background.png');
  background-repeat: no-repeat;
  background-size: cover; */


  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    color: ${props => props.theme['baseTitle']};
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['baseSubtitle']};

  }

  
  ul {
    list-style-type: none;

    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    align-items: start;
    gap: 1.25rem;

    li {
      display: flex;
      gap: 0.75rem;
      
    }

  }
`

export const TextHeader = styled.div `
  display: flex;
      flex-direction: column;
      gap: 4.125rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  span {
    color: ${props => props.theme['baseText']};
    line-height: 1.3;
    
    display: flex;
    align-items: center;
  }
    
`

const BaseIcon = styled.div `
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 9990px;
`
export const IconsCart = styled(BaseIcon)`
  background: ${props => props.theme['yellowDark']};
  color: ${props => props.theme['background']};
`
export const Iconsbox = styled(BaseIcon)`
  background: ${props => props.theme['baseText']};
  color: ${props => props.theme['background']};
`
export const IconsTimer = styled(BaseIcon)`
  background: ${props => props.theme['yellow']};
  color: ${props => props.theme['background']};
`
export const IconsCoffee = styled(BaseIcon)`
  background: ${props => props.theme['purple']};
  color: ${props => props.theme['background']};
`