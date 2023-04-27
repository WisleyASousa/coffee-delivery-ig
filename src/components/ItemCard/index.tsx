import { ShoppingCart } from "@phosphor-icons/react";
import { ActionContainer, ItemCardContainer, ItemDescription, ItemTitle, TagsName } from "./styles";

export function ItemCard() {
  return (
      <ItemCardContainer>
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
            <p>- 1 +</p>
            <button>
              <ShoppingCart size={22}/>
            </button>
          </div>
        </ActionContainer>
      </ItemCardContainer>
    )
}