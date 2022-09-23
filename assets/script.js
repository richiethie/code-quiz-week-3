var h1 = document.querySelector('h1')
var questionsEl = document.getElementById('questions')
var nextBtn = document.getElementById('next')
var timerEl = document.getElementById('timer')

var index = 0
var timeLeft = 5

var questionsList = [
    {
        title: "Sample 1",
        correct: "answer 1.1",
        choices: [
            "answer 1.1",
            "answer 2.1",
            "answer 3.1",
            "answer 4.1"
        ]

    }, 
    {
        title: "Sample 2",
        correct: "answer 1.2",
        choices: [
            "answer 1.2",
            "answer 2.2",
            "answer 3.2",
            "answer 4.2"
        ]
    },
    {
        title: "Sample 3",
        correct: "answer 1.3",
        choices: [
            "answer 1.3",
            "answer 2.3",
            "answer 3.3",
            "answer 4.3"
        ]
    },
    {
        title: "Sample 4",
        correct: "answer 1.4",
        choices: [
            "answer 1.4",
            "answer 2.4",
            "answer 3.4",
            "answer 4.4"
        ]
    }
]

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage()
        }
    }, 1000)
}

function sendMessage() {
    alert("Time is up!")
    location.reload()
}

function renderQuestion() {
    h1.innerText = questionsList[index].title
    questionsEl.innerText = ""
    for (var i = 0; i < questionsList[index].choices.length; i++) {
        var li = document.createElement('li')
        var choice = questionsList[index].choices[i]
        li.innerText = choice
        li.addEventListener('click', submitAnswer)
        questionsEl.appendChild(li)
    }
    nextBtn.remove()
    setTime()

}

function submitAnswer() {
    choice = ""
    var rightWrong = document.createElement('p')
    rightWrong.innerText = "WOWOWOW"
    questionsEl.appendChild(rightWrong)
    
}

nextBtn.addEventListener('click', function () {
    renderQuestion()
    index++
}) 

questionsEl.addEventListener('click', function () {
    //if an li is clicked, add note on page that says correct or incorrect
    renderQuestion()
    submitAnswer()
    index++
})

