import { ActionBoxSelected, BtnAmount, BtnRemove, ItemPriceBox, ItemRemoveBox, ListSelectedCoffeesContainer, ListSelectedCoffeesLine } from "./styles";

import coffeeImg from "../../assets/TypeExpresso.png";

import { Minus, Plus, Trash } from "@phosphor-icons/react";

export function ListSelectedCoffees() {
  return (
      <>
        <ListSelectedCoffeesContainer>
          <div>
            <img src={coffeeImg} width={64}/>
          </div>
          <ActionBoxSelected>
            <ItemPriceBox>
              <p>Expresso Tradicional</p>
              <span>R$ 9,90</span>
            </ItemPriceBox>

            <ItemRemoveBox>

              <div>
                <BtnAmount>
                  <Minus size={14}/>
                </BtnAmount>
                <span>1</span>
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