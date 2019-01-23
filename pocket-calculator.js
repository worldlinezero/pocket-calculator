let numOp = "";
var calcState = 0
let calcMemSave= "";
let opUseState = 0;
var pointUseState = false;
var calcClear = false;
var error = false;
var number = ""

function zero () {
  if (calcState == 1) {
    numOp = "0"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
    numOp += "0"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function one() {
  if (calcState == 1) {
    numOp = "1"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
    numOp += "1"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function two() {
  if (calcState == 1) {
    numOp = "2"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
    numOp += "2"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function three() {
  if (calcState == 1) {
    numOp = "3"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
  numOp += "3"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function four() {
  if (calcState == 1) {
    numOp = "4"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
  numOp += "4"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function five() {
  if (calcState == 1) {
    numOp = "5"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
     if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
  numOp += "5"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function six() {
  if (calcState == 1) {
    numOp = "6"
  } else {
    if (opUseState == 1) {
    opUseState = 0;
    numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
  numOp += "6"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function seven() {
  if (calcState == 1) {
    numOp = "7"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
  numOp += "7"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function eight() {
  if (calcState == 1) {
    numOp = "8"
  } else {
    if (opUseState == 1) {
      numOp = calcMemSave;
      opUseState = 0;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
  numOp += "8"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function nine() {
  if (calcState == 1) {
    numOp = "9"
  } else {
    if (opUseState == 1) {
      numOp = calcMemSave;
      opUseState = 0;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
    numOp += "9"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}


function cancellation() {
  var div = document.getElementById("calcDisplay");
  div.innerHTML = 0;
  numOp = " "
  calcMemSave = ""
  opUseState = 0;
  calcClear = true;
  calcState = 0;
  if (calcClear == true) {
    pointUseState = false;
    document.getElementById("decimalization").disabled = false;
  }
}

function negation() {
  var div= document.getElementById("calcDisplay");
  numOp = Number(numOp) - 2(Number(numOp));
  div.innerHTML = numOp;
  calcState = 0;
}


function summation() {
  var div= document.getElementById("calcDisplay");
  numOp = eval(numOp);
  div.innerHTML = Number(numOp).toLocaleString();
  if (Number(numOp) > 0 && Number(numOp) < 1 && numOp.length >= 9) {
    div.innerHTML = Math.floor(Number(numOp)).toExponential()
  }
  calcState = 1;
}

function multiplication() {
  var div = document.getElementById("calcDisplay");
  calcMemSave = numOp;
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
  calcMemSave = numOp;
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
  calcMemSave = numOp;
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
  calcMemSave = numOp;
  calcMemSave += "-"
  div.innerHTML = calcMemSave;
  calcState = 0;
  opUseState = 1;
  if (opUseState == 1) {
    document.getElementById("decimalization").disabled = false;
  }
}

function decimalization() {
  if (pointUseState == false){
    var div = document.getElementById("calcDisplay");
    calcMemSave = numOp;
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
  numOp = Number(numOp) * (0.01)
  div.innerHTML = numOp;
  calcState = 0;
}

function openparan () {
  if (calcState == 1) {
    numOp = "("
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
    numOp += "("
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}

function closeparan () {
  if (calcState == 1) {
    numOp = ")"
  } else {
    if (opUseState == 1) {
      opUseState = 0;
      numOp = calcMemSave;
    }
    if (pointUseState == 1) {
      pointUseState = 0;
      numOp = calcMemSave;
    }
    numOp += ")"
  }
  var div = document.getElementById("calcDisplay");
  div.innerHTML = numOp;
}
