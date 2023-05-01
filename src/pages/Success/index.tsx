import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { BoxPagImg, IconsDollar, IconsMap, SuccessContainer } from "./styles";
import { IconsTimer } from "../../components/Header/styles";

import imgSuccess from "../../../public/illustration.png"

export function Success() {
  return (
      <SuccessContainer>
        <div>
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <BoxPagImg>
          <ul>
            <li>
              <IconsMap>
                <MapPin size={16} />
              </IconsMap>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              <br/>
               Farrapos - Porto Alegre, RS
              </span>
            </li>
            <li>
              <IconsTimer>
                <Timer size={16} />
              </IconsTimer>
              <span>Previsão de entrega
                <br/>
                <strong> 20 min - 30 min</strong>
              </span>
            </li>
            <li>
              <IconsDollar>
                <CurrencyDollar size={16} />
              </IconsDollar>
              <span>Pagamento na entrega <br/>
                <strong> Cartão de Crédito
                </strong>
              </span>
            </li>
          </ul>
          <div>
              <img src={imgSuccess} />
          </div>
        </BoxPagImg>
      </SuccessContainer>
    )
}