class GenerateCharacter {
  public level: number;
  public abilities: IAbilities;
  public maxHp: number;

  constructor() {
    this.level = 1;
    this.abilities = this.generateAbilities();
    this.maxHp = 0;
  }

  private rollOneStat() {
    return new Array(3)
      .fill(undefined)
      .map(() => {
        return Math.floor(Math.random() * 6 + 1);
      })
      .reduce((acc, curr) => {
        return curr < acc ? curr : acc;
      });
  }

  private generateAbilities() {
    const [
      charisma,
      constitution,
      dexterity,
      intelligence,
      strength,
      wisdom
    ] = Array(6)
      .fill(undefined)
      .map(this.rollOneStat);
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
