// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");



var score=0;

var wrongAnswer = function() {
        // score.push(index.pointVal*-1);
        score -= entertainment.pointVal;
        console.log('negative score pushed.');
        console.log(score)
}

var rightAnswer = function () {
    // score.push(index.pointVal);
    score += entertainment.pointVal;
    console.log('positive score pushed.');
    console.log(score)
    
}



const entertainment = {
    question: 'What is the Entertainment ??',
    answer: 'entertainment answer',
    id: 'e100',
    pointVal: 200

}
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


//   const currentQuestionInfo = boardInfo['q100'];
//
//===================================================================//
$('.e100').click(function() { 
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    
    
    $(this).html(`<h3>${entertainment.question}</h3>`)
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
                        rightAnswer();
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
                        rightAnswer();
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