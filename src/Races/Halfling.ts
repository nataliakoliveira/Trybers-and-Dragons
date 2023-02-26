import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countHalfling = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._countHalfling += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static incrementCountHalfling(): void {
    Halfling._countHalfling += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._countHalfling;
  }
}
