import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { 
  Address, 
  AddressContainer, 
  BoxFormAddress, 
  CheckoutContainer, 
  CheckoutSubTitle, 
  City, 
  Complement, 
  DeliveryAddressTitle, 
  DeliveryPayTitle, 
  FormAddress, 
  Number, 
  PaymentsContainer, 
  RadioContainer, 
  SelectedCoffeesContainer, 
  State, 
  UF, 
  Zip 
} from "./styles";
import { ListSelectedCoffees } from "../../components/ListSelectedCoffees";


export function Checkout() {

  return (
    <CheckoutContainer>

      <div>

        <CheckoutSubTitle>Complete seu pedido</CheckoutSubTitle>

        <AddressContainer>

          <div>
            <MapPinLine size={22} />
            <DeliveryAddressTitle>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </DeliveryAddressTitle>
          </div>


            <FormAddress>
              <Zip 
                type="text" 
                id="zip" 
                name="zip" 
                placeholder="CEP*" 
              />
              <Address 
                type="text" 
                id="address" 
                name="address" 
                placeholder="Rua*"
              />

              <BoxFormAddress>
                <Number 
                  type="text" 
                  id="number" 
                  name="number" 
                  placeholder="Número*"
                />
                <Complement 
                  type="text" 
                  name="complement" 
                  placeholder="Complemento" 
                />
              </BoxFormAddress>
              <BoxFormAddress>
                <State 
                  type="text" 
                  id="state" 
                  name="district" 
                  placeholder="Bairro*"
                />
                <City 
                  type="text" 
                  id="city" 
                  name="city" 
                  placeholder="Cidade*"
                />
                <UF 
                  type="text" 
                  id="UF" 
                  name="UF" 
                  placeholder="UF*"
                />
                
              </BoxFormAddress>
              <span>*Obrigatório</span>
            </FormAddress>

        </AddressContainer>

        <PaymentsContainer>
          <div>
            <CurrencyDollar size={22} />
            <DeliveryPayTitle>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </DeliveryPayTitle>
          </div>

          <RadioContainer>
            
              <input 
                type="radio" 
                name="options" 
                id="credit" 
                autoComplete="off" 
              />
              <label  
                htmlFor="credit">
                <CreditCard size={16} />
                Cartão de crédito
              </label>
            
            
              <input 
                type="radio" 
                name="options" 
                id="debt" 
                autoComplete="off" 
              />
              <label 
                htmlFor="debt">
                <Bank size={16} />
                cartão de débito
              </label>
            
            
              <input 
                type="radio" 
                name="options" 
                id="money" 
                autoComplete="off" 
              />
              <label 
                htmlFor="money">
                <Money size={16} />
                dinheiro
              </label>
            

          </RadioContainer>

        </PaymentsContainer>

      </div>

      <div>

        <CheckoutSubTitle>Cafés selecionados</CheckoutSubTitle>

        <SelectedCoffeesContainer>
          <ListSelectedCoffees />
          <button type="submit">confirmar pedido</button>
        </SelectedCoffeesContainer>

      </div>

    </CheckoutContainer>
  )
}