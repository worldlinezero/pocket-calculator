let string = "";
var calcState = 0
let calcMemSave= "";
let opUseState = 0;
var pointUseState = false;
var calcClear = false;

function openparan () {
  if (calcState == 1) {
    string = "("
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
    string += "("
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function closeparan () {
  if (calcState == 1) {
    string = ")"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
    string += ")"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function zero () {
  if (calcState == 1) {
    string = "0"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
    string += "0"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function one() {
  if (calcState == 1) {
    string = "1"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
    string += "1"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function two() {
  if (calcState == 1) {
    string = "2"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
    string += "2"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function three() {
  if (calcState == 1) {
    string = "3"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
  string += "3"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function four() {
  if (calcState == 1) {
    string = "4"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
  string += "4"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function five() {
  if (calcState == 1) {
    string = "5"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
     if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
  string += "5"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function six() {
  if (calcState == 1) {
    string = "6"
  } else {
    if (opUseState == 1) {
    opUseState = 0;
    string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
  string += "6"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function seven() {
  if (calcState == 1) {
    string = "7"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      string = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
  string += "7"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function eight() {
  if (calcState == 1) {
    string = "8"
  } else {
    if (opUseState == 1) {
      string = calcMemSave;
      opUseState = 0;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
  string += "8"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function nine() {
  if (calcState == 1) {
    string = "9"
  } else {
    if (opUseState == 1) {
      string = calcMemSave;
      opUseState = 0;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      string = calcMemSave;
    }
    string += "9"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = string;
}

function cancellation() {
  var div = document.getElementById("calcDisplay");
  div.innerHTML = 0;
  string = " "
  calcMemSave = ""
  opUseState = 0;
  calcClear = true;
  calcState = 0;
  if (calcClear == true) {
    pointUseState = false;
    document.getElementById("decimalization").disabled = false;
  }
}

function multiplication() {
  var div = document.getElementById("calcDisplay");
  calcMemSave = string;
  calcMemSave += "*"
  div.innerHTML = calcMemSave;
  calcState = 0;
  opUseState = 1;
  if (opUseState == 1) {
    document.getElementById("decimalization").disabled = false;
  }
}

function addition() {
  var div = document.getElementById("calcDisplay");
  calcMemSave = string;
  calcMemSave += "+"
  div.innerHTML = calcMemSave;
  calcState = 0;
  opUseState = 1;
  if (opUseState == 1) {
    document.getElementById("decimalization").disabled = false;
  }
}

function division() {
  var div = document.getElementById("calcDisplay");
  calcMemSave = string;
  calcMemSave += "/"
  div.innerHTML = calcMemSave;
  calcState = 0;
  opUseState = 1;
  if (opUseState == 1) {
    document.getElementById("decimalization").disabled = false;
  }
}

function subtraction() {
  var div = document.getElementById("calcDisplay");
  calcMemSave = string;
  calcMemSave += "-"
  div.innerHTML = calcMemSave;
  calcState = 0;
  opUseState = 1;
  if (opUseState == 1) {
    document.getElementById("decimalization").disabled = false;
  }
}

function summation() {
  var div= document.getElementById("calcDisplay");
  string = eval(string);
  div.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 0 && Number(string) < 1 && string.length >= 9) {
    div.innerHTML = Math.floor(Number(string)).toExponential()
  }
  calcState = 1;
}

function negation() {
  var div= document.getElementById("calcDisplay");
  string = Number(string) * (-1);
  div.innerHTML = string;
  calcState = 0;
}

function decimalization() {
  if (pointUseState == false){
    var div = document.getElementById("calcDisplay");
    calcMemSave = string;
    calcMemSave += ".";
    div.innerHTML = calcMemSave;
    pointUseState = true;
  }
  if (pointUseState == true) {
    document.getElementById("decimalization").disabled = true;
  }
}

function percentagization() {
  var div = document.getElementById("calcDisplay");
  string = Number(string) * (0.01)
  div.innerHTML = string;
  calcState = 0;
}
