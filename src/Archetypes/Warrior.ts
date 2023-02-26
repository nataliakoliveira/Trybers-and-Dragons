import Archetype from './Arquetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static _countWarrior = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._countWarrior += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._countWarrior;
  }
}