import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ActionContainer, BoxTags, ButtonCart, ImgContainer, ItemCardContainer, ItemDescription, ItemTitle, QuantityToBuy, TagsName } from "./styles";

// import expresso from "../../assets/imgCoffees/TypeExpresso.png"

interface ItemCardProps {
  id: string;
  img: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
  stock: number;
}

export function ItemCard(props: ItemCardProps) {
  return (
      <ItemCardContainer>
        <ImgContainer>
          <img src={props.img} alt='' />
        </ImgContainer>
        <BoxTags>
          {props.tags.map((tag) => (
            <TagsName key={tag}>{tag}</TagsName>
            ))  
          }
        </BoxTags>
        <ItemTitle>
          {props.name}
        </ItemTitle>
        <ItemDescription>
          {props.description}
        </ItemDescription>
        <ActionContainer>
          <p><span>R$</span> {props.price}</p>
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