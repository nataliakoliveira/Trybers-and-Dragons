import Archetype from './Arquetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static _countNecromancer = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._countNecromancer += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._countNecromancer;
  }
}