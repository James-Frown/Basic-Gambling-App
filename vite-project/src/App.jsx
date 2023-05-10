import './App.css'
import CoinFlipCard from "./components/templates/CoinlFlipCard";
import DiceRollCard from './components/templates/DiceRollCard';
import CardsCard from './components/templates/CardsCard';
import MinerCard from './components/templates/MinerCard';
import BlackJack from './components/templates/BlackJack';

function App() {
  return (
    <>
      <CoinFlipCard />
      <DiceRollCard />
      <CardsCard />
      <MinerCard />
      <BlackJack />
    </>
  );
}

export default App;
