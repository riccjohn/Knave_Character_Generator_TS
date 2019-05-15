export const rollDie = ( dieSize: number ): number => {
  return Math.floor(Math.random() * dieSize + 1);
};

export const rollOneStat = (): number => {
  const rolls: number[] = new Array(3).fill(undefined).map(() => rollDie(6));
  return Math.min(...rolls);
};
