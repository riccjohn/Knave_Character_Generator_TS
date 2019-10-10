import {
  rollDie,
  rollOneStat,
  rollWithinBounds,
} from './helperFunctions/diceRolls';
import * as traits from './data/traits.json';
import * as gear from './data/gear.json';
import { tsThisType } from '@babel/types';

class Character {
  public level: number;
  public abilities: IAbilities;
  public maxHp: number;
  public healingRate: number;
  public gender: Gender;
  public copperPieces: number;
  public gear: GearList;

  constructor() {
    this.level = 1;
    this.abilities = this.generateAbilities();
    this.maxHp = rollWithinBounds(8, 5);
    this.healingRate = rollDie(8) + this.abilities.constitution.bonus;
    this.gender = this.randomGender();
    this.copperPieces = rollDie(6, 3) + 20;
    this.gear = [{ name: 'rations', count: 2 }];
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
      charisma: { bonus: charisma, defense: charisma + 10 },
      constitution: { bonus: constitution, defense: constitution + 10 },
      dexterity: { bonus: dexterity, defense: dexterity + 10 },
      intelligence: { bonus: intelligence, defense: intelligence + 10 },
      strength: { bonus: strength, defense: strength + 10 },
      wisdom: { bonus: wisdom, defense: wisdom + 10 },
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
      default:
        return;
    }
  };

  public getGear = (): void => {
    const randomGear = [{ name: 'rations', count: 2 }];
    const slots = this.abilities.constitution.defense;
    for (let i = 0; i < slots - 1; i++) {
      randomGear.push({ name: 'test', count: 1 });
    }
    this.gear = randomGear;
  };
}

export default Character;
