interface IAbilities {
  charisma: IAbility;
  constitution: IAbility;
  dexterity: IAbility;
  intelligence: IAbility;
  strength: IAbility;
  wisdom: IAbility;
}

interface IAbility {
  bonus: number;
  defense: number;
}

type Gender = 'male' | 'female' | 'nonbinary' | undefined;
