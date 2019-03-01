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

        if(document.getElementById("ques1k").checked = true) {
          alert("YES!");
        }
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
    alert("Congratulations! Click 'OK' to view your score!");
    qNums = 10;
  }


  document.getElementById("qNum").innerHTML = "Question Number: " + qNums;
  count++;
}
