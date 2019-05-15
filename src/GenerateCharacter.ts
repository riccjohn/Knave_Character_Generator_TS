/** @format */

import { rollDie, rollOneStat } from './helperFunctions/diceRolls';

interface IAbilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

type Gender = 'male' | 'female' | 'nonbinary';

class GenerateCharacter {
  public level: number;
  public abilities: IAbilities;
  public maxHp: number;
  public gender: Gender;

  constructor() {
    this.level = 1;
    this.abilities = this.generateAbilities();
    this.maxHp = 0;
    this.gender = this.randomGender();
  }

  private generateAbilities = (): IAbilities => {
    const [
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom,
    ] = Array(6)
      .fill(undefined)
      .map(rollOneStat);
    return {
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom,
    };
  };

  private randomGender = (): Gender => {
    const roll = rollDie(3);
    switch (roll) {
      case 1:
        return 'male';
      case 2:
        return 'female';
      case 3:
        return 'nonbinary';
    }
  };
}

export default GenerateCharacter;
