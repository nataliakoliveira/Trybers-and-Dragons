import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _countDwarf = 0; // usado para contar a quantidade de instâncias de Dwarf
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._countDwarf += 1;
  }

  // usado para retornar a propriedade '_maxLifePoints'
  get maxLifePoints(): number { 
    return this._maxLifePoints;
  }

  // usado para incrementar a propriedade '_countDwarf'
  static incrementCountDwarf(): void {
    Dwarf._countDwarf += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._countDwarf;
  }
}