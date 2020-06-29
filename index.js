// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *    counter1 has the variable "count" inside the function scope. counter2 has the variable "count" on the global scope.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 *    counter1 is using closure. Although counter1 can access variables from the global scope, everything from the global scope can't access the variable in the counter1 function. The functions scope is blocked off from anything unless if there is a variable or function within the counter1's function scope.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *    For counter1, it is possible to create multiple counters easily that can keep track of its own counter.
 *    For counter2, the count variable is available for the entire file's scope. It can be useful if there is a consistent source of information that can be accessed by any function or variable. Almost like a Todo list.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;

  return function counter() {
    console.log(count);
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * 3);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, numOfInnings) {
  let game = {
    Home: 0,
    Away: 0,
  };

  for (let i = 0; i < numOfInnings; i++) {
    game.Home += inning();
    game.Away += inning();
  }

  return game;
}

console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, numOfInnings) {
  let inningsArray = [];
  let homeScore = 0;
  let awayScore = 0;

  for (let i = 0; i < numOfInnings; i++) {
    let add1 = i + 1;
    let placing;
    homeScore += inning();
    awayScore += inning();

    switch (i) {
      case 0:
        placing = `${add1}st inning:`;
        break;
      case 1:
        placing = `${add1}nd inning:`;
        break;
      case 2:
        placing = `${add1}rd inning:`;
        break;
      default:
        placing = `${add1}th inning:`;
        break;
    }

    let scoringStructure = {
      firstHalf: placing,
      secondHalf: `${homeScore} - ${awayScore}`,
    };
    console.log(scoringStructure.firstHalf, scoringStructure.secondHalf);

    inningsArray.push(scoringStructure);
  }

  console.log(
    `\nFinal score: ${inningsArray[inningsArray.length - 1].secondHalf}`
  );
}

scoreboard(inning, 9);
