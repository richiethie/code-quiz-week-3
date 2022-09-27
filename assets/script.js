var h1 = document.querySelector('h1')
var questionsEl = document.getElementById('questions')
var scores = document.getElementById('scores')
var startBtn = document.getElementById('next')
var timerEl = document.getElementById('timer')
var h3 = document.getElementById('description')
var form = document.querySelector('form')
var correctIncorrect = document.getElementById('correctIncorrect')
var input = document.getElementById('enterInitials')
var submit = document.getElementById('submitInitials')

var index = 0
var timeLeft = 120
var highScores = []
var newScore = {
    score: 0,
    user: 'RT'
}

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
    
    if (questionsList[index].correct === buttonElement.innerHTML) {
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
    var finalScore = timeLeft
    h3.textContent = "Your final score is: " + finalScore
    form.style.display = "inline-flex"
    input.style.display = "flex"
    submit.style.display = "flex"
    submit.addEventListener('click', highScore)
    console.log(finalScore)

}


function highScore (event) { // fix local storage, need to target text of input and display
    event.preventDefault()
    console.log(event.target.innerHTML)
    h1.textContent = "Highscores"
    h3.textContent = ""
    form.innerHTML = ""
    // console.log(initialsScore)
    highScores.push(newScore)
    localStorage.setItem('initials', input.value)
    localStorage.setItem('finalTime', timeLeft)
    var initials = localStorage.getItem('initials', input.value)
    var finalTime = localStorage.getItem('finalTime', timeLeft)
    for (var i = 0; i < highScores.length; i++) {
        var newScore = highScores[i];
        var li = document.createElement('li')
        li.classList.add('highScores')
        li.textContent = initials + " - " + finalTime
        scores.appendChild(li)
    }

    // var highScores = []
    // var newScore = {
    //     score: 0,
    //     user: 'RT'
    // }
    
}
// use local storage to set highscores value 
// get highscores valur from localStorage andattach to html element

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