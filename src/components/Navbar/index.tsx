import { BtnCart, BtnLocation, NavbarContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Navbar() {
  return (
      <NavbarContainer>
        <img src={logo} alt="" />
        <nav>
          <BtnLocation>
            <MapPin size={22} />
            Porto Alegre, RS
          </BtnLocation>
          <BtnCart>
            <ShoppingCart size={22} />
          </BtnCart>
        </nav>
      </NavbarContainer>
    )
}