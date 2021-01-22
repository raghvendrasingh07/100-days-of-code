const calculate = () => {
  let english = document.getElementById("english").value.trim();
  let physics = document.getElementById("physics").value.trim();
  let maths = document.getElementById("maths").value.trim();
  let chemistry = document.getElementById("chemistry").value.trim();
  let cs = document.getElementById("cs").value.trim();
  var container = document.querySelector(".container");
  var message = document.querySelector(".message");

  if (
    english == "" ||
    physics == "" ||
    maths == "" ||
    chemistry == "" ||
    cs == ""
  ) {
    message.innerHTML = `Please! Enter your marks.`;
  } else {
    let total =
      parseFloat(english) +
      parseFloat(physics) +
      parseFloat(maths) +
      parseFloat(chemistry) +
      parseFloat(cs);
    let perc = Math.round((total / 500) * 100);
    let grade = "";
    if (perc <= 100 && perc >= 80) {
      grade = "A";
    } else if (perc <= 79 && perc >= 60) {
      grade = "B";
    } else if (perc <= 59 && perc >= 40) {
      grade = "C";
    } else {
      grade = "F";
    }
    message.innerHTML = `Total Score is ${total} with ${perc}% and grade is ${grade}.`;
  }
};
