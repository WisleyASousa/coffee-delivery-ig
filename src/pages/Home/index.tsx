import { Header } from "../../components/Header";
import { ItemCard } from "../../components/ItemCard";
import { FilterBox, HomeContainer, MenuContainer } from "./styles";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/ListCartContext";
import { BoxWarningAddInCart } from "../../components/ItemCard/styles";

export interface itemForCartDate {
  id: string;
  amount: number;
  img: string;
  name: string;
  price: string;
}

/*interface ListDescCoffeesProps {
  id: string;
  img: string;
  tags: string[];
  name: string;
  description: string;
  price: string;
  stock: number;
}*/

const ListDescCoffeesdefault = [
  {
      id: "1",
      img: "../../../imgCoffees/TypeExpresso.png",
      tags: ["tradicional"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: "9,90",
  },
  {
      id: "2",
      img: "../../../imgCoffees/Type=Americano.png",
      tags: ["tradicional"],
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: "9,90",
  },
  {
      id: "3",
      img: "../../../imgCoffees/Type=ExpressoCremoso.png",
      tags: ["tradicional"],
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: "9,90",
  },
  {
      id: "4",
      img: "../../../imgCoffees/Type=CaféGelado.png",
      tags: ["tradicional", "gelado"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: "9,90",
  },
  {
      id: "5",
      img: "../../../imgCoffees/Type=CafécomLeite.png",
      tags: ["tradicional", "com leite"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: "9,90",
  },
  {
      id: "6",
      img: "../../../imgCoffees/Type=Latte.png",
      tags: ["tradicional", "com leite"],
      name: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: "9,90",
  },
  {
      id: "7",
      img: "../../../imgCoffees/Type=Capuccino.png",
      tags: ["tradicional", "com leite"],
      name: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: "9,90",
  },
  {
      id: "8",
      img: "../../../imgCoffees/Type=Macchiato.png",
      tags: ["tradicional", "com leite"],
      name: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      price: "9,90",
  },
  {
      id: "9",
      img: "../../../imgCoffees/Type=Mochaccino.png",
      tags: ["tradicional", "com leite"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: "9,90",
  },
  {
      id: "10",
      img: "../../../imgCoffees/Type=ChocolateQuente.png",
      tags: ["especial", "com leite"],
      name: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: "9,90",
  },
  {
      id: "11",
      img: "../../../imgCoffees/Type=Cubano.png",
      tags: ["especial", "gelado", "alcoólico"],
      name: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: "9,90",
  },
  {
      id: "12",
      img: "../../../imgCoffees/Type=Havaiano.png",
      tags: ["especial"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: "9,90",
  },
  {
      id: "13",
      img: "../../../imgCoffees/Type=arabe.png",
      tags: ["especial"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: "9,90",
  },
  {
      id: "14",
      img: "../../../imgCoffees/Type=Irlandes.png",
      tags: ["especial", "alcoólico"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: "9,90",
  }
]



export function Home() {
  /*const [listDescCoffeesdefault, setListDescCoffeesdefault] = useState<ListDescCoffeesProps[]>([]);*/

  const { itemsForCart, setItemsForCart } = useCart();

  /*useEffect(() => {
    fetch('/coffeesDate.json')
      .then((response) => response.json())
      .then((data) => {
        setListDescCoffeesdefault(data);
      });
  }, []);*/

  const [addToCartCalled, setAddToCartCalled] = useState(false);
  
  function onAddToCart(item: itemForCartDate) {
    const newItem = {
      id: uuidv4(),
      idItem: item.id,
      name: item.name,
      price: item.price,
      amount: item.amount,
      img: item.img,
    }
    if(item.amount === 0){
      return;
    } else {
      setItemsForCart((status) => [...status, newItem]);
      setAddToCartCalled(true);
    }
  }

  useEffect(() => {
    if (addToCartCalled) {
      const timer = setTimeout(() => {
        setAddToCartCalled(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [addToCartCalled]);

  return (
      <HomeContainer>
        {
          addToCartCalled && (
            itemsForCart.slice(-1)[0] &&
            <BoxWarningAddInCart>
              <strong>Adicionado ao Carrinho!</strong>
            </BoxWarningAddInCart>
          )
        }
        <Header />
        <FilterBox>
          <h3>Nossos Cafés</h3>
          <button type="button">Ver tudo</button>
        </FilterBox>

        <MenuContainer>
          {ListDescCoffeesdefault.map(coffee => {
            return (
                <ItemCard
                  key={coffee.id}
                  id={coffee.id}
                  img={coffee.img}
                  tags={coffee.tags}
                  name={coffee.name}
                  description={coffee.description}
                  price={coffee.price}
                  onAddToCart={onAddToCart}
                />
              )
          })
        }
        </MenuContainer>
      </HomeContainer>
    )
}

