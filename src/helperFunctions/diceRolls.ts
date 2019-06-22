export const rollDie = (dieSize: number, numOfDice: number = 1): number => {
  const rolls = [];
  for (let i = 0; i < numOfDice; i++) {
    rolls.push(Math.floor(Math.random() * dieSize + 1));
  }
  return rolls.reduce((acc, curr) => acc + curr, 0);
};

export const rollOneStat = (): number => {
  const rolls: number[] = new Array(3).fill(undefined).map(() => rollDie(6));
  return Math.min(...rolls);
};

export const rollWithinBounds = (
  dieSize: number,
  lowBound: number,
  highBound: number = dieSize,
): number => {
  let roll = rollDie(dieSize);
  while (roll > highBound || roll < lowBound) {
    roll = rollDie(dieSize);
  }
  return roll;
};
