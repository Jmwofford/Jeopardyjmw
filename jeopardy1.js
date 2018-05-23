// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");



var score=0;

var wrongAnswer = function() {
        // score.push(index.pointVal*-1);
        score -= entertainmentCategory[0].pointVal;
        console.log('negative score pushed.');
        $('#scorevalue').text(score)
        console.log(score)
}

var rightAnswer = function () {
    // score.push(index.pointVal);
    score += entertainmentCategory[0].pointVal;
    $('#scorevalue').text(score)
    console.log('positive score pushed.');
    console.log(score)
    
}

window.onload= function(){
    $('#scorevalue').text(score)
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


//===================================================================//
$('.e100').click(function() { 
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    
    
    $(this).html(`<h3>${entertainmentCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ font:'20px', position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
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




// //===================================================================//

// $('.g100','.g200').click(function() { 
//     // const question = index.find((question) => {
//     //     return question.id === 'q100'
//     // })
    
    
//     $(this).html(`<h3>${geography.question}</h3>`)
//     $(this).prepend('<img id="clock" src="timer30.gif" />')
//     $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
//     $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
//     $(this).append('<button class="isright">RightAnswer</button')
//     $(this).append('<button class="iswrong">WrongAnswer</button')
//      $('.isright').click(function() {
//                 console.log('this worked RIGHT');
//                         rightAnswer();
//                                     })

// $('.iswrong').click(function() {

//     console.log('this WORKED WRONG');
//     wrongAnswer();
// })
// })
// //===================================================================//
// //===================================================================//

// $('.m100').click(function() { 
//     // const question = index.find((question) => {
//     //     return question.id === 'q100'
//     // })
    
    
//     $(this).html(`<h3>${math.question}</h3>`)
//     $(this).prepend('<img id="clock" src="timer30.gif" />')
//     $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
//     $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
//     $(this).append('<button class="isright">RightAnswer</button')
//     $(this).append('<button class="iswrong">WrongAnswer</button')
//      $('.isright').click(function() {
//                 console.log('this worked RIGHT');
//                         rightAnswer();
//                                     })

// $('.iswrong').click(function() {

//     console.log('this WORKED WRONG');
//     wrongAnswer();
// })
// })
// //===================================================================//
// //===================================================================//

// $('.q100').click(function() { 
//     // const question = index.find((question) => {
//     //     return question.id === 'q100'
//     // })
    
    
//     $(this).html(`<h3>${music.question}</h3>`)
//     $(this).prepend('<img id="clock" src="timer30.gif" />')
//     $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
//     $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
//     $(this).append('<button class="isright">RightAnswer</button')
//     $(this).append('<button class="iswrong">WrongAnswer</button')
//      $('.isright').click(function() {
//                 console.log('this worked RIGHT');
//                         rightAnswer();
//                                     })

// $('.iswrong').click(function() {

//     console.log('this WORKED WRONG');
//     wrongAnswer();
// })
// })
// //===================================================================//
// //===================================================================//

// $('.a100').click(function() { 
//     // const question = index.find((question) => {
//     //     return question.id === 'q100'
//     // })
    
    
//     $(this).html(`<h3>${art.question}</h3>`)
//     $(this).prepend('<img id="clock" src="timer30.gif" />')
//     $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
//     $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
//     $(this).append('<button class="isright">RightAnswer</button')
//     $(this).append('<button class="iswrong">WrongAnswer</button')
//      $('.isright').click(function() {
//                 console.log('this worked RIGHT');
//                         rightAnswer();
//                                     })

// $('.iswrong').click(function() {

//     console.log('this WORKED WRONG');
//     wrongAnswer();
// })
// })
//===================================================================//