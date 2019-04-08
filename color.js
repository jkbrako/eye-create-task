function result() {
  let scores = [ ]
  console.log()
  if (document.getElementById("1").value == 74) {
          console.log ("CORRECT");
          scores.push("74");
          document.getElementById("results").value = scores;
      }
    if (document.getElementById("2").value == 42) {
      console.log("CORRECT");
      scores.push("42");
      document.getElementById("results").value = scores;
       ;
    }
    if (document.getElementById("3").value == 29) {
          console.log ("CORRECT");
          scores.push("29");
          document.getElementById("results").value = scores;
      }
    if (document.getElementById("4").value == 5 || document.getElementById("4").value == 2) {
      console.log("CORRECT");
      scores.push("5");
      document.getElementById("results").value = scores;
    }
    if (document.getElementById("5").value == 8) {
          console.log ("CORRECT");
          scores.push("8");
          document.getElementById("results").value = scores;
      }
    if (document.getElementById("6").value == 7) {
      console.log("CORRECT");
      scores.push("12");
      document.getElementById("results").value = scores;
    }
    if (document.getElementById("7").value == 8) {
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
    document.getElementById("results").innerHTML = "Try Again... OR 100%";
  }
  if (scores.length == 10 && scores.length > 8) {
    document.getElementById("blind-pics").src = "blind-pics/best-result.gif";
    document.getElementById("blind-pics").style.display = "block";
    document.getElementById("results").innerHTML = 100-(((scores.length)/10)*100) + "%";
  }
  if (scores.length < 7 && scores.length > 5) {
    document.getElementById("blind-pics").src = "blind-pics/colorblind.gif";
    document.getElementById("blind-pics").style.display = "block";
    document.getElementById("results").innerHTML = 100-(((scores.length)/10)*100) + "%";
  }
  if (scores.length < 4 && scores.length > 0 ) {
    document.getElementById("blind-pics").src = "blind-pics/FG-oof.gif";
    document.getElementById("blind-pics").style.display = "block";
    document.getElementById("results").innerHTML = 100-(((scores.length)/10)*100) + "%";
  }
  document.getElementById("end").style.color = "white";
  document.getElementById("results").style.color = "grey";
  reset();
}

function reset(){
  document.getElementById("1").value = "";
  document.getElementById("2").value = "";
  document.getElementById("3").value = "";
  document.getElementById("4").value = "";
  document.getElementById("5").value = "";
  document.getElementById("6").value = "";
  document.getElementById("7").value = "";
  document.getElementById("8").value = "";
  document.getElementById("9").value = "";
  document.getElementById("10").value = "";
}
