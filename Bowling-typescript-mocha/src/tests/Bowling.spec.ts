import { expect } from 'chai';
import { totally } from '../Bowling';

describe('Connected Tests', () => {
  it('Totally Works', () => {
    const result = totally();
    expect(result).to.equal('works!');
  });
});

// Thoughts on Tests

// normal games
// // should score a single throw
// // should score two throws which do not add up to a strike or spare
// // should score a spare
// // should score multiple spares
// // should score a strike
// // should score back to back strikes
// // should score a combination of strikes and spares
// special combinations
// // should score a full house of strikes
// // should score a full house of spares
// // should score a gutter game
// // should score a dutch 200
