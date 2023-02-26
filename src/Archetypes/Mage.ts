import Archetype from './Arquetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static _countMage = 0; // variável será utilizada para contar quantas instâncias da classe Mage foram criadas
  private _energyType: EnergyType; // armazena o tipo de energia que o arquétipo Mage utiliza

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._countMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number { // retorna o número de instâncias criadas da classe Mage, que está armazenado na variável _countMage
    return Mage._countMage;
  }
}