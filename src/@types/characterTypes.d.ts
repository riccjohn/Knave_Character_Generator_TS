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

type GearList = IGear[];

interface IGear {
  name: String;
  count: Number;
}

type Gender = 'male' | 'female' | 'nonbinary' | undefined;
