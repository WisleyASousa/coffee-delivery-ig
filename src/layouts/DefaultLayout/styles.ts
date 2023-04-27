import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 5rem;
  }
  @media (max-width: 425px) {
    padding: 0.5rem;
  }
`