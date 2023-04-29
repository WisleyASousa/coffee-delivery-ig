import { BtnCart, BtnLocation, NavbarContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

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
          <Link to='/Checkout' title="Checkout">
            <BtnCart>
                <ShoppingCart size={22} />
            </BtnCart>
          </Link>
        </nav>
      </NavbarContainer>
    )
}