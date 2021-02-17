var btn = document.getElementById("btn");
var txtInput = document.getElementById("txtInput");
var txtOutput = document.getElementById("txtOutput");
var input = txtInput.value;
/*
function sayHi(hello) {
  txtInput = document.getElementById("txtInput");
  txtOutput = document.getElementById("txtOutput");
  input = txtInput.value;
  txtOutput.value = "Hi there, " + hello + "!";
}*/

const hey = function (hello) {
  return "Hello there " + hello;
};

btn.addEventListener("click", function () {
  txtInput = document.getElementById("txtInput");
  input = txtInput.value;
  txtOutput.value = hey(input);
});
