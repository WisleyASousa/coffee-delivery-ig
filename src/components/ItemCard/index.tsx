import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ActionContainer, BoxTags, ButtonCart, ImgContainer, ItemCardContainer, ItemDescription, ItemTitle, QuantityToBuy, TagsName } from "./styles";
import { useState } from "react";
import { itemForCart } from "../../pages/Home";

// import expresso from "../../assets/imgCoffees/TypeExpresso.png"




interface ItemCardProps {
  id: string;
  img: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
  stock: number;
  onAddToCart: (item: itemForCart) => void;
  
}

export function ItemCard({ id, img, tags, name, description,  price, stock, onAddToCart }: ItemCardProps) {

  const [countCartItems, setCountCartItems] = useState(0);

  function handleAmountCartLess() {
    if (countCartItems >= 1) {
      setCountCartItems((state) => {
        return state - 1
    })} else {
      setCountCartItems((state) => {
        return state - 0
    })}
  }

  function handleAmountCartMore() {
    setCountCartItems((state) => {
      return state + 1
  });
  }

  function handleAddItemCart() {

    onAddToCart({
      id,
      amount: countCartItems,
      img,
      name,
      price
    })
  }

  // console.log(itemsForCart)

  return (
      <ItemCardContainer>
        <ImgContainer>
          <img src={img} alt='' />
        </ImgContainer>
        <BoxTags>
          {tags.map((tag) => (
            <TagsName key={tag}>{tag}</TagsName>
            ))  
          }
        </BoxTags>
        <ItemTitle>
          {name}
        </ItemTitle>
        <ItemDescription>
          {description}
        </ItemDescription>
        <ActionContainer>
          <p><span>R$</span> {price}</p>
          <div>
            <QuantityToBuy>

              <button 
                onClick={handleAmountCartLess}
              >
                <Minus size={14}/>
              </button>
              <span>
                {countCartItems}
              </span>
              <button
                onClick={handleAmountCartMore}
              >
                <Plus size={14} />
              </button>

            </QuantityToBuy>
            <ButtonCart 
              type="button"
              onClick={handleAddItemCart}
            >
              <ShoppingCart size={22}/>
            </ButtonCart>
          </div>
        </ActionContainer>
      </ItemCardContainer>
    )
}