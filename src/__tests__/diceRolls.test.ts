/** @format */

import {
  rollDie,
  rollOneStat,
  rollWithinBounds,
} from '../helperFunctions/diceRolls';

describe('rollDie', () => {
  it('generates a number between 1 and the die size', () => {
    const rolls = new Array(20).fill(undefined).map(() => rollDie(20));
    expect(rolls.every(roll => roll > 0 && roll <= 20)).toBeTruthy();
  });

  it('will roll a single die', () => {
    const roll = rollDie(20, 1);
    expect(roll).toBeGreaterThan(0);
    expect(roll).toBeLessThanOrEqual(20);
  });

  it('will roll and add multiple dice', () => {
    const rolls = rollDie(20, 21);
    expect(rolls).toBeGreaterThan(20);
    expect(rolls).toBeLessThanOrEqual(420);
  });
});

describe('rollOneStat', () => {
  it('returns a number between 1 and 6 inclusive', () => {
    const stats = new Array(20).fill(undefined).map(() => rollOneStat());
    expect(stats.every(stat => stat > 0 && stat <= 6)).toBeTruthy();
  });
});

describe('rollWithinBounds', () => {
  it('will roll until a result is higher than the set minimum', () => {
    const rolls = new Array(20)
      .fill(undefined)
      .map(() => rollWithinBounds(8, 5));
    const isWithinRange = rolls.map(roll => roll >= 5);
    expect(isWithinRange.every(result => result)).toBeTruthy();
  });

  it('will roll until a result is lower than the set maximum', () => {
    const rolls = new Array(20)
      .fill(undefined)
      .map(() => rollWithinBounds(20, 0, 2));
    const isWithinRange = rolls.map(roll => roll <= 2);
    expect(isWithinRange.every(result => result)).toBeTruthy();
  });

  it('will roll until a result is within a low and high bound', () => {
    const rolls = new Array(20)
      .fill(undefined)
      .map(() => rollWithinBounds(20, 5, 10));
    const isWithinRange = rolls.map(roll => roll >= 5 && roll <= 10);
    expect(isWithinRange.every(result => result)).toBeTruthy();
  });
});
