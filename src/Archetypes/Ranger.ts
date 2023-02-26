import Archetype from './Arquetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static _countRanger = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._countRanger += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._countRanger;
  }
}