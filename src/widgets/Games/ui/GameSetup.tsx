import { useRef, useState } from 'react';
import { IWord } from 'shared/api/lib/types';
import { GAMES, IGameSettings, IGameTitle } from '../model/constants';
import GameLoad from './GameLoad';

type IGameSetupProps = { game: IGameTitle; settings: IGameSettings };

const GameSetup = ({ game, settings }: IGameSetupProps) => {
  const { component: Game } = GAMES[game];

  const [isWordsReady, setIsWordsReady] = useState(false);
  const [isWordsError, setIsWordsError] = useState(false);
  const wordsRef = useRef<IWord[]>([]);

  if (isWordsError) return <>Ошибка получения слов</>;

  return !isWordsReady ? (
    <GameLoad
      settings={settings}
      isWordsReady={isWordsReady}
      setIsWordsReady={setIsWordsReady}
      isWordsError={isWordsError}
      setIsWordsError={setIsWordsError}
      words={wordsRef}
    />
  ) : (
    <Game words={wordsRef.current} />
  );
};

export default GameSetup;
