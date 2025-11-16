// -------------------------
// GitHub Copilot Quiz Logic
// -------------------------

document.getElementById("submitQuiz").addEventListener("click", function () {

    const answers = {
        q1: "b",
        q2: "a",
        q3: "b",
        q4: "a",
        q5: "b"
    };

    const explanations = {
        q1: "Copilot generates contextual, intelligent code suggestions.",
        q2: "It is powered by GPT-based language models trained on code.",
        q3: "AI may unintentionally output copyrighted or insecure code.",
        q4: "Copilot speeds up development by autocompleting code and creating components.",
        q5: "Copilot’s code still requires human review for accuracy and safety."
    };

    let score = 0;
    let resultsHTML = "<h3>Your Results</h3>";

    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);

        if (!userAnswer) {
            resultsHTML += `<p class="missed">You did not answer Question ${question.substring(1)}.</p>`;
            continue;
        }

        if (userAnswer.value === answers[question]) {
            score++;
            resultsHTML += `
                <p class="correct">
                    Question ${question.substring(1)}: Correct!<br>
                    <em>${explanations[question]}</em>
                </p>`;
        } else {
            resultsHTML += `
                <p class="incorrect">
                    Question ${question.substring(1)}: Incorrect.<br>
                    Correct answer: <strong>${answers[question].toUpperCase()}</strong><br>
                    <em>${explanations[question]}</em>
                </p>`;
        }
    }

    resultsHTML = `<h2>You scored ${score}/5</h2>` + resultsHTML;

    document.getElementById("quizResults").innerHTML = resultsHTML;
});
