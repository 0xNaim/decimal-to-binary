// DOM Selection
const number = document.getElementById("number");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  

  if (number.value === "") {
    alert("Please enter a number");
    return;
  } else if (number.value < 0) {
    alert("Please enter a positive number");
    return;
  } else {
    result.style.visibility = "visible";
  }

  // converting
  const binaryNumber = Number(number.value).toString(2);
  result.innerText = binaryNumber;
});
