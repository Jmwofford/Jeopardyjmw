// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");



// var score;


// var wrongAnswer = function () {

//     if (wrongAnswer) {
//         PointVal - score;
//     }

// }

// var rightAnswer = function () {
//     if (rightAnswer) {
//         PointVal + score;
//     }
// }


// const questions = [{
//     question: 'test question',
//     answer: 'test answer',
//     id: 'q100',
//     pointVal: 100
// }]

const index1 = [{
    question: 'entertainment question',
    answer: 'entertainment answer',
    id: 'q100',
    pointVal: 100
}]
const index2 = [{
    question: 'geography question',
    answer: 'geography answer',
    id: 'q100',
    pointVal: 100
}]
const index3 = [{
    question: 'math question',
    answer: 'math answer',
    id: 'q100',
    pointVal: 100
}]
const index4 = [{
    question: 'music question',
    answer: 'music answer',
    id: 'q100',
    pointVal: 100
}]
const index5 = [{
    question: 'art question',
    answer: 'art answer',
    id: 'q100',
    pointVal: 100
}]


//   const currentQuestionInfo = boardInfo['q100'];



$('.q100').click(function () {
    const question = index1.find((question) => {
        return index1.id === 'q100'
    })

    
    $(this).html("Question is ... blahblahblah")

    $(this).prepend('<img id="clock" src="timer30.gif" />')

    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })

    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="isright">WrongAnswer</button')
    $(this).blur();
});

$("isright").click(function () {



})

