document.getElementById("language").addEventListener("change", updateLanguage);

function updateLanguage() {
  var language = document.getElementById("language").value;
  if (language == "1") {
    document.getElementById("calcTitle").innerText = "Choose the calculation";
    document.getElementById("operationTitle").innerText =
      "Choose the calculation";
    document.querySelector("button").innerText = "Confirm Language Change";
    document.getElementById("nextButton").style.display = "inline-block";
  } else if (language == "2") {
    document.getElementById("calcTitle").innerText = "اختار العملية الحسابية";
    document.getElementById("operationTitle").innerText = "اختار الرقم";
      document.querySelector("button").innerText = "تأكيد تغيير اللغة";
    document.getElementById("firstNumber").placeholder = "الرقم الاول";
    document.getElementById("secondNumber").placeholder = "الرقم الثاني";
    document.getElementById("btn").innerHTML = "أحسب";
    document.getElementById("nextButton").style.display = "inline-block";
  }
}

function showCalculator() {
  document.getElementById("calcOptions").style.display = "block";
  document.getElementById("nextButton").style.display = "none";
}

function calculate() {
  var firstNumber = parseFloat(document.getElementById("firstNumber").value);
  var secondNumber = parseFloat(document.getElementById("secondNumber").value);
  var operation = document.getElementById("operation").value;
  var result;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("result").innerText = "Please enter valid numbers";
    return;
  }

  switch (operation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    case "÷":
      if (secondNumber === 0) {
        result = "Cannot divide by zero!";
      } else {
        result = firstNumber / secondNumber;
      }
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result").innerText = "Result: " + result;
}
