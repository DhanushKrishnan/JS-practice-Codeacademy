/*
In this lesson, we’ll learn how to use “abstraction” in programming by writing functions. In addition to allowing us to reuse our code, functions help to make clear, readable programs. If you encounter countToThree() in a program, you might be able to quickly guess what the function does without having to stop and read the function’s body.
In JavaScript, functions are first class objects. This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.
const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
Let’s pretend this function does important work and needs to be called repeatedly. To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:
const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
*/

// ************* Functions as Data **************** //
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

// ************* Functions as Parameters **************** //
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return func();
  } else {
    return "inconsistent results";
  }
};

console.log();
