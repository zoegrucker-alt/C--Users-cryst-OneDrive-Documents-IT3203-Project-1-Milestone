document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  let correct = 0;
  const answers = document.querySelectorAll("input[type='radio']:checked");

  answers.forEach(answer => {
    if (answer.value === "correct") correct++;
  });

  const result = document.getElementById("result");
  result.textContent = `You scored ${correct} out of 4.`;
});