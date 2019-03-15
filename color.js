  var textInput = "";
  var results = [];
  var start = document.createElement("INPUT");


  function startQuiz() {
    start.setAttribute("type", "text");
    start.setAttribute("value", "");
    document.body.appendChild(start);
}

  function colorOne() {
    if (start != 74 ) {
      start.setAttribute("value", "");

    }
      if (start = 74) {
        console.log("CORRECT");
        results.push = ["74"]
      } else {
        console.log ("WRONG");
    }

      }

  function colorTwo() {
     response = textInput;
    if (response > 0 || response < 0) {
      colorThree();
    } else {
    textInput = "";
  }
      if (response = 12) {
        console.log("CORRECT");
        results.push = ["12"]
      } else {
        console.log ("WRONG");
      }
    }


  function colorThree() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorFour();
    } else {
    textInput = "";
  }
      if (response = 29) {
        console.log("CORRECT");
        results.push = ["29"]
      } else {
        console.log ("WRONG");
      }

}

  function colorFour() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorFive();
    } else {
    textInput = "";
  }
      if (response = 2) {
        console.log("CORRECT");
        results.push = ["2"];
      } else {
        console.log ("WRONG");
      }
}

  function colorFive() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorSix();
    } else {
    textInput = "";
  }
      if (response = 8) {
        console.log("CORRECT");
        results.push = ["8"];
      } else {
        console.log ("WRONG");
      }
}

  function colorSix() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorSeven();
    } else {
    textInput = "";
  }
      if (response = 7) {
        console.log("CORRECT");
        results.push = ["7"]
      } else {
        console.log ("WRONG");
      }
}

  function colorSeven() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorEight();
    } else {
    textInput = "";
  }
      if (response = 8) {
        console.log("CORRECT");
        results.push = ["8"]
      } else {
        console.log ("WRONG");
      }
}

  function colorEight() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorNine();
    } else {
      textInput = "";
    }
      if (response = 26) {
        console.log("CORRECT");
        results.push = ["26"];
      } else {
        console.log ("WRONG");
    }
}

  function colorNine() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
      colorTen();
    } else {
      textInput = "";
    }
      if (response = 6) {
        console.log("CORRECT");
        results.push = ["6"];
      } else {
        console.log ("WRONG");
      }
  }

  function colorTen() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0 || response < 0) {
        result();
      } else {
        textInput = "";
      }
        if (response = 15) {
          console.log("CORRECT");
          results.push = ["15"];
        } else {
          console.log ("WRONG");
        }
  }

  function result() {
    // show image based how many answers are correct
    //
    }
