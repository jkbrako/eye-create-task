  function startQuiz(){
    var textInput = "";
    document.getElementById('start').onclick= "show"

    if(document.getElementById('start').onclick) {
      colorOne();
    }
  }
  var results = [];
  function colorOne() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorTwo() {
    var textInput = "";

  }

  function colorThree() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorFour() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorFive() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorSix() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorSeven() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorEight() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorNine() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
      colorTwo();
    } else {
      textInput = "";
    }
  }

  function colorTen() {
    var textInput = "";
    var response = document.getElementById('textInput').innerHTML;
    if (response > 0) {
        colorTwo();
        if (response = 15) {
          console.log("CORRECT");
          results = []
        } else {
          console.log ("WRONG");
        }
    } else {
      textInput = "";
    }
  }

  function result() {
    // show image based how many answers are correct
    //
    }
  }
