import { Link } from "react-router-dom";
import { BaseIndividualValues, BaseValuesTotal, BoxValues, BtnConfirmOrder } from "../../pages/Checkout/styles";
import { ItemListBoxSidebar, SidebarContainer } from "./styles";
import { useCart } from "../../contexts/ListCartContext";
import { ListSelectedCoffees } from "../ListSelectedCoffees";


export function Sidebar() {
  const { itemsForCart, formattedTotalPrice, formattedTotalPriceFrete, deleteItem, addAmountItemCart, removeAmountItemCart } = useCart();

  return (
    <>
      <SidebarContainer
        isOpen={false}
      >
        <h3>Cafés Selecionados</h3>
        <ItemListBoxSidebar>
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
        </ItemListBoxSidebar>
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

            <Link to='/Checkout' title="Checkout">
              <BtnConfirmOrder
                type="submit">
                Seguir com Pedido
              </BtnConfirmOrder>
            </Link>
      </SidebarContainer>
    </>
  );
}