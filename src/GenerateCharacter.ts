class GenerateCharacter {
  public level: number;
  public abilities: IAbilities;
  public maxHp: number;

  constructor() {
    this.level = 1;
    this.abilities = this.generateAbilities();
    this.maxHp = this.rollForHP();
  }

  private rollOneStat(): number {
    return new Array(3)
      .fill(undefined)
      .map(() => {
        return Math.floor(Math.random() * 6 + 1);
      })
      .reduce((acc, curr) => {
        return curr < acc ? curr : acc;
      });
  }

  private rollForHP = (): number => {
    let maxHP = 0;
    while (maxHP < 5) {
      maxHP = this.rollDie(8);
    }
    return maxHP;
  };

  private rollDie = (dieSize: number): number => {
    return Math.floor(Math.random() * dieSize + 1);
  };

  private generateAbilities(): IAbilities {
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
