function ageDays() {
  //var birthyear = prompt('Enter Birth year!');
  var year = new Date().getFullYear();
  var birthyear = document.getElementById("birthYear").value;
  if (birthyear > year) {
    document.getElementById("flex-box-result").innerText =
      "Please! Input Correct BirthYear.";
  } else {
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "ageDays");
    var age = year - birthyear;
    var textAnswer = document.createTextNode("You are " + age + " years old.");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
  }
}
function reset() {
  document.getElementById("ageDays").remove();
}
