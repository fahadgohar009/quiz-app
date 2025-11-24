const questions = [
    {
        question: "HTML stands for?",
        answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    },
    {
        question: "CSS is used for styling web pages.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "Which tag is used for JavaScript?",
        answers: ["<javascript>", "<script>", "<js>"],
        correct: 1
    },
    {
        question: "Flexbox is used for layout design.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "DOM stands for?",
        answers: ["Document Object Model", "Data Output Method", "Desktop Oriented Mode"],
        correct: 0
    }
];

let index = 0;
let score = 0;

// DOM elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const nextBtn = document.getElementById("next-btn");

document.getElementById("start-btn").addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    let q = questions[index];
    questionText.textContent = q.question;
    answersContainer.innerHTML = "";
    nextBtn.classList.add("hidden");

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = ans;

        btn.addEventListener("click", () => selectAnswer(i, btn));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(i, btn) {
    let correctIndex = questions[index].correct;

    if (i === correctIndex) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
    }

    Array.from(answersContainer.children).forEach(b => b.disabled = true);
    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    document.getElementById("score-text").textContent = `${score} / ${questions.length}`;

    let message = score >= 4 ? "Great Job! 🎉" : "Try Again 😢";
    document.getElementById("message-text").textContent = message;
}
