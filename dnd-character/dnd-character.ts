const baseHitpoints = 10

export class DnDCharacter {
  hitpoints: number
  strength: number
  dexterity: number
  constitution: number
  intelligence: number
  wisdom: number
  charisma: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
    this.hitpoints = baseHitpoints + DnDCharacter.getModifierFor(this.constitution)
  }
  
  /**
   * generateAbilityScore mimics rolling 4 dice and returns the sum of the larger 3 values.
   * @param randomGenerator Math.random by default, returns a number between 0 (inclusive) and 1 (exclusive).
   * @returns An integer between 3 and 18 (inclusive of both).
   */
  public static generateAbilityScore(randomGenerator: () => number = Math.random): number {
    const between1and6 = () => Math.floor(randomGenerator() * 6) + 1
    const rolls = [between1and6(), between1and6(), between1and6(), between1and6()]
    return rolls.sort().slice(1,4).reduce((a, b) => a + b)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}
