import { ActionBoxSelected, BtnAmount, BtnRemove, ItemPriceBox, ItemRemoveBox, ListSelectedCoffeesContainer, ListSelectedCoffeesLine } from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

interface ListSelectedCoffeesProps {
  id: string;
  img: string;
  name: string;
  price: string;
  amount: number;
}

export function ListSelectedCoffees(props: ListSelectedCoffeesProps) {
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
                <BtnAmount>
                  <Minus size={14}/>
                </BtnAmount>
                <span>{props.amount}</span>
                <BtnAmount>
                  <Plus size={14} />
                </BtnAmount>
              </div>

              <BtnRemove>
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