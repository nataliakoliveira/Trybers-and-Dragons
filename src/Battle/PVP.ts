import Battle from './Battle';
import Fighter from '../Fighter';
import Character from '../Character';

export default class PVP extends Battle {
  constructor(
    private _fighter1: Fighter | Character,
    private _fighter2: Fighter | Character,
  ) {
    super(_fighter1);
  }

  public fight(): number {
    let battle = true;
    while (battle) {
      this.player.attack(this._fighter2);
      if (this._fighter2.lifePoints === -1) battle = false;
      this._fighter2.attack(this.player);
      if (this.player.lifePoints === -1) battle = false;
    }
    return this.player.lifePoints;
  }
}
