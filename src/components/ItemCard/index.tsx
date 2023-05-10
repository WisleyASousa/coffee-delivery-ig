import { ArrowFatLinesUp, Minus, Plus, ShieldWarning, ShoppingCart } from "@phosphor-icons/react";
import { ActionContainer, BoxTags, ButtonCart, ImgContainer, ItemCardContainer, ItemDescription, ItemTitle, QuantityToBuy, TagsName, WarningBox} from "./styles";
import { useState } from "react";
import { itemForCartDate } from "../../pages/Home";




interface ItemCardProps {
  id: string;
  img: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
  onAddToCart: (item: itemForCartDate) => void;
  
}

export function ItemCard({ id, img, tags, name, description,  price, onAddToCart }: ItemCardProps) {

  const [countCartItems, setCountCartItems] = useState(1);

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
              disabled={!countCartItems}
              title="Adicionar ao carrinho"
              type="button"
              onClick={handleAddItemCart}
              >
              <ShoppingCart size={22}/>
            </ButtonCart>
          </div>
        </ActionContainer>
        {countCartItems === 0 && (<WarningBox>
          <div>
            <ArrowFatLinesUp size={25} />
          </div>
          <p>
            <button type="button" title="Não pode adicionar 0 itens no carrinho">
              <ShieldWarning size={18} />
              Item não pode ser Zero
            </button>
          </p>
        </WarningBox>)}
      </ItemCardContainer>
    )
}