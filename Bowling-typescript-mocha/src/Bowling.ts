// export function totally() {
//   return 'works!';
// }

export interface Turn {
  first: number,
  second: number,
  third?: number
}

export default class Game {

  public static score(rolls: number[]): number {
    const turns: Turn[] = [];
    for(let i = 0; i < rolls.length; i+=2) {
      const turn: Turn = {
        first: rolls[i],
        second: rolls[i+1]
      }
      if (i === 10) {
        turn.third = rolls[i];
      }
      turns.push(turn);
    }

    const SPARE_OR_STRIKE = 10;

  return turns.reduce((accumulator, turn: Turn, index) => {
    if (turn.first + turn.second === SPARE_OR_STRIKE) {
      return accumulator + (turn.first + turn.second + (turn.third ? turn.third : 0)) + turns[index + 1].first;


    }
    return accumulator + (turn.first + turn.second + (turn.third ? turn.third : 0));
  }, 0);
    // return rolls.reduce((accumulator, roll, index) => {


    //   return accumulator + roll;
    // }, 0);
  }
}
