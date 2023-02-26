import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _countElf = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countElf += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementCountElf(): void {
    Elf._countElf += 1;
  }

  static createdRacesInstances(): number {
    return Elf._countElf;
  }
}
