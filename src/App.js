import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

const App = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  // Fetch bots from the server
  useEffect(() => {
    fetch("https://botbattlr-o1b8.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    // Add bot to the army if it's not already in the army
    if (!botArmy.some((armyBot) => armyBot.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const handleRelease = (bot) => {
    // Remove bot from the army
    setBotArmy((prevArmy) => prevArmy.filter((armyBot) => armyBot.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    // Remove bot from both bot collection and the army (no server update)
    setBots((prevBots) => prevBots.filter((b) => b.id !== bot.id));
    setBotArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  };

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-4">🤖 Bot Battlr</h1>
      <div className="flex space-x-4">
        <BotCollection bots={bots} onEnlist={handleEnlist} onDischarge={handleDischarge} />
        <YourBotArmy botArmy={botArmy} onRelease={handleRelease} />
      </div>
    </div>
  );
};

export default App;
