const Player = (player) => {
  const playerName = player;

  const getPlayerName = () => playerName;

  return { getPlayerName };
};

export {Player};
