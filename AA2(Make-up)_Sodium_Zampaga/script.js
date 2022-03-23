/*
  * calculating the final grade for 3 subjects with 3 requirements each and displaying it to the user
  * keeping account of the previous quarter grades in computing
*/

// used to keep track of which subject is being calculated and to use the proper id for it
let subNum = 1

let grade1, grade2, grade3;

// get the raw scores from the user's input
function getScores() {
  // to indicate which subject to get the raw scores on based on the id
  let id = "";
  if (subNum == 1) {
    id = "s1";
  } else if(subNum == 2) {
    id = "s2";
  } else {
    id = "s3";
  }

  // getting the value of raw scores and converting it into a float
  let req1 = parseFloat(document.querySelector("#" + id +"req1").value);
  let req2 = parseFloat(document.querySelector("#" + id +"req2").value);
  let req3 = parseFloat(document.querySelector("#" + id +"req3").value);

  getSum(req1, req2, req3);

}

// get the sum of a set of raw scores for 1 subject
function getSum(r1, r2, r3) {
  let sum = r1 + r2 + r3;
  
  getPercent(sum);
}

// get the percent score based on total highest posible score
function getPercent(sum) {
  const HPS = 20 + 30 + 50;
  let percentage = sum / HPS * 100;

  getTenta(percentage);
}

// get the tentative grade using the Pisay grading system
function getTenta(p) {
  let tenta;
  if (p >= 96) {
    tenta = 1.00;
  } else if (p >= 90) {
    tenta = 1.25;
  } else if (p >= 84) {
    tenta = 1.50;
  } else if (p >= 78) {
    tenta = 1.75;
  } else if (p >= 72) {
    tenta = 2.00;
  } else if (p >= 66) {
    tenta = 2.25;
  } else if (p >= 60) {
    tenta = 2.50;
  } else if (p >= 55) {
    tenta = 2.75;
  } else if (p >= 50) {
    tenta = 3.00;
  } else if (p >= 40) {
    tenta = 4.00;
  } else {
    tenta = 5.00;
  }
  
  getFinalGrade(tenta);
}

// get the final grade while keeping account of the previous quarter grade
function getFinalGrade(tenta) {
  let prev = parseFloat(document.querySelector("#prev").value);
  let finalGrade = transmutate((prev / 3) + ((2 * tenta) / 3));

  let id = "";
  // find the id of the element to output the final grade and storing it to be displayed later on
  if (subNum == 1) {
    id = "s1Grade";
    grade1 = finalGrade;
  } else if(subNum == 2) {
    id = "s2Grade";
    grade2 = finalGrade;
  } else {
    id = "s3Grade";
    grade3 = finalGrade;
  }
  // output final grade
  document.getElementById(id).innerHTML = "Grade: " + finalGrade;
}

// getting the equivalent final grade using the Pisay transmutation table from the Student Handbook
function transmutate(g) {
  if (g <= 1.125) {
    return 1.00;
  } else if (g <= 1.375) {
    return 1.25;
  } else if (g <= 1.625) {
    return 1.50;
  } else if (g <= 1.875) {
    return 1.75;
  } else if (g <= 2.125) {
    return 2.00;
  } else if (g <= 2.375) {
    return 2.25;
  } else if (g <= 2.625) {
    return 2.50;
  } else if (g <= 2.875) {
    return 2.75;
  } else if (g <= 3.500) {
    return 3.00;
  } else if (g <= 4.500) {
    return 4.00;
  } else {
    return 5.00;
  }
}
// main function for handling the process of calculating the grades
function calcGrades() {
  getScores();
  subNum++;
  getScores();
  subNum++
  getScores();
}

//display a summary of the grades including some of the user's information
function displayGrades(grade1, grade2, grade3) {
  // getting values from user's input
  let name = document.querySelector("#name").value;
  let secCN = document.querySelector("#secCN").value;
  let subj1 = document.querySelector("#subj1").value;
  let subj2 = document.querySelector("#subj2").value;
  let subj3 = document.querySelector("#subj3").value;

  // show the summary
  document.write("Name: " + name + "<br>")
  document.write("Section and Class Number: " + secCN +"<br>")
  document.write(subj1 + ": " + grade1 + "<br>")
  document.write(subj2 + ": " + grade2 + "<br>")
  document.write(subj3 + ": " + grade3 + "<br>")
}