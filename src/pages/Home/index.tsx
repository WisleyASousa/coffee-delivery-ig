import { Header } from "../../components/Header";
import { ItemCard } from "../../components/ItemCard";
import { HomeContainer } from "./styles";

export function Home() {
  return (
      <HomeContainer>
        <Header />
        <h3>Nossos Cafés</h3>
        <ItemCard />
      </HomeContainer>
    )
}