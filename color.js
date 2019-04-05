function result() {
    // show image based how many answers are correct
  let scores = [ ]
  if (document.getElementById("1").innerHTML == 74) {
          console.log ("CORRECT");
          scores.push("74");
          document.getElementById("results").value = scores;
      }
    if (document.getElementById("2").innerHTML == 42) {
      console.log("CORRECT");
      scores.push("12");
      document.getElementById("results").value = scores;
    }
    if (document.getElementById("3").innerHTML == 29) {
          console.log ("CORRECT");
          scores.push("74");
          document.getElementById("results").value = scores;
      }
    if (document.getElementById("4").innerHTML == 5) {
      console.log("CORRECT");
      scores.push("12");
      document.getElementById("results").value = scores;

    }
    if (document.getElementById("5").innerHTML == 8) {
          console.log ("CORRECT");
          scores.push("74");
          document.getElementById("results").value = scores;

      }
    if (document.getElementById("6").innerHTML == 7) {
      console.log("CORRECT");
      scores.push("12");
      document.getElementById("results").value = scores;
    }
    if (document.getElementById("7").innerHTML == 8) {
          console.log ("CORRECT");
          scores.push("8");
          document.getElementById("results").value = scores;

      }
    if (document.getElementById("8").value == 26) {
      console.log("CORRECT");
      scores.push("26");
      document.getElementById("results").value = scores;

    }
    if (document.getElementById("9").value == 6) {
          console.log ("CORRECT");
          scores.push("6");
          document.getElementById("results").value = scores;
      }
    if (document.getElementById("10").value == 15) {
      console.log("CORRECT");
      scores.push("15");
      document.getElementById("results").value = scores;
    }
  if (scores.length == 0) {
    console.log("FAIL");
  }
  if (scores.length == 10 && scores.length > 8) {
    document.getElementById("blind-pics").src = "blind-pics/best-result.gif";
    document.getElementById("blind-pics").style.display = "block";
  }
  if (scores.length < 7 && scores.length > 5) {
    document.getElementById("blind-pics").src = "blind-pics/colorblind.gif";
    document.getElementById("blind-pics").style.display = "block";
  }
  if (scores.length < 4) {
    document.getElementById("blind-pics").src = "blind-pics/FG-bad.jfif";
    document.getElementById("blind-pics").style.display = "block";
  }

  document.getElementById("end").style.color = "white";
  document.getElementById("results").style.color = "grey";
  document.getElementById("results").innerHTML = 100-(((scores.length)/10)*100) + "%";
    }


function percent() {
  // needto display chance as value of colorblindness
// document.getElementById("demo").innerHTML = myObject.fullName();

}
