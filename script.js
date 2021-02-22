// **** Function 0 ****
// Input data from HTML
var btn = document.getElementById("btn");
var input = document.getElementById("input");
var output = document.getElementById("output");
var inputValue = input.value;

// Processing input data in function
/*const rentalPrice = function (days) {
  let rentDays = days;
  const rentPrice = 40;
  let rentTotal = rentPrice * rentDays;
  if (rentDays >= 7) {
    rentSum = rentTotal - 50;
    return "$" + rentSum + " Rent payment";
  } else if (rentDays >= 3) {
    rentSum = rentTotal - 20;
    return "$" + rentSum + " Rent payment";
  } else {
    return "$" + rentTotal + " Rent payment";
  }
};*/
// A Fizzbuzz function to return output to the webpage
const fizzBuzz = function (n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      array.push("FizzBuzz");
    } else if (i % 3 == 0) {
      array.push("FIzz");
    } else if (i % 5 == 0) {
      array.push("Buzz");
    } else {
      array.push(i);
    }
  }
  return array;
};

// Output data back to HTML/Browser
// First btn for value output
btn.addEventListener("click", function () {
  input = document.getElementById("input");
  inputValue = input.value;
  // 3. Ouput.value = 1. (inputValue) prossesed in 3. function(inputValue).
  //output.value = rentalPrice(inputValue);
  output.value = fizzBuzz(inputValue);
});

// The next step is to feed the argument with data from apis
// And return it to output.value

// write any function here and call it in the btn.addEventListener . with output.value = function with inpuValue as argument.

// **** Function 1 ****
// Second button for value output
var btn1 = document.getElementById("btn1");
var input1 = document.getElementById("input1");
var output1 = document.getElementById("output1");
var inputValue1 = input1.value;

btn1.addEventListener("click", function () {
  input1 = document.getElementById("input1");
  inputValue1 = input1.value;
  output1.value = rentalPrice(inputValue1);
});

const rentalPrice = function (days) {
  let rentDays = days;
  const rentPrice = 50;
  let rentTotal = rentPrice * rentDays;
  if (rentDays >= 7) {
    rentSum = rentTotal - 50;
    return "$" + rentSum + " Rent payment";
  } else if (rentDays >= 3) {
    rentSum = rentTotal - 20;
    return "$" + rentSum + " Rent payment";
  } else {
    return "$" + rentTotal + " Rent payment";
  }
};

// **** Function 2 ****
// Third button for value output
var btn2 = document.getElementById("btn2");
var input2 = document.getElementById("input2");
var output2 = document.getElementById("output2");
var inputValue2 = input2.value;

// Function for the value output

function multiply (param1) {
return  param1 ** 5;
};

btn2.addEventListener("click", function () {
  input2 = document.getElementById("input2");
  inputValue2 = input2.value;
  output2.value = multiply(inputValue2);
});
