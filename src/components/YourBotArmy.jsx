const YourBotArmy = ({ botArmy, onRelease }) => {
    return (
      <div className="your-bot-army w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Your Bot Army</h2>
        <div className="mt-4">
          {botArmy.length === 0 ? (
            <p className="text-gray-500">You have no bots in your army.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {botArmy.map((bot) => (
                <div
                  key={bot.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <img src={bot.avatar_url} alt={bot.name} className="w-full h-48 object-cover rounded-md" />
                  <h3 className="text-lg font-bold mt-2">{bot.name}</h3>
                  <div className="flex justify-between mt-2">
                    <span>❤️ {bot.health}</span>
                    <span>⚔️ {bot.damage}</span>
                    <span>🛡️ {bot.armor}</span>
                  </div>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-2 w-full"
                    onClick={() => onRelease(bot)}
                  >
                    Release
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default YourBotArmy;
  