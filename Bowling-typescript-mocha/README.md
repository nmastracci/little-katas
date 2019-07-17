### Scoring Bowling: Typescript with Mocha

# Rules

- A game is made up of 10 frames.
- Each frame has 10 pins and is reset each frame.
- A frame can be one or two rolls, depending on:
  1. A strike (knocking all 10 pins down on the first roll of the frame) ends the frame.
  2. Any number below 10 on the first roll allows a second roll.
- The final (or running) score is the sum of all frames where:
  1. A strike is 10 points + the next two rolls.
  2. A spare is 10 points + the next roll.
  3. Anything else is 1 point per pin cleared in each roll.
- If a spare is thrown in the final (10th) frame the player is awarded one more roll. This roll awards the number of pins cleared onto their score (0 to 10 bonus points).
