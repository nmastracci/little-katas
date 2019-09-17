export default class Game {
  score(rolls: number[]): number {
    return rolls.reduce((accum, curr, i, arr) => {
      console.log(2 % 2 === 0, i);
      if (curr + arr[i+1] === 10 && arr[i+1] % 2 === 0) {
        console.log('here');
        return accum + (curr + arr[i+2]); /*?*/
      }
      return accum + curr;  /*?*/
    }, 0); /*?*/
  }
}

const game = new Game();
game.score([7,3,2,0,0,0,0,0,0,0]);
