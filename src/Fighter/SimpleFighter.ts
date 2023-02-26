export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack: (opponent: SimpleFighter) => void;
  receiveDamage: (attackPoints: number) => number;
}