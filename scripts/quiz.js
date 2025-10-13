function checkAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const result = document.getElementById("result");

  let score = 0;
  if (q1 && q1.value === "b") score++;
  if (q2 && q2.value === "c") score++;
  if (q3 && q3.value === "a") score++;

  result.textContent = `You scored ${score}/3!`;

  if (score === 3) {
    result.style.color = "#28a745";
  } else if (score === 2) {
    result.style.color = "#ffcc00";
  } else {
    result.style.color = "#ff4da6";
  }
}