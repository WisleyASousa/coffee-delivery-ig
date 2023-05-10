import { AmountOfItemInCart, BtnHome, BtnLocation, CounterBox, NavbarContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { ArrowLeft, ArrowRight, HouseSimple, MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../contexts/ListCartContext";
import { BtnSidebar } from "../Sidebar/styles";


export function Navbar() {
  const { itemsForCart, activeSidebar, handleActiveSidebar  } = useCart();
  
  
  const AmountCart = itemsForCart.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  
  const location = useLocation();

  function handleActiveSidebarLogo() {
    if(location.pathname === '/') {
      return;
    }else {
      return handleActiveSidebar();
    }
  }

  return (
    <NavbarContainer>
      <Link to='/' title="Inicio" onClick={handleActiveSidebarLogo}>
        <img src={logo} alt="" />
      </Link>
      <nav>
        <Link to='/Checkout' title="Localização">
          <BtnLocation>
            <MapPin size={22} />
            Picos, PI
          </BtnLocation>
        </Link>
        <CounterBox>
          
            {location.pathname === '/' ? (
            <>
              <BtnSidebar  type="button" onClick={handleActiveSidebar}>

                {activeSidebar ? (<ArrowRight size={32} />) : (<ArrowLeft size={32} />)}
                  <ShoppingCart size={26} />

              </BtnSidebar>

              {AmountCart > 0 && <AmountOfItemInCart>
                {AmountCart}
              </AmountOfItemInCart>}
            </>) : (
            <>
              <Link to='/' title="Inicio">
                <BtnHome
                  type="button"
                  onClick={handleActiveSidebar}
                >
                  <HouseSimple size={22} />
                  Inicio
                </BtnHome>
              </Link>
            </>
            )}
        </CounterBox>
      </nav>
    </NavbarContainer>
  )
}