const BotCollection = ({ bots, onEnlist, onDischarge }) => {
    return (
      <div className="bot-collection w-3/4">
        <h2 className="text-xl font-semibold">Available Bots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {bots.map((bot) => (
            <div
              key={bot.id}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200"
            >
              <img src={bot.avatar_url} alt={bot.name} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-2">{bot.name}</h3>
              <p className="text-sm text-gray-500">{bot.catchphrase}</p>
              <div className="flex justify-between mt-2">
                <span>❤️ {bot.health}</span>
                <span>⚔️ {bot.damage}</span>
                <span>🛡️ {bot.armor}</span>
              </div>
              <div className="flex justify-between mt-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full"
                  onClick={() => onEnlist(bot)}
                >
                  Enlist
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                  onClick={() => onDischarge(bot)}
                >
                  Discharge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BotCollection;
  ;
