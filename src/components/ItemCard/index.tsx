import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ActionContainer, ButtonCart, ImgContainer, ItemCardContainer, ItemDescription, ItemTitle, QuantityToBuy, TagsName } from "./styles";

import expresso from "../../assets/TypeExpresso.png"

export function ItemCard() {
  return (
      <ItemCardContainer>
        <ImgContainer>
          <img src={expresso} alt='' />
        </ImgContainer>
        <TagsName>
          Tradicional
        </TagsName>
        <ItemTitle>
          Expresso Tradicional
        </ItemTitle>
        <ItemDescription>
          O tradicional café feito com água quente e grãos moídos
        </ItemDescription>
        <ActionContainer>
          <p><span>R$</span> 9,90</p>
          <div>
            <QuantityToBuy>
              <button><Minus size={14}/></button>
              <span>1</span>
              <button><Plus size={14} /></button>
            </QuantityToBuy>
            <ButtonCart>
              <ShoppingCart size={22}/>
            </ButtonCart>
          </div>
        </ActionContainer>
      </ItemCardContainer>
    )
}