import { rollDie, rollOneStat } from '../helperFunctions/diceRolls';

describe('rollDice', () => {
  it('generates a number between 1 and the die size', () => {
    const rolls = new Array(20).fill(undefined).map(() => rollDie(20));
    expect(rolls.every(roll => roll > 0 && roll <= 20)).toBeTruthy();
  });
});

describe('rollOneStat', () => {
  it('returns a number between 1 and 6 inclusive', () => {
    const stats = new Array(20).fill(undefined).map(() => rollOneStat()
    );
    expect(stats.every( stat => stat > 0 && stat <= 6)).toBeTruthy();
  })
})
