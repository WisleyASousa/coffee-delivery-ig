import { ActionBoxSelected, BtnAmount, BtnRemove, ItemPriceBox, ItemRemoveBox, ListSelectedCoffeesContainer, ListSelectedCoffeesLine } from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

interface ListSelectedCoffeesProps {
  id: string;
  img: string;
  name: string;
  price: string;
  amount: number;
  onAmountItemMore: (itemsForCart: string) => void;
  onAmountItemLess: (itemsForCart: string) => void;
  onDeleteItem: (itemsForCart: string) => void;
}

export function ListSelectedCoffees(props: ListSelectedCoffeesProps) {

  function handleDeleteItem() {
    props.onDeleteItem(props.id);
  }

  function handleAmountCartMore() {
    props.onAmountItemMore(props.id);
  }

  function handleAmountCartLess() {
    props.onAmountItemLess(props.id);
  }



  return (
      <>
        <ListSelectedCoffeesContainer>
          <div>
            <img src={props.img} width={64}/>
          </div>
          <ActionBoxSelected>
            <ItemPriceBox>
              <p>{props.name}</p>
              <span>R$ {props.price}</span>
            </ItemPriceBox>

            <ItemRemoveBox>

              <div>
                <BtnAmount
                  type="button"
                  onClick={handleAmountCartLess}
                >
                  <Minus size={14}/>
                </BtnAmount>
                <span>{props.amount}</span>
                <BtnAmount
                  onClick={handleAmountCartMore}
                  type="button"
                >
                  <Plus size={14} />
                </BtnAmount>
              </div>

              <BtnRemove
                type="button"
                onClick={handleDeleteItem}
              >
                <Trash size={16} />
                remover
              </BtnRemove>

            </ItemRemoveBox>

          </ActionBoxSelected>
        </ListSelectedCoffeesContainer>
        <ListSelectedCoffeesLine />
      </>
    )
}