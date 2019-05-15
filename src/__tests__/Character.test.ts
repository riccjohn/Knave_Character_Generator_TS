/** @format */

import Character from '../Character';

describe('Character', () => {
  let character: any;
  beforeEach(() => {
    character = new Character();
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

  it('has stats for ability bonuses and ability defenses', () => {
    const { abilities } = character;
    const abilityKeys = Object.keys(abilities);

    const containsProperties = abilityKeys.map(key => {
      return !!(abilities[key].bonus && abilities[key].defense);
    });

    expect(containsProperties.every(val => val)).toBeTruthy();
  });

  it('has six random ability stats', () => {
    const abilityScoresA = Object.values(character.abilities);
    const abilityScoresB = Object.values(new Character().abilities);
    expect(abilityScoresA).not.toEqual(abilityScoresB);
  });

  it('assigns a gender', () => {
    const genders = ['male', 'female', 'nonbinary'];
    expect(genders).toContain(character.gender);
  });

  it('has an hp stat between 5 and 8', () => {
    for (let i = 0; i < 20; i++) {
      const newCharacter = new Character();
      expect(newCharacter.maxHp).toBeGreaterThanOrEqual(5);
      expect(newCharacter.maxHp).toBeLessThanOrEqual(8);
    }
  });
});
