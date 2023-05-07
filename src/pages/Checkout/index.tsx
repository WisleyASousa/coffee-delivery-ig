import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { 
  Address, 
  AddressContainer, 
  BaseIndividualValues, 
  BaseValuesTotal, 
  BoxFormAddress, 
  BoxValues, 
  BtnConfirmOrder, 
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
  SelectedCoffeesContainerf, 
  State, 
  UF, 
  Zip 
} from "./styles";

import { ListSelectedCoffees } from "../../components/ListSelectedCoffees";
import { useCart } from "../../contexts/ListCartContext";
import { useForm } from "react-hook-form"; 
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { itemForCartDate } from "../Home";


interface NewOrderFormData {
  zip: number;
  address: string;
  number: number;
  district: string;
  city: string;
  UF: string;
  complement: string;
}

interface orderData {
  id: string;
  zip: number;
  address: string;
  number: number;
  district: string;
  city: string;
  UF: string;
  complement: string;
  items: itemForCartDate[];
  totalPrice: string;
  totalPriceFrete: string;
}

type FieldValues = Partial<NewOrderFormData>;

const newOrderFormValidationSchema = zod.object({
  // zip: zod.number().min(8, "CEP inválido").max(8, "CEP inválido"),
  // address: zod.string().min(3, "Endereço inválido").max(50, "Endereço inválido"),
  // number: zod.number().min(1, "Número inválido").max(10, "Número inválido"),
  // district: zod.string().min(3, "Bairro inválido").max(50, "Bairro inválido"),
  // city: zod.string().min(3, "Cidade inválida").max(50, "Cidade inválida"),
  // UF: zod.string().min(2, "UF inválido").max(2, "UF inválido"),
  // complement: zod.string().min(0).max(50, "Complemento inválido"),
  // payment: zod.boolean().refine((value) => value === true, { message: "Selecione uma forma de pagamento" })
});

export function Checkout() {
  const { itemsForCart, formattedTotalPrice, formattedTotalPriceFrete, deleteItem, addAmountItemCart, removeAmountItemCart } = useCart();

        //um objeto com os valores do formulário
        // register retorna uma função que recebe o nome do campo e retorna um objeto com várias propriedades
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newOrderFormValidationSchema),
    

  });
  const [confirmedOrder, setConfirmedOrder] = useState<orderData[]>([]);

  const makingNewOrder = async (data: NewOrderFormData) => {
    // event?.preventDefault();
    console.log(data)
    
    const newOrder: orderData = {
      id: uuidv4(),
      zip: data.zip,
      address: data.address,
      number: data.number,
      district: data.district,
      city: data.city,
      UF: data.UF,
      complement: data.complement,
      items: itemsForCart,
      totalPrice: formattedTotalPrice,
      totalPriceFrete: formattedTotalPriceFrete,
    }
    setConfirmedOrder([...confirmedOrder, newOrder])
    console.log(newOrder)

    // console.log(confirmedOrder)
    // if (confirmedOrder.length > 0) {
    //   window.location.href = "/Success";
    // }
    // window.location.href = "/Success";
  }

  // console.log(confirmedOrder)
  
  // const watchOptions = watch("options");
  const zip = watch("zip");
  const address = watch("address");
  const number = watch("number");
  const district = watch("district");
  const city = watch("city");
  const UFs = watch("UFs");




  return (
    <CheckoutContainer onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await handleSubmit(async (data: FieldValues) => await makingNewOrder(data as NewOrderFormData))(e);
    }} action="">

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
                type="number" 
                id="zip" 
                minLength={8}
                pattern={"/[0-9]{8}/g"}
                maxLength={8}
                placeholder="CEP*"
                {...register("zip")}
              />
              
              <Address 
                type="text" 
                id="address" 
                minLength={3}
                maxLength={50}
                placeholder="Rua*"
                {...register("address")}
              />

              <BoxFormAddress>
                <Number 
                  type="number" 
                  id="number" 
                  minLength={1}
                  maxLength={10}
                  placeholder="Número*"
                  {...register("number")}

                />
                <Complement 
                  type="text" 
                  minLength={0}
                  maxLength={50}
                  id="complement" 
                  placeholder="Complemento" 
                  {...register("complement")}
                />
              </BoxFormAddress>
              <BoxFormAddress>
                <State 
                  type="text" 
                  id="district" 
                  minLength={3}
                  maxLength={50}
                  placeholder="Bairro*"
                  {...register("district")}
                />
                <City 
                  type="text" 
                  id="city" 
                  minLength={3}
                  maxLength={50}
                  placeholder="Cidade*"
                  {...register("city")}
                />
                <UF 
                  type="text" 
                  id="UFs" 
                  minLength={2}
                  maxLength={2}
                  placeholder="UF*"
                  {...register("UFs")}
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
                id="credit" 
                autoComplete="off" 
                value="credit"
                // checked={watchOptions === "credit"}
                // {...register("options")}
              />
              <label  
                htmlFor="credit">
                <CreditCard size={16} />
                Cartão de crédito
              </label>
            
            
              <input 
                type="radio" 
                id="debt" 
                autoComplete="off" 
                value="debt"
                // checked={watchOptions === "debt"}
                // {...register("options")}
              />
              <label 
                htmlFor="debt">
                <Bank size={16} />
                cartão de débito
              </label>
            
            
              <input 
                type="radio" 
                id="money" 
                value="money"
                // checked={watchOptions === "money"}
                autoComplete="off" 
                // {...register("options")}
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

        <SelectedCoffeesContainerf>
          {itemsForCart.map((item) => {
            return (
              <ListSelectedCoffees
                key={item.id}
                id={item.id}
                amount={item.amount}
                img={item.img}
                name={item.name}
                price={item.price}
                onDeleteItem={deleteItem}
                onAmountItemMore={addAmountItemCart}
                onAmountItemLess={removeAmountItemCart}
              />
              )
            })
          }

          <BoxValues>
            <BaseIndividualValues>
              <p>Total de itens</p>

              <p>{formattedTotalPrice}</p>
            </BaseIndividualValues>
            <BaseIndividualValues>
              <p>Entrega</p>
              <p>R$ 5,00</p>
            </BaseIndividualValues>
            <BaseValuesTotal>
              <p>Total</p>
              <p>{formattedTotalPriceFrete}</p>
            </BaseValuesTotal>
          </BoxValues>

          <BtnConfirmOrder
            disabled={/*!watchOptions ||*/ !zip || !address || !number || !district || !city || !UFs || itemsForCart.length === 0}
            type="submit"
          >
            confirmar pedido
          </BtnConfirmOrder>


        </SelectedCoffeesContainerf>

      </div>

    </CheckoutContainer>
  )
}