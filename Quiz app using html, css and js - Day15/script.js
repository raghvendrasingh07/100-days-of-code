window.onload = function () {
  show(0);
};

let questions = [
  {
    id: 1,
    question: "What is SI Unit of Power?",
    answer: "Watt",
    options: ["Watt", "Joule", "Maxwell", "Henry"],
  },
  {
    id: 2,
    question: "What is SI Unit of Velocity?",
    answer: "meter per second",
    options: [
      "meter per second square",
      "kilogram",
      "meter per second",
      "Pascal",
    ],
  },
  {
    id: 3,
    question: "When X-rays are produced",
    answer: "heat is generated at the target",
    options: [
      "heat is generated at the target",
      "heat is absorbed at the target",
      "the temperature of the target remains constant",
      "brilliant light is seen at the target",
    ],
  },
  {
    id: 4,
    question: "Cathode rays are",
    answer: "negatively charged",
    options: [
      "electromagnetic wave",
      "positively charged",
      "negatively charged",
      "neutral",
    ],
  },
  {
    id: 5,
    question: "Microwave oven consumes less power due to",
    answer: "short wavelength of radiation",
    options: [
      "small frequency of radiation",
      "large frequency as well as wavelength of radiation",
      "small frequency as well as wavelength of radiation",
      "short wavelength of radiation",
    ],
  },
];

function show(number) {
  let qnumber = document.getElementById("qnumber");
  let question = document.getElementById("question");
  let boxRight = document.querySelector(".box-right");
  let btn = "";

  qnumber.innerHTML = `${number + 1} of ${questions.length}`;
  question.innerHTML = questions[number].question;
  questions[number].options.forEach((val) => {
    btn += `<button onclick="checkAns('${val}')">${val}</button>`;
  });
  boxRight.innerHTML = btn;
}

let ques_count = 0;
let score = 0;

function checkAns(ans) {
  let container = document.querySelector(".container");

  if (ans == questions[ques_count].answer) {
    score += 1;
  }

  if (ques_count == questions.length - 1) {
    container.innerHTML = `<h3>Your score is ${score} out of ${questions.length}.</h3>`;
    return;
  }
  ques_count++;
  show(ques_count);
}
