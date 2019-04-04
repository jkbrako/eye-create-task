  var textInput = "";
<<<<<<< HEAD
  var results = [];
  var start = document.createElement("INPUT");
=======
  let results = [];
  var start = document.createElement("INPUT");
  let scores;
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa

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
<<<<<<< HEAD
      if (start !== 74) {
        console.log("WRONG");
      } else if (start == 74) {
        console.log ("CORRECT");
        results.push("74")
    }
=======
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
    /* let one = document.getElementsByClassName("hide");
    for(let y = 0; y < one.length; y++) {
      one[y].style.display = "none";
    } */
}

  function colorTwo() {
<<<<<<< HEAD
    if (start !== 0) {
=======
  /*  if (start !== 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorThree();
    } else {
    start = textInput;
  }
      if (start == 12) {
        console.log("CORRECT");
        results.push("12");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
=======
      }*/
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
    }


  function colorThree() {


<<<<<<< HEAD
    if (start > 0 || start < 0) {
=======
  /*  if (start > 0 || start < 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorFour();
    } else {
      start = textInput;
  }
      if (start == 29) {
        console.log("CORRECT");
        results.push("29");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
=======
      } */
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
}

  function colorFour() {


<<<<<<< HEAD
    if (start > 0 || start < 0) {
=======
  /*  if (start > 0 || start < 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorFive();
    } else {
      start = textInput;
  }
      if (start == 2) {
        console.log("CORRECT");
        results.push("2");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
=======
      } */
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
}

  function colorFive() {


<<<<<<< HEAD
    if (start > 0 || start < 0) {
=======
  /*  if (start > 0 || start < 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorSix();
    } else {
      start = textInput;
  }
      if (start == 8) {
        console.log("CORRECT");
        results.push("8");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
=======
      } */
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
}

  function colorSix() {


<<<<<<< HEAD
    if (start > 0 || start < 0) {
=======
/*    if (start > 0 || start < 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorSeven();
    } else {
      start = textInput;
  }
      if (start == 7) {
        console.log("CORRECT");
        results.push("7")
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
=======
      } */
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
}

  function colorSeven() {


<<<<<<< HEAD
    if (start > 0 || start < 0) {
=======
  /*  if (start > 0 || start < 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorEight();
    } else {
      start = textInput;
  }
      if (start == 8) {
        console.log("CORRECT");
        results.push("8");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
=======
      }*/
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
}

  function colorEight() {


<<<<<<< HEAD
    if (start > 0 || start < 0) {
=======
/*    if (start > 0 || start < 0) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      colorNine();
    } else {
      start = textInput;
    }
      if (start == 26) {
        console.log("CORRECT");
        results.push("26");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
    }
}

  function colorNine() {


    if (start > 0 || start < 0) {
      colorTen();
    } else {
      start = textInput;
    }
=======
    } */
}

  function colorNine() {
/*
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
      if (start == 6) {
        console.log("CORRECT");
        results.push("6");
      } else {
        console.log ("WRONG");
<<<<<<< HEAD
      }
  }

  function colorTen() {


    if (start > 0 || start < 0) {
        result();
      } else {
        start = textInput;
      }
        if (start == 15) {
=======
      }*/
  }

  function colorTen() {
/*        if (start == 15) {
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
          console.log("CORRECT");
          results.push("15");
        } else {
          console.log ("WRONG");
<<<<<<< HEAD
        }
=======
        }*/
>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa
  }

function result() {
    // show image based how many answers are correct
<<<<<<< HEAD

  var scores = console.log(results.length);

  for (i = 0; i < i.length; i++) {
    if (results.length == 10 && results.length > 8) {
      document.getElementById("img").src += "blind-pics/best-result.gif";
    }
    if (results.length < 7 && results.length > 5) {
      document.getElementById("img").src += "blind-pics/colorblind.gif";
    }
    if (results.length < 4) {
      document.getElementById("img").src += "blind-pics/FG-bad.jfif";
    }
    return results.length;
  }
  document.getElementById("results").innerHTML = results.length;
}
=======
    if (document.getElementById("1").innerHTML == 74) {
          console.log ("CORRECT");
          results.push("74");
          document.getElementById("results").innerHTML = results;
      }
    if (document.getElementById("2").innerHTML == 12) {
      console.log("CORRECT");
      results.push("12");
      document.getElementById("results").innerHTML = results;
    }
    if (document.getElementById("3").innerHTML == 29) {
          console.log ("CORRECT");
          results.push("74");
          document.getElementById("results").innerHTML = results;
      }
    if (document.getElementById("4").innerHTML == 2) {
      console.log("CORRECT");
      results.push("12");
      document.getElementById("results").innerHTML = results;

    }
    if (document.getElementById("5").innerHTML == 8) {
          console.log ("CORRECT");
          results.push("74");
          document.getElementById("results").innerHTML = results;

      }
    if (document.getElementById("6").innerHTML == 7) {
      console.log("CORRECT");
      results.push("12");
      document.getElementById("results").innerHTML = results;
    }
    if (document.getElementById("7").innerHTML == 8) {
          console.log ("CORRECT");
          results.push("74");
          document.getElementById("results").innerHTML = results;

      }
    if (document.getElementById("8").innerHTML == 26) {
      console.log("CORRECT");
      results.push("26");
      document.getElementById("results").innerHTML = results;

    }
    if (document.getElementById("9").innerHTML == 6) {
          console.log ("CORRECT");
          results.push("6");
          document.getElementById("results").innerHTML = results;
      }
    if (document.getElementById("10").innerHTML == 15) {
      console.log("CORRECT");
      results.push("15");
      document.getElementById("results").innerHTML = results;
    }
    console.log(results.length);

/*  for (i = 0; i < i.length; i++) {
    if (results.length == 10 && results.length > 8) {
      document.getElementById("img").src = "blind-pics/best-result.gif";
    }
    if (results.length < 7 && results.length > 5) {
      document.getElementById("img").src = "blind-pics/colorblind.gif";
    }
    if (results.length < 4) {
      document.getElementById("img").src = "blind-pics/FG-bad.jfif";
    }*/
    document.getElementById("results").innerHTML = results.length;
  }

>>>>>>> 48068eb0c91831dcc2871f995bbcad8fcab70caa

function percent() {
  // needto display chance as value of colorblindness
// document.getElementById("demo").innerHTML = myObject.fullName();

}
