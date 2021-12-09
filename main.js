//Get needed DOM elements
const randomizeButton = document.getElementById("randomizeButton");
const evenNumbersRow = document.getElementById("evenNumbers");
const oddNumbersRow = document.getElementById("oddNumbers");

//Variables declaration
let numbers = [];
let oddNumbers = [];
let evenNumbers = [];

//Handle button click
randomizeButton.addEventListener("click", () => {
  fillNumbersByRandom(20);
  sortNumbersToArrays();
  printNumbersOnTable();
});

//Generate specific amount of random numbers and fill numbers array with it
const fillNumbersByRandom = (amount) => {
  for (let i = 0; i < amount; i++) {
    let randomNumber = Math.floor(Math.random(0, 100) * 100);
    numbers.push(randomNumber);
  }
};

//Check odd and even numbers from numbers array and fill adequate arrays
const sortNumbersToArrays = () => {
  oddNumbers = [];
  evenNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 == 0) {
      evenNumbers.push(number);
    } else oddNumbers.push(number);
  });
  numbers = [];
};

//Sort and print arrays on table columns
const printNumbersOnTable = () => {
  evenNumbers.sort(function (a, b) {
    return a - b;
  });
  oddNumbers.sort(function (a, b) {
    return a - b;
  });

  evenNumbersRow.innerText = evenNumbers.toString();
  oddNumbersRow.innerText = oddNumbers.toString();
};
