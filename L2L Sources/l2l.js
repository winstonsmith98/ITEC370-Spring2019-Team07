var qNums = [0];
var qs = [0];
var count = 1;

function adv() {


  for (var i = 0; i < qNums.length; i++) {
    qNums[i] +=1;
    //alert(qNums);
    switch (qNums[i]) {
      case 1:
        document.getElementById("q1").style.display = "block";

        break;
      case 2:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
        break;
      case 3:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";

        break;
      case 4:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "block";
        break;
      case 5:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "block";
        break;
      case 6:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "block";
        break;
      case 7:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "block";
        break;
      case 8:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "block";
        break;
      case 9:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "block";
        break;
      case 10:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "block";
        break;
      default:
        document.getElementById("q10").style.display = "none";

    }
  }
    //alert(qNums);
  if(qNums > 10) {
    alert("Congratulations! Click 'Submit' to view your score!");
    qNums = 10;
  }


  document.getElementById("qNum").innerHTML = "Question Number: " + qNums;
  count++;
}

var cCorrect = 0;
function subQ() {
  if(qNums == 1 ) {
    if(document.getElementById("ques1a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 2) {
      if(document.getElementById("ques2a").checked == true) {
          alert("YES!");
          cCorrect++;
      }
  } else if(qNums == 3) {
    if(document.getElementById("ques3a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 4) {
    if(document.getElementById("ques4a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 5) {
    if(document.getElementById("ques5a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 6) {
    if(document.getElementById("ques6a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 7 ) {
    if(document.getElementById("ques7a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 8) {
    if(document.getElementById("ques8a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 9) {
    if(document.getElementById("ques9a").checked == true) {
        alert("YES!");
        cCorrect++;
    }
  } else if(qNums == 10) {
    if(document.getElementById("ques10a").checked == true) {

        cCorrect++;
    }
    alert("Your score is: " + cCorrect + " / 10!");
  }

  if(qNums > 10) {

  }
}
