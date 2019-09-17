import { expect } from 'chai';
import { describe } from 'mocha';
import Game from '../Bowling';

describe('Norming Bowling Games', () => {
  it('should score a single throw', () => {
    const rolls: number[] = [7,0,0,0,0,0,0,0,0,0]
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(7);
  })

  it('should score two throws which do not add up to  strike or a spare', () => {
    const rolls: number[] = [4,1,0,0,0,0,0,0,0,0];
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(5)
  })

  it('should score a spare', () => {
    const rolls: number[] = [7,3,2,0,0,0,0,0,0,0];
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(14)
  })

  xit('should score multiple spares', () => {
    const rolls: number[] = [7,3,3,7,7,3,1,0,0,0];
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(42)
  })

  xit('should score a strike', () => {
    let rolls = [10,0,4,2,0,0,0,0,0,0];
    const game = new Game()
    let result = game.score(rolls);

    expect(result).to.equal(22)

    rolls = [0,10,4,2,0,0,0,0,0,0];
    result = game.score(rolls);

    expect(result).to.equal(22)
  })

  xit('should score back to back strikes', () => {
    let rolls = [10,0,0,10,5,2,0,0,0,0]
    const game = new Game()
    let result = game.score(rolls);

    expect(result).to.equal(44)

    rolls = [0,10,10,0,5,2,0,0,0,0]
    result = game.score(rolls)

    expect(result).to.equal(44)
  })

  xit('should score a combination of strikes and spares', () => {
    const rolls: number[] = [10,0,7,3,3,7,0,10,7,3,4]
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(77)
  })
})

describe('Special Game Combinations', () => {
  xit('should score a full house of strikes', () => {
    const rolls: number[] = [0,10.10,0,0,10,0,10,10,0];
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(200) // Double check
  })

  xit('should score a fulle house of spares', () => {
    const rolls: number[] = [7,3,4,6,5,5,9,1,8,2,4]
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(80)
  })

  xit('should score a gutter game', () => {
    const rolls: number[] = [0,0,0,0,0,0,0,0,0,0];
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal(0);
  })

  xit('should score a dutch 200', () => {
    // TODO: what is a dutch 200?
    const rolls: number[] = [];
    const game = new Game()
    const result = game.score(rolls);

    expect(result).to.equal('TODO')
  })
})
