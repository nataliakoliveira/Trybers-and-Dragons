import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints: number, strength: number) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(0, attackPoints - 1);
    this._lifePoints -= damage;
    return damage;
  }

  attack(target: SimpleFighter): void {
    target.receiveDamage(this._strength);
  }
}
