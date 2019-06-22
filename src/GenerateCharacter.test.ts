import GenerateCharacter from './GenerateCharacter';

describe('GenerateCharacter', () => {
  let character: any;
  beforeEach(() => {
    character = new GenerateCharacter();
  });

  it('creates a level 1 character by default', () => {
    expect(character.level).toBe(1);
  });

  it('has six ability stats', () => {
    const abilities = Object.keys(character.abilities);
    expect(abilities).toEqual([
      'charisma',
      'constitution',
      'dexterity',
      'intelligence',
      'strength',
      'wisdom',
    ]);
  });

  it('has six random ability stats', () => {
    const abilityScoresA = Object.values(character.abilities);
    const abilityScoresB = Object.values(new GenerateCharacter().abilities);
    expect(abilityScoresA).not.toEqual(abilityScoresB);
  });

  it('has an hp stat between 5 and 8', () => {
    expect(character.hp).toBeGreaterThanOrEqual(5);
    expect(character.hp).toBeLessThanOrEqual(8);
  });
});
