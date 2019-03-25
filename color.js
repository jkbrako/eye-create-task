  var textInput = "";
  var results = [];
  var start = document.createElement("INPUT");

let x = document.getElementsByClassName("hide");
let timesClicked = 1;

// declare variables for each to determine which question is cleared/displayed
let one = document.getElementsByClassName("hide");
let two = document.getElementsByClassName("hide");
let three = document.getElementsByClassName("hide");
let four = document.getElementsByClassName("hide");
let five = document.getElementsByClassName("hide");
let six = document.getElementsByClassName("hide");
let seven = document.getElementsByClassName("hide");
let eight = document.getElementsByClassName("hide");
let nine = document.getElementsByClassName("hide");
let ten = document.getElementsByClassName("hide");


function submit(){
  if (!one) {
    return;
  }
  for(let y = 0; y < [timesClicked].length; y++) {
    one[y].style.display = "none";
    colorOne()
  }
/*  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    two[y].style.display = "none";
  }
  for(let y = 0; y < [timesClicked].length; y++) {
    three[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    four[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    five[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    six[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    seven[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    eight[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    nine[y].style.display = "none";
  }
  timesClicked++;
  for(let y = 0; y < [timesClicked].length; y++) {
    ten[y].style.display = "none";
  }
  timesClicked++; */
}

  function startQuiz() {
    start.setAttribute("type", "text");
    start.setAttribute("value", "");
    document.body.appendChild(start);
}

  function colorOne() {
  /*  if (start != 74) {
      start.setAttribute("value", "");
    } */
      if (start !== 74) {
        console.log("WRONG");
      } else if (start == 74) {
        console.log ("CORRECT");
        results.push("74")
    }
    /* let one = document.getElementsByClassName("hide");
    for(let y = 0; y < one.length; y++) {
      one[y].style.display = "none";
    } */
}

  function colorTwo() {
    if (start !== 0) {
      colorThree();
    } else {
    start = textInput;
  }
      if (start == 12) {
        console.log("CORRECT");
        results.push("12");
      } else {
        console.log ("WRONG");
      }
    }


  function colorThree() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorFour();
    } else {
      start = textInput;
  }
      if (start == 29) {
        console.log("CORRECT");
        results.push("29");
      } else {
        console.log ("WRONG");
      }
}

  function colorFour() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorFive();
    } else {
      start = textInput;
  }
      if (start == 2) {
        console.log("CORRECT");
        results.push("2");
      } else {
        console.log ("WRONG");
      }
}

  function colorFive() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorSix();
    } else {
      start = textInput;
  }
      if (start == 8) {
        console.log("CORRECT");
        results.push("8");
      } else {
        console.log ("WRONG");
      }
}

  function colorSix() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorSeven();
    } else {
      start = textInput;
  }
      if (start == 7) {
        console.log("CORRECT");
        results.push("7")
      } else {
        console.log ("WRONG");
      }
}

  function colorSeven() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorEight();
    } else {
      start = textInput;
  }
      if (start == 8) {
        console.log("CORRECT");
        results.push("8");
      } else {
        console.log ("WRONG");
      }
}

  function colorEight() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorNine();
    } else {
      start = textInput;
    }
      if (start == 26) {
        console.log("CORRECT");
        results.push("26");
      } else {
        console.log ("WRONG");
    }
}

  function colorNine() {
    var textInput = "";

    if (start > 0 || start < 0) {
      colorTen();
    } else {
      start = textInput;
    }
      if (start == 6) {
        console.log("CORRECT");
        results.push("6");
      } else {
        console.log ("WRONG");
      }
  }

  function colorTen() {
    var textInput = "";

    if (start > 0 || start < 0) {
        result();
      } else {
        start = textInput;
      }
        if (start == 15) {
          console.log("CORRECT");
          results.push("15");
        } else {
          console.log ("WRONG");
        }
  }

  function result() {
    // show image based how many answers are correct
    
  var scores = console.log(results.length);

  for (i = 0; i < i.length; i++)
    if (results.length == 10 && results.length > 8) {
      document.getElementById("final").src += "blind-pics/best-result.gif";
    }
    if (results.length < 7 && results.length > 5) {
      document.getElementById("final").src += "blind-pics/colorblind.gif";
    }
    if (results.length < 4) {
      document.getElementById("final").src += "blind-pics/FG-bad.jfif";
    }
}
