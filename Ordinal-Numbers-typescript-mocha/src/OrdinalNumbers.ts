/**
 * Number is a protected word... forgive me, we'll use digit
 */
export default class Digit {
  digit: number;
  constructor(digit: number) {
    this.digit = digit;
  }

  makeOrdinal() {
    if (this.digit % 10 === 1 && this.digit !== 11) {
      return this.digit + 'st';
    }

    return this.digit + 'th';
  }
}
