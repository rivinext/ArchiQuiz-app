const API_URL = "https://script.google.com/macros/s/あなたのGASデプロイURL/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    showQuiz(data);
  });

function showQuiz(questions) {
  const quiz = questions[0]; // とりあえず1問目
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <p><strong>カテゴリ：</strong>${quiz.category}</p>
    <p>${quiz.question}</p>
    ${quiz.choices.map((choice, i) => `
      <button onclick="checkAnswer('${choice}', '${quiz.answer}', '${quiz.explanation}')">
        ${choice}
      </button>
    `).join("<br>")}
  `;
}

function checkAnswer(selected, correct, explanation) {
  const result = selected === correct ? "✅ 正解！" : `❌ 不正解… 正解は ${correct}`;
  alert(result + "\n" + explanation);
}
