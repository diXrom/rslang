import { IGameStatistic, IUserWord } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';

const checkDate = (date: string) => date === getDate();

const getFilteredWords = (item: IUserWord) => {
  const currentDate = getDate();
  return item.optional.isLearned && item.optional.createdAt === currentDate;
};

const getTotalPercent = (
  sprint: IGameStatistic,
  audiocall: IGameStatistic,
  key: keyof IGameStatistic
) => {
  if (!checkDate(sprint.currentDate) && !checkDate(audiocall.currentDate)) return 0;
  if (!sprint[key]) return ((audiocall[key] as number) * 10).toFixed(0);
  if (!audiocall[key]) return ((sprint[key] as number) * 10).toFixed(0);
  return ((((sprint[key] as number) + (audiocall[key] as number)) / 2) * 10).toFixed(0);
};

const getAmountWords = (game: IGameStatistic, key: keyof IGameStatistic) => {
  return (checkDate(game.currentDate) && game[key]) || 0;
};

const getGamePercent = (game: IGameStatistic, key: keyof IGameStatistic) => {
  return (checkDate(game.currentDate) && ((game[key] as number) * 10).toFixed(0)) || 0;
};
const wordsData = (words: { [key: string]: number }, isAsc: boolean) => ({
  labels: Object.keys(words),
  datasets: [
    {
      fill: true,
      label: 'Кол-во слов',
      data: isAsc
        ? Object.values(words).reduce<number[]>(
            (acc, val, i) => (i ? acc.concat(val + acc[i - 1]) : acc.concat(val)),
            []
          )
        : Object.values(words),
      backgroundColor: '#0288d1',
      minBarLength: 7,
    },
  ],
});

const options = (text: string) => ({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text,
      font: {
        size: 14,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: true,
        stepSize: 5,
      },
      grid: {
        display: false,
      },
    },
  },
});

export {
  getFilteredWords,
  getTotalPercent,
  checkDate,
  wordsData,
  options,
  getAmountWords,
  getGamePercent,
};
