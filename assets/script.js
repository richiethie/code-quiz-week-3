var h1 = document.querySelector('h1')
var questionsEl = document.getElementById('questions')
var startBtn = document.getElementById('next')
var timerEl = document.getElementById('timer')
var h3 = document.getElementById('description')
var form = document.querySelector('form')
var correctIncorrect = document.getElementById('correctIncorrect')

var index = 0
var timeLeft = 10
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
        var choice = questionsList[index].choices[i]
        li.innerText = choice
        li.addEventListener('click', questionAnswered)
        questionsEl.appendChild(li)
    }
    
}

function questionAnswered(event) {
    console.log(questionsList[index].correct)
    var buttonElement = event.target
    index++
    console.log(buttonElement.innerHTML)
    if (index === questionsList.length) {
        endQuiz()
    } else {
        getQuestion()
    }
    if (questionsList[index].correct === buttonElement.innerHTML) { // change if statement??
        correctIncorrect.innerHTML = "Correct" //not displaying correct??
    } else {
        correctIncorrect.innerHTML = "Incorrect"
        timeLeft = timeLeft - 10
    }    
    
    
    
}

function endQuiz() {
    questionsEl.innerText = ""
    correctIncorrect.innerHTML = ""
    h1.textContent = "All done!"
    var finalScore = timeLeft
    h3.textContent = "Your final score is: " + finalScore
    var input = document.createElement('input')
    input.type = 'text'
    input.className = 'enterInitials'
    var submit = document.createElement('input')
    submit.type = 'submit'
    submit.className = 'submitInitials'
    form.appendChild(input)
    form.appendChild(submit)
    submit.addEventListener('click', highScore)
    console.log(finalScore)

}


function highScore (event) {
    event.preventDefault()
    h1.textContent = "Highscores"
    h3.textContent = ""
    form.innerHTML = ""
    highScores.push(newScore)
    localStorage.setItem('highScores', JSON.stringify(highScores))
    var getHighScores = JSON.parse(localStorage.getItem('highScores'))
    getHighScores.inner


    
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