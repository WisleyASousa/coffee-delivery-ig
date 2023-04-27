import { HeaderContainer, IconsCart, IconsCoffee, IconsTimer, Iconsbox, TextHeader } from "./styles";
import imgCooffee from '../../assets/Imagem.png'
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Header() {
  return (
      <HeaderContainer>
        <TextHeader>
          <div>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>

          <ul>
            <li>
              <IconsCart>
                <ShoppingCart size={16} />
              </IconsCart>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <IconsTimer>
                <Timer size={16} />
              </IconsTimer>
              <span>Entrega rápida e rastreada</span>
            </li>
            <li>
              <Iconsbox>
                <Package size={16} />
              </Iconsbox>
              <span>Embalagem mantém o café intacto</span>
            </li>
            <li>
              <IconsCoffee>
                <Coffee size={16} />
              </IconsCoffee>
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>

        </TextHeader>
        <img src={imgCooffee} alt="Um copo de café branco com preto com fundo laranja" />
      </HeaderContainer>
    )
}