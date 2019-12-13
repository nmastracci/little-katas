import { expect } from 'chai';
import { describe } from 'mocha';
import Game from '../Bowling';

describe('Norming Bowling Games', () => {
  it('should score a single throw', () => {
    const rolls:number[] = [7,0,0,0,0,0,0,0,0,0]
    const result = Game.score(rolls);

    expect(result).to.equal(7);
  })

  it.skip('should score two throws which do not add up to  strike or a spare', () => {
    const rolls = [4,1,0,0,0,0,0,0,0,0];
    const result = Game.score(rolls);

    expect(result).to.equal(6)
  })

  it('should score a spare', () => {
    const rolls = [7,3,2,0,0,0,0,0,0,0];
    const result = Game.score(rolls);

    expect(result).to.equal(14)
  })

  it('should score multiple spares', () => {
    const rolls = [7,3,3,7,7,3,1,0,0,0];
    const result = Game.score(rolls);

    expect(result).to.equal(42)
  })

  it('should score a strike', () => {
    let rolls = [10,0,4,2,0,0,0,0,0,0];
    let result = Game.score(rolls);

    expect(result).to.equal(22)

    rolls = [0,10,4,2,0,0,0,0,0,0];
    result = Game.score(rolls);

    expect(result).to.equal(22)
  })

  it('should score back to back strikes', () => {
    let rolls = [10,0,0,10,5,2,0,0,0,0]
    let result = Game.score(rolls)

    expect(result).to.equal(44)

    rolls = [0,10,10,0,5,2,0,0,0,0]
    result = Game.score(rolls)

    expect(result).to.equal(44)
  })

  it('should score a combination of strikes and spares', () => {
    const rolls = [10,0,7,3,3,7,0,10,7,3,4]
    const result = Game.score(rolls)

    expect(result).to.equal(77)
  })
})

describe('Special Game Combinations', () => {
  it('should score a full house of strikes', () => {
    const rolls = [0,10.10,0,0,10,0,10,10,0];
    const result = Game.score(rolls)

    expect(result).to.equal(200) // Double check
  })

  it('should score a fulle house of spares', () => {
    const rolls = [7,3,4,6,5,5,9,1,8,2,4]
    const result = Game.score(rolls);

    expect(result).to.equal(80)
  })

  it('should score a gutter game', () => {
    const rolls = [0,0,0,0,0,0,0,0,0,0];
    const result = Game.score(rolls);

    expect(result).to.equal(0);
  })

  it('should score a dutch 200', () => {
    // TODO: what is a dutch 200?
    const rolls:number[] = [];
    const result = Game.score(rolls);

    expect(result).to.equal('TODO')
  })
})
