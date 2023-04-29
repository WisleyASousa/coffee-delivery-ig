import { MapPinLine } from "@phosphor-icons/react";
import { Address, AddressContainer, BoxFormAddress, CheckoutContainer, CheckoutSubTitle, City, Complement, DeliveryAddressTitle, FormAddress, Number, State, UF, Zip } from "./styles";


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
              <Zip type="text" id="zip" name="zip" placeholder="CEP*" />
              <Address type="text" id="address" name="address" placeholder="Rua*"/>
              <BoxFormAddress>
                <Number type="text" id="number" name="number" placeholder="Número*"/>
                <Complement type="text" name="complement" placeholder="Complemento" />
              </BoxFormAddress>
              <BoxFormAddress>
                <State type="text" id="state" name="district" placeholder="Bairro*"/>
                <City type="text" id="city" name="city" placeholder="Cidade*"/>
                <UF type="text" id="UF" name="UF" placeholder="UF*"/>
                
              </BoxFormAddress>
              <span>*Obrigatório</span>
            </FormAddress>

        </AddressContainer>

        <div>
          payment
        </div>

      </div>

      <div>

        <CheckoutSubTitle>Cafés selecionados</CheckoutSubTitle>

        <div>
          cart with selected items
          <button type="submit">confirmar pedido</button>
        </div>

      </div>

    </CheckoutContainer>
  )
}