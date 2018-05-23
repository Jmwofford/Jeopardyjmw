// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");




var score=0;

var wrongAnswer = function(blockid) {
        
        score -= entertainmentCategory.pointVal;
        console.log('negative score pushed.');
        console.log(score)
        $('#scorevalue').text(score)
        console.log(blockid)
        $(blockid).css
}

var rightAnswer = function (blockid) {
  
    score += entertainmentCategory.pointVal;
    console.log('positive score pushed.');
    console.log(score)
    $('#scorevalue').text(score)
    // console.log(blockid)
}


var tellMeIfChosenAnswerIsCorrectAnswer = function (chosen, correct) {
   
    if (chosen === correct) {
       rightAnswer()
    }
    else {
        wrongAnswer()
    }
    console.log('newWork')
    // return isAnswerCorrect;
}


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
        question: 'Who is the Beatles Drummer??',
        answer: 'John Lennon',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e200',
        pointVal: 400
    },
    {
        question: 'What is Beyonce Last Name??',
        answer: 'Knowles',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e300',
        pointVal: 600
    },
    {
        question: 'What Boxer does Michael B. Jordan Play ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'Creed',
        id: 'e400',
        pointVal: 800
    },
    {
        question: 'Who is Isaiah Rashad ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'TDE artist',
        id: 'e500',
        pointVal: 1000
    }
]
const geographyCategory = [
    {
        question: 'What is Michael Jacksons Most Famous Song??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'g100',
        pointVal: 200 
    },
    {
        question: 'Who is the Beatles Drummer??',
        answer: 'John Lennon',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'g200',
        pointVal: 400
    },
    {
        question: 'What is Beyonce Last Name??',
        answer: 'Knowles',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'g300',
        pointVal: 600
    },
    {
        question: 'What Boxer does Michael B. Jordan Play ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'Creed',
        id: 'g400',
        pointVal: 800
    },
    {
        question: 'Who is Isaiah Rashad ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'TDE artist',
        id: 'g500',
        pointVal: 1000
    }
]

const mathCategory = [
    {
        question: 'What is Michael Jacksons Most Famous Song??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'm100',
        pointVal: 200 
    },
    {
        question: 'Who is the Beatles Drummer??',
        answer: 'John Lennon',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e300',
        pointVal: 400
    },
    {
        question: 'What is Beyonce Last Name??',
        answer: 'Knowles',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e400',
        pointVal: 600
    },
    {
        question: 'What Boxer does Michael B. Jordan Play ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'Creed',
        id: 'e400',
        pointVal: 800
    },
    {
        question: 'Who is Isaiah Rashad ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'TDE artist',
        id: 'e500',
        pointVal: 1000
    }
]

const musicCategory = [
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
        question: 'Who is the Beatles Drummer??',
        answer: 'John Lennon',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e300',
        pointVal: 400
    },
    {
        question: 'What is Beyonce Last Name??',
        answer: 'Knowles',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e400',
        pointVal: 600
    },
    {
        question: 'What Boxer does Michael B. Jordan Play ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'Creed',
        id: 'e400',
        pointVal: 800
    },
    {
        question: 'Who is Isaiah Rashad ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'TDE artist',
        id: 'e500',
        pointVal: 1000
    }
]

const artCategory = [
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
        question: 'Who is the Beatles Drummer??',
        answer: 'John Lennon',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e300',
        pointVal: 400
    },
    {
        question: 'What is Beyonce Last Name??',
        answer: 'Knowles',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        id: 'e400',
        pointVal: 600
    },
    {
        question: 'What Boxer does Michael B. Jordan Play ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'Creed',
        id: 'e400',
        pointVal: 800
    },
    {
        question: 'Who is Isaiah Rashad ??',
        choice1: "Thriller",
        choice2: "Beat It",
        choice3: "Cant Buy Me Love",
        choice4: "Man in Mirror",
        answer: "Man in Mirror",
        answer: 'TDE artist',
        id: 'e500',
        pointVal: 1000
    }
]






window.onload= function(){
    $('#scorevalue').text(score)
}


//
//===================================================================//
$('.e100').on('click',function() { 
    
    var chosen = "";
    
    // $(this).html(`<h3>${entertainmentCategory[0].question}</h3>`)
    // .append('<button></button>') for each possible choice
    // make the innerHTML or text of this button = current choice whether 1 2 3 4
    // when this button is clicked, compare it's text or innerHTML to entertainmentCategory[0].correct
    // but we have a function for that
    // var isAnswerCorrect = tellMeIfChosenAnswerIsCorrectAnswer(button.innerHTML, entertainmentCategory[0].correct) 

    // if the text of the clicked button equals the correct answer for this question
    // call your right answer
    // if not
    // call wrong answer

//    const currentChoice1= $(this).append('<button class="iswrong1">wrongAnswer</button')
   // add to this button an on('click') that calls tellMeIfChosenAnswerIsCorrectAnswer('wrongAnswer', entertainmentCategory[0].correct)
//    $('.iswrong1').click(function(){

//         tellMeIfChosenAnswerIsCorrectAnswer(entertainmentCategory[0].choice1,entertainmentCategory.choice4)
//    })


   const currentChoice2= $(this).append('<button class="iswrong2">wrongAnswer</button')
$('.iswrong2').on('click',tellMeIfChosenAnswerIsCorrectAnswer(entertainmentCategory[0].choice2,entertainmentCategory[0].choice4))

//    const currentChoice3=  $(this).append('<button class="iswrong3">wrongAnswer</button')
//    $('.iswrong').click(function(){

//     tellMeIfChosenAnswerIsCorrectAnswer(entertainmentCategory[0].choice3,entertainmentCategory.choice4)
// })
//    const currentChoice4= $(this).append('<button class="isright4">RightAnswer</button')
//    $('.iswrong').click(function(){

//     tellMeIfChosenAnswerIsCorrectAnswer(entertainmentCategory[0].choice4,entertainmentCategory.choice4)
// })




    // --------------------------------
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')
//      $('.isright').click(function() {
//                 console.log('this worked RIGHT');
//                         rightAnswer('.e100');
//                                     })

// $('.iswrong').click(function() {

//     console.log('this WORKED WRONG');
//     wrongAnswer();
// })
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