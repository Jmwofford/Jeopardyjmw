// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");




var score=0;

var wrongAnswer = function(blockid) {
        
        score -= entertainment.pointVal;
        console.log('negative score pushed.');
        console.log(score)
        $('#scorevalue').text(score)
        console.log(blockid)
        $(blockid).css
}

var rightAnswer = function (blockid) {
  
    score += entertainment.pointVal;
    console.log('positive score pushed.');
    console.log(score)
    $('#scorevalue').text(score)
    console.log(blockid)
}

var tellMeIfChosenAnswerIsCorrectAnswer = function (chosen, correct) {
    var isAnswerCorrect = false;
    if (chosen === correct) {
        isAnswerCorrect = true
    }
    return isAnswerCorrect;
}


// const entertainment = {
//     question: 'What is the Entertainment ??',
//     answer: 'entertainment answer',
//     id: 'e100',
//     pointVal: 200

// }

const entertainmentCategory = [
    {
        question: 'What is Michael Jacksons Most Famous Song??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e100',
        pointVal: 200 
    },
    {
        question: 'What is the Entertainment ??',
        answer: 'entertainment answer',
        id: 'e200',
        pointVal: 400
    },
    {
        question: 'What is the Entertainment ??',
        answer: 'entertainment answer',
        id: 'e300',
        pointVal: 600
    },
    {
        question: 'What is the Entertainment ??',
        answer: 'entertainment answer',
        id: 'e400',
        pointVal: 800
    },
    {
        question: 'What is the Entertainment ??',
        answer: 'entertainment answer',
        id: 'e400',
        pointVal: 1000
    }
]





const geography = {
    question: 'What is Geography ??',
    answer: 'geography answer',
    id: 'g100',
    pointVal: 200
}
const math = {
    question: 'What is Math ??',
    answer: 'math answer',
    id: 'm100',
    pointVal: 200
}
const music = {
    question: 'What is Music ??',
    answer: 'music answer',
    id: 'q100',
    pointVal: 200
}
const art = {
    question: 'What is art ??',
    answer: 'art answer',
    id: 'a100',
    pointVal: 200
}







window.onload= function(){
    $('#scorevalue').text(score)
}


//
//===================================================================//
$('.e100').click(function() { 
    
    var chosen = "";
    
    $(this).html(`<h3>${entertainmentCategory[0].question}</h3>`)
    // .append('<button></button>') for each possible choice
    // make the innerHTML or text of this button = current choice whether 1 2 3 4
    // when this button is clicked, compare it's text or innerHTML to entertainmentCategory[0].correct
    // but we have a function for that
    // var isAnswerCorrect = tellMeIfChosenAnswerIsCorrectAnswer(button.innerHTML, entertainmentCategory[0].correct) 

    // if the text of the clicked button equals the correct answer for this question
    // call your right answer
    // if not
    // call wrong answer

    $(this).append('<button class="iswrong">wrongAnswer</button')
    $(this).append('<button class="iswrong">wrongAnswer</button')
    $(this).append('<button class="iswrong">wrongAnswer</button')
    $(this).append('<button class="isright">RightAnswer</button')
    




    // --------------------------------
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')
     $('.isright').click(function() {
                console.log('this worked RIGHT');
                        rightAnswer('.e100');
                                    })

$('.iswrong').click(function() {

    console.log('this WORKED WRONG');
    wrongAnswer();
})
})




//===================================================================//

$('.g100').click(function() { 
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    

    $(this).html(`<h3>${geography.question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')
     $('.isright').click(function() {
                console.log('this worked RIGHT');
                        rightAnswer('.g100');

                                    })

$('.iswrong').click(function() {

    console.log('this WORKED WRONG');
    wrongAnswer();
})
})
//===================================================================//
//===================================================================//

$('.m100').click(function() { 
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    
    
    $(this).html(`<h3>${math.question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')
     $('.isright').click(function() {
                console.log('this worked RIGHT');
                        rightAnswer();
                                    })

$('.iswrong').click(function() {

    console.log('this WORKED WRONG');
    wrongAnswer();
})
})
//===================================================================//
//===================================================================//

$('.q100').click(function() { 
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    
    
    $(this).html(`<h3>${music.question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')
     $('.isright').click(function() {
                console.log('this worked RIGHT');
                        rightAnswer('.q100');
                        $('.q100').css
                                    })

$('.iswrong').click(function() {

    console.log('this WORKED WRONG');
    wrongAnswer();
})
})
//===================================================================//
//===================================================================//

$('.a100').click(function() { 
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    
    
    $(this).html(`<h3>${art.question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')
     $('.isright').click(function() {
                console.log('this worked RIGHT');
                        rightAnswer();

                                    })

$('.iswrong').click(function() {

    console.log('this WORKED WRONG');
    wrongAnswer();
})
})
//===================================================================//

// A category would be an array of question objects
// A question object would have the actual question as a string, the choices for the user to select as strings, the correct choice as it's own separate string that matches exactly one of the choices, how many points the question is worth, and the id of the question
// for each category, you would create a block and give it:
// the question to show as it's own element
// a way to display how many points it is worth
// a button for each choice
// each button would have an onClick function which would tell you if that button's associated value (in the choices for the question) is equal to the correct answer for that question
// if that value is true
// call your rightAnswer function
// else
// call your wrongAnswer function