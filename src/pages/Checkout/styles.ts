
import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 425px) {
    justify-content: center;
    padding: 0 0 !important;
    grid-template-columns: 1fr;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 0 5rem;
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

  @media (max-width: 425px) {
    text-align: center;
  }
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
  &:focus {
    border: 1px solid ${props => props.theme['yellowDark']};
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

// Payments

export const PaymentsContainer = styled(AddressContainer)`
  margin-top: 12px;
  svg {
    color: ${props => props.theme['purple']};
  }
`

export const DeliveryPayTitle = styled(DeliveryAddressTitle)`
  
`

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  white-space: nowrap;

  @media (max-width: 425px) {
    flex-direction: column;
  }

  label {
    color: ${props => props.theme['baseText']};
    cursor: pointer;
    width: 100%;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: ${props => props.theme['baseButton']};
    border-radius: 6px;
    gap: 0.75rem;

    &:hover {
      background: ${props => props.theme['baseHover']};
      transition: all .2s ease-out;  
    }

    @media (max-width: 425px) {
      justify-content: start;
      padding-right: 3rem;
    }
    
  }

  input[type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
  input[type="radio"]:checked + label {
    border-color: ${props => props.theme['purple']};
    background: ${props => props.theme['purpleLight']};

  }
`

// selected coffees

export const SelectedCoffeesContainerf = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;
  background: ${props => props.theme['baseCard']};
  border-radius: 6px 44px;

`

export const BoxValues = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`


const BaseBoxValues = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`

export const BaseIndividualValues = styled(BaseBoxValues)`
  color: ${props => props.theme['baseText']};
  font-size: 0.875rem;
  line-height: 1.3;
`
export const BaseValuesTotal = styled(BaseBoxValues)`
  font-weight: 700;
  color: ${props => props.theme['baseSubtitle']};
  font-size: 1.25rem;
  line-height: 1.3;
`
export const BtnConfirmOrder= styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem 0.5rem;
  background: ${props => props.theme['yellow']};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all .2s ease-out;  


  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;
  text-transform: uppercase;
  color: ${props => props.theme['white']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
 
  &:not(:disabled):hover {
    background: ${props => props.theme['yellowDark']};
  }

`