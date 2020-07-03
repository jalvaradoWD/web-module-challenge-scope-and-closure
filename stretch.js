(function () {
  var a = (b = 3);
})();
console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

const createBase = (num) => {
  return (addedNum) => {
    return num + addedNum;
  };
};

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

const createLastName = (lastName) => {
  return (firstName) => {
    return `${firstName} ${lastName}`;
  };
};

const lastNameJones = createLastName("Jones");

console.log(lastNameJones("Jose"));
console.log(lastNameJones("Tim"));
