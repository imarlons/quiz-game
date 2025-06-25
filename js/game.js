const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.getAttribute("data-correct") === "true";

    // Adiciona as classes de cor, que já terão pointer-events: none; no CSS
    if (isCorrect) {
        questionsCorrect++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("wrong");

        // Opcional: Mostrar a resposta correta se o usuário errou
        document.querySelectorAll(".answer").forEach((button) => {
            if (button.getAttribute("data-correct") === "true") {
                button.classList.add("correct");
            }
        });
    }

    // Remove os listeners de todos os botões *após* a seleção
    // Isso é importante para evitar múltiplos cliques antes do timeout
    document.querySelectorAll(".answer").forEach((button) => {
        button.removeEventListener("click", nextQuestion);
    });


    // Aguarda um pequeno tempo antes de ir para a próxima questão
    setTimeout(() => {
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            loadQuestion();
        } else {
            finish();
        }
    }, 1000);
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} perguntas.`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = ""; // Limpa as respostas anteriores
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">
                ${answer.option}
            </button>
        `;
        answers.appendChild(div);
    });

    // Adiciona o evento de clique a todos os botões de resposta recém-criados
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();