# Scope and Closure Challenge

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## JavaScript Foundations

## Scope and Closures

## Objectives

- Explain function scope
- Describe what closure is, how closure is created in a program and why it is important to understand closures in JavaScript

## Introduction

This challenge focuses on both scope and closures.

In this challenge you will be working to build a `scoreboard` (in the console) that takes randomly generated data and keeps track of a game's progress. If you're not familiar with the rules of baseball what you need to know is this: there are 9 innings and teams take turns "at-bat." Teams can only score while they are at bat. A team stops being at bat once they have gotten 3 `outs` by either striking out or through game play. You can read more about baseball rules [here](https://www.rulesofsport.com/sports/baseball.html).

A scoreboard in a major league stadium looks something like this. In fact, the scoreboard at Fenway Park in Boston is actually quite famous.

![Fenway Scoreboard](https://storage.googleapis.com/afs-prod/media/media:e959506330fd4e5890023c93cfbaac55/800.jpeg)

There are layers upon layers of nested functions within the game of baseball. Your challenge today will be to work through tasks associated with these layers, and ultimately to produce a scoreboard that logs in the console.

## Instructions

### Task 1 - Set Up Project and Tests

1. Fork repo and add TL as collaborator on Github
2. Clone _your_ fork (not Lambda's repo by mistake!)
3. `cd` into your newly cloned repository
4. Create a new branch by typing `git checkout -b <firstName-lastName>`
5. Work on your branch, push commits and create PR as usual

### Task 2a - MVP code

Find the file `index.js` and complete the tasks.

### Task 2b - Written questions

Edit the `ReadMe` file with your answers.

1. In your own words, define closure (1-2 sentences).

Closure is realted to a function's scope where if functions or variables are in a function, those items are only accessible within that function.
A child function withing a parent function can use values in the parent function that can be used for useful applications, like recursion.

2. Study the following code, then answer the questions below.

```js
function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6);
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
```

a. Where is closure used in this code? How can you tell?

The closure is in the function within the function. The inner function is taking in the variable "name" that is only accessible in the personalDice function.

b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

The number of faces that dice has never changes. There can be an arguement to how many side the dice has in the inner function.

c. What is the lexical scope of `newRoll`?
The newRoll variable has access to the scope of the inner function in the personalDice function, as well as the personalDice function itself.

### Task 2c - Exit Ticket

Once you begin, you will have 15 minutes to answer the questions [here](https://app.codesignal.com/public-test/WjSzNh9gDrD8Xn8hw/enY3yPRP3nEm7E).

The completion of these questions is mandatory for MVP. However, passing the quiz doesn't affect your standing as a Lambda School student whatsoever. This is Lambda School testing itself! Please answer honestly and to the best of your ability without using external references.

### Task 3 - Stretch Goals

After you have completed the requirements, **create** a new file called `stretch.js` and practice more with closures. There are no tests for these problems.

See if you can complete one or more of the following challenges:

1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions

```js
(function () {
  var a = (b = 3);
})();
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));
```

2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

```js
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

Functional programming is great on having a consistent output from a fixed set of inputs. Like an adding function with 2 arguements, the function takes in 2 numbers and will only return one result which is the sum of the 2 numbers. There is no additional properties added to the result, or have any type of side-effects, it's just the pure result that gets returned.
However, with functional programming, it can very limiting depending on what type of functionality the program is intended for. Like the previous example, a function can be made by taking 2 arguements. If the functions needs to recursively add more arguements like adding the result to another number; it can't since the function was created to only take in 2 arguements.

For Object Oriented Programming (OOP), solves the issue with functional programming where you can create functions that has certain functionality and properties. Functional programming creates functions that takes in input and outputs a single result. OOP creates objects that store information within itself and can access its own data through the use of other functions or functional methods built into the object.
A draw back to OOP is that it can lead to some unintended side-effects to an object. Unlike a function, OOP can be very complex to design. For a simple objects that only has to take in a small amount of information to store is not an issue, only when that object grows to take a vast amount of data can cause some issues. To have an object with a lot of properties and complexity can be a concern in terms of debugging. If there are a lot of methods within an object that relies in it's data and other methods; it can lead to side-effects returning strange values in methods or mutating the object's data to other unintended values.
When creating an object, most of the effort placed on designing the object well enough so that no methods can alter it's data in any way that mutate it from it's intended design.

## Resources

📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

## Submission Format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your Team Lead as a reviewer on the pull request
- [ ] Your Team Lead will count the project as complete by merging the branch back into master
