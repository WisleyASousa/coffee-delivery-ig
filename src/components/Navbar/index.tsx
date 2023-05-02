import { AmountOfItemInCart, BtnCart, BtnLocation, CounterBox, NavbarContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export const AmountCart = 0;

export function Navbar() {


  return (
    <NavbarContainer>
      <Link to='/' title="Localização">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Link to='/' title="Localização">
          <BtnLocation>
            <MapPin size={22} />
            Porto Alegre, RS
          </BtnLocation>
        </Link>
        <CounterBox>
          <Link to='/Checkout' title="Checkout">
            <BtnCart>

                  <AmountOfItemInCart>
                    {AmountCart}
                  </AmountOfItemInCart>

              <ShoppingCart size={22} />
            </BtnCart>
          </Link>
        </CounterBox>
      </nav>
    </NavbarContainer>
  )
}