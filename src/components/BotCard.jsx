import React from 'react';

const BotCard = ({ bot, onEnlist, onDischarge, onRelease }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => onEnlist(bot)}
    >
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{bot.name}</h3>
        <p className="text-sm text-gray-500 italic">{bot.catchphrase}</p>
        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <span>❤️ {bot.health}</span>
          <span>⚔️ {bot.damage}</span>
          <span>🛡️ {bot.armor}</span>
        </div>
        <p className="mt-2 px-2 inline-block text-xs rounded-full bg-blue-100 text-blue-800">
          {bot.bot_class}
        </p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRelease(bot);
            }}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Release
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDischarge(bot);
            }}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Discharge
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
