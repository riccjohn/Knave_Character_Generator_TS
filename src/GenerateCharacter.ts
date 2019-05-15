import { rollOneStat } from './helperFunctions/diceRolls';

interface IAbilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

class GenerateCharacter {
  public level: number;
  public abilities: IAbilities;
  public maxHp: number;

  constructor() {
    this.level = 1;
    this.abilities = this.generateAbilities();
    this.maxHp = 0;
  }

  private generateAbilities = () => {
    const [
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom
    ] = Array(6)
      .fill(undefined)
      .map(rollOneStat);
    return {
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom
    };
  }
}

export default GenerateCharacter;
