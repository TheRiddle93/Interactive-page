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

const fizzBuzz = function (n) {
  const array = [];
  for (let i = 1; i <= n; i++) {
    if (i == n * 3) {
      array.push("Fizz");
    } else if (i == n * 5) {
      array.push("Buzz");
    } else if (i == n * 5 && n * 3) {
      array.push("FizzBuzz");
    } else if (i != n * 5 && n * 3) {
      array.push(i);
    }
  }
  return array;
};

// Output data back to HTML/Browser

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
var btn1 = document.getElementById("btn1");
var input1 = document.getElementById("input1");
var output1 = document.getElementById("output1");
inputValue = input.value;

btn1.addEventListener("click", function () {
  input = document.getElementById("input1");
  inputValue = input.value;
  output.value = rentalPrice(inputValue);
});

const rentalPrice = function (days) {
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
};

// **** Function 2 ****
var btn2 = document.getElementById("btn2");
var input2 = document.getElementById("input2");
var output2 = document.getElementById("output2");
inputValue = input.value;

btn1.addEventListener("click", function () {
  input = document.getElementById("input2");
  inputValue = input.value;
  output.value = rentalPrice(inputValue);
});
