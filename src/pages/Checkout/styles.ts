import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
export const CheckoutSubTitle = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${props => props.theme['baseSubtitle']};
  padding-top: 2.5rem;
  padding-bottom: 1rem;
`

export const AddressContainer = styled.div`
  width: 100%;
  
  background: ${props => props.theme['baseCard']};
  border-radius: 6px;
  padding: 2.5rem;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  svg {
    color: ${props => props.theme['yellowDark']};
  }
  div {
    display: flex;
    gap: 8px;

  }
  
  `
export const DeliveryAddressTitle = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;


    p:nth-child(1) {
      line-height: 1.3;
      color: ${props => props.theme['baseSubtitle']};
      margin-bottom: -4px;
    }

    p:nth-child(2) {
      line-height: 1.3;
      font-size: 0.875rem;
      color: ${props => props.theme['baseText']};
    }
`

export const FormAddressContainer = styled.div`

`
export const FormAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${props => props.theme['baseLabel']};
  }
  @media (max-width: 425px) {
    flex-direction: column;
    width: 100% !important;
  }
`

const baseInputAddress = styled.input`
  padding: 0.75rem;
  background: ${props => props.theme['baseInput']};
  border: 1px solid ${props => props.theme['baseButton']};
  border-radius: 4px;

  &::placeholder {
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${props => props.theme['baseLabel']};

  }
  @media (max-width: 425px) {
    flex-direction: column;
    width: 100% !important;
  }
  
`
export const Zip = styled(baseInputAddress)`
  width: 40%;
`
export const Address = styled(baseInputAddress)`
  display: flex;
  flex: 1;
`
export const Number = styled(baseInputAddress)`
  width: 40%;
`
export const Complement = styled(baseInputAddress)`
  display: flex;
  flex: 1;
`
export const State = styled(baseInputAddress)`
  width: 60%;
`
export const City = styled(baseInputAddress)`
  display: flex;
  flex: 1;
`
export const UF = styled(baseInputAddress)`
  width: 15%;
`
export const BoxFormAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`