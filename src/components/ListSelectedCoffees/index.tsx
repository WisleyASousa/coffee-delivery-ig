import { ListSelectedCoffeesContainer, ListSelectedCoffeesLine } from "./styles";

import coffeeImg from "../../assets/TypeExpresso.png";

import { Minus, Plus, Trash } from "@phosphor-icons/react";

export function ListSelectedCoffees() {
  return (
      <>
        <ListSelectedCoffeesContainer>
          <div>
            <img src={coffeeImg} width={64}/>
          </div>
          <div>
            <div>
              <p>Expresso Tradicional</p>
              <p>R$ 9,90</p>
            </div>
            <div>
              <button>
                <Minus size={14}/>
              </button>
              <span>1</span>
              <button>
                <Plus size={14} />
              </button>
              <button>
                <Trash />
                remover
              </button>
            </div>
          </div>
        </ListSelectedCoffeesContainer>
        <ListSelectedCoffeesLine />
      </>
    )
}