import { Header } from "../../components/Header";
import { ItemCard } from "../../components/ItemCard";
import { HomeContainer, MenuContainer } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export interface itemForCart {
  id: string;
  amount: number;
  img: string;
  name: string;
  price: string;
}

const ListDescCoffess = [
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/TypeExpresso.png",
      tags: ["tradicional"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Americano.png",
      tags: ["tradicional"],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=ExpressoCremoso.png",
      tags: ["tradicional"],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=CaféGelado.png",
      tags: ["tradicional", "gelado"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=CafécomLeite.png",
      tags: ["tradicional", "com leite"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Latte.png",
      tags: ["tradicional", "com leite"],
      name: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Capuccino.png",
      tags: ["tradicional", "com leite"],
      name: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Macchiato.png",
      tags: ["tradicional", "com leite"],
      name: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Mochaccino.png",
      tags: ["tradicional", "com leite"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=ChocolateQuente.png",
      tags: ["especial", "com leite"],
      name: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Cubano.png",
      tags: ["especial", "gelado", "alcoólico"],
      name: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Havaiano.png",
      tags: ["especial"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=arabe.png",
      tags: ["especial"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: "9,90",
      stock: 10
  },
  {
      id: uuidv4(),
      img: "../../../public/imgCoffees/Type=Irlandes.png",
      tags: ["especial", "alcoólico"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9,90",
      stock: 10
  }
]



export function Home() {
  const [itemsForCart, setItemsForCart] = useState<itemForCart[]>([]);

  

  function onAddToCart(item: itemForCart) {
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      amount: item.amount,
      img: item.img,
    }
    if(item.amount === 0){
      return;
    } else {
      setItemsForCart((status) => [...status, newItem]);
    }
  }

  console.log(itemsForCart);


  return (
      <HomeContainer>
        <Header />
        <h3>Nossos Cafés</h3>
        <MenuContainer>
          {ListDescCoffess.map(coffee => {
            return (
                <ItemCard
                  key={coffee.name}
                  id={coffee.id}
                  img={coffee.img}
                  tags={coffee.tags}
                  name={coffee.name}
                  description={coffee.description}
                  price={coffee.price}
                  stock={coffee.stock}
                  onAddToCart={onAddToCart}
                />
              )
          })
        }
        </MenuContainer>
      </HomeContainer>
    )
}

