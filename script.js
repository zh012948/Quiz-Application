const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Montreal", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "J.K. Rowling", correct: false },
            { text: "Charles Dickens", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Cu", correct: false },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1914", correct: false },
            { text: "1916", correct: false },
            { text: "1920", correct: false },
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Alexander Graham Bell", correct: true },
            { text: "Thomas Edison", correct: false },
            { text: "Nikola Tesla", correct: false },
            { text: "Albert Einstein", correct: false },
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true },
            { text: "K2", correct: false },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false },
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Liechtenstein", correct: false },
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Jane Austen", correct: true },
            { text: "Emily Brontë", correct: false },
            { text: "George Eliot", correct: false },
            { text: "Charles Dickens", correct: false },
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false },
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "John von Neumann", correct: false },
            { text: "Blaise Pascal", correct: false },
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Joseph Lister", correct: false },
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Canberra", correct: true },
            { text: "Brisbane", correct: false },
        ]
    },
    {
        question: "Who wrote 'The Odyssey'?",
        answers: [
            { text: "Homer", correct: true },
            { text: "Virgil", correct: false },
            { text: "Sophocles", correct: false },
            { text: "Euripides", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Osmium", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Nile River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false },
        ]
    },
    {
        question: "Which is the largest internal organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: true },
            { text: "Lung", correct: false },
            { text: "Kidney", correct: false },
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "6", correct: false },
            { text: "7", correct: false },
            { text: "8", correct: true },
            { text: "9", correct: false },
        ]
    },
    {
        question: "Who painted 'The Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Claude Monet", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: false },
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Tomato", correct: false },
            { text: "Avocado", correct: true },
            { text: "Pepper", correct: false },
            { text: "Lettuce", correct: false },
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "George Orwell", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Leo Tolstoy", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "O2", correct: false },
            { text: "H2", correct: false },
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false },
            { text: "George Washington", correct: true },
            { text: "John Adams", correct: false },
        ]
    },
    {
        question: "Which planet is known as the Morning Star or the Evening Star?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false },
        ]
    },
    {
        question: "What is the hardest rock?",
        answers: [
            { text: "Granite", correct: false },
            { text: "Marble", correct: false },
            { text: "Diamond", correct: true },
            { text: "Quartz", correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none"; // Hide next button at the start
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener('click', startQuiz);
}

startQuiz();
