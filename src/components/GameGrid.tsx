import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((game) => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
