var h1 = document.querySelector('h1')
var questionsEl = document.getElementById('questions')
var scores = document.getElementById('scores')
var startBtn = document.getElementById('next')
var timerEl = document.getElementById('timer')
var h3 = document.getElementById('description')
var submitForm = document.getElementById('submit')
var correctIncorrect = document.getElementById('correctIncorrect')
var input = document.getElementById('enterInitials')
var submit = document.getElementById('submitInitials')
var highScoresEl = document.getElementById('highScores')
var highScoreForm = document.getElementById('highScoreButtons')
var clear = document.getElementById('clear')
var back = document.getElementById('back')

var index = 0
var timeLeft = 120
// var highScores = []


var questionsList = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        correct: "<script>",
        choices: [
            "<js>",
            "<script>",
            "<javascript>",
            "<scripting>"
        ]

    }, 
    {
        title: "Where is the best place to insert a JavaScript?",
        correct: "The <body> section",
        choices: [
            "The <head> section",
            "Both the <head> and the <body> section",
            "The <body> section",
            "None of the above"
        ]
    },
    {
        title: "How do you call a function named 'myFunction'?",
        correct: "myFunction()",
        choices: [
            "call function myFunction()",
            "call myFunction()",
            "function.call myFunction()",
            "myFunction()"
        ]
    },
    {
        title: "How to write an IF statement in JavaScript?",
        correct: "if (i === 5) {}",
        choices: [
            "if i === 5 then {}",
            "if i = 5 then {}",
            "if (i === 5) {}",
            "if i = 5 {}"
        ]
    }
]

// highScore()

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            sendMessage()
        }
        if (index === questionsList.length) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

function sendMessage() {
    alert("Time is up!")
    endQuiz()
    
}

function startQuiz() {
    h3.innerHTML = ""
    startBtn.remove()
    setTime()
    getQuestion()
}

function getQuestion() {
    choice = ""
    questionsEl.innerText = ""
    h1.textContent = questionsList[index].title
    for (var i = 0; i < questionsList[index].choices.length; i++) {
        var li = document.createElement('li')
        li.classList.add('options')
        var choice = questionsList[index].choices[i]
        li.innerText = choice
        li.addEventListener('click', questionAnswered)
        questionsEl.appendChild(li)
    }
    
}

function questionAnswered(event) {
    var buttonElement = event.target
    
    if (questionsList[index].correct === buttonElement.innerText) {
        correctIncorrect.innerHTML = "Correct"
    } else {
        correctIncorrect.innerHTML = "Incorrect"
        timeLeft = timeLeft - 10
    }    
    index++
    if (index === questionsList.length) {
        
        endQuiz()
    } else {
        
        getQuestion()
    }
    
    
    
    
}

function endQuiz() {
    questionsEl.innerText = ""
    correctIncorrect.innerHTML = ""
    h1.textContent = "All done!"
    var finalScore = timeLeft - 1
    h3.textContent = "Your final score is: " + finalScore
    submitForm.style.display = "inline-flex"
    input.style.display = "flex"
    submit.style.display = "flex"
    submit.addEventListener('click', highScore)

}


function highScore (event) { // fix local storage, need to target text of input and display
    event.preventDefault()
    h1.textContent = "Highscores"
    h3.textContent = ""
    submitForm.innerHTML = ""
    var initials = input.value
    var highScores = JSON.parse(localStorage.getItem('highScores')) || []
    var newScore = {
        score: timeLeft,
        user: initials
    }
    highScores.push(newScore)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    for (var i = 0; i < highScores.length; i++) {
        var score = highScores[i];
        var li = document.createElement('li')
        li.classList.add('highScores')
        li.textContent = score.user + " - " + score.score
        scores.appendChild(li)
    }
    highScoreForm.style.display = "flex"
}

function showHighScores () {
    h1.textContent = "Highscores"
    h3.textContent = ""
    submitForm.innerHTML = ""
    startBtn.remove()
    var highScores = JSON.parse(localStorage.getItem('highScores')) || []
    for (var i = 0; i < highScores.length; i++) {
        var score = highScores[i];
        var li = document.createElement('li')
        li.classList.add('highScores')
        li.textContent = score.user + " - " + score.score
        scores.appendChild(li)
    }
    highScoreForm.style.display = "flex"
}

function clearHighScores() {
    localStorage.removeItem('highScores')
    location.reload()
}

function goBack() {
    location.reload()
}

back.addEventListener('click', goBack)

clear.addEventListener('click', clearHighScores)

highScoresEl.addEventListener('click', showHighScores)


startBtn.addEventListener('click', function () {
    startQuiz()
}) 


// start quiz function 
        // hide home page 
        // add hide class and css once start button is clicked
        // start timer and display timer
        // the last thing this function should do is call getQuestion()

// get question function 
        // variable for current question (assign question from list to this var)
        // update a dom element to display ths questin
        // loop over question choicees 
        // create a button for each question choice 
        // dispaly on page 

// question answered function(event)
        // variable buttonElement = event.target
        // if statement to check if user guessed correctly 
        // give or penalize time based on correct or incorrect answer
        // in// inside if statement, create one html element for feedabck
        // feedback element.textContent = correct or incorrect based on anseer
        // feedbackEl.setAttribute('class', 'feedback')
        // question index++
        // if statemnt to check if we have more questions
            // if no more questions, run endQuiz function
            // else, getQuestion()

// endQuiz()
        // stop timer
        // html element for end of game screen, show this element
        // add variable for final score, attach html element to this variable
          // finalScoreElement = document.getElementById('final-score')
          // ^^ .textcontent = amount of time that is left
          // use css to hide the questions section
        
// highScore()
        // use local storage to set highscores value 
        // get highscores valur from localStorage andattach to html element 