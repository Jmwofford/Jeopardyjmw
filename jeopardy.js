alert("Welcome to Jeopardy");
alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");



// var score= 

// var rightAnswer = 
// var wrongAnswer =


// pointvalue=




// All slots on board as object
// const boardInfo = {
//     q100: {
//         question: "someting",
//         answer: "something else",
//         points: 200
//     },
//     q200: {
//         question: "someting",
//         answer: "something else",
//         points: 200
//     }


// }
//Object that will contain Question, Answer, and Point Value.


//   const currentQuestionInfo = boardInfo['q100'];



$('.q100').click(function(){

  
$(this).html("Question is ... blahblahblah")

$(this).prepend('<img id="clock" src="timer30.gif" />') 

 $(this).css({ position: 'absolute', height:'400px', width:'600px', background:'rgba(0,0,0,.9)'})

 $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');

$(this).blur();
});



// function toggleQuestion(questionId, questionText, correctAnswer){
//     // toggle the CSS
//  const displayQuestion = ('q100', currentQuestionInfo.question, currentQuestionInfo.answer);










    // if (this.height == '50px' && this.width == '100px'){

    //      const unclickedBox = (this);

    //      

    //      //change text to Question

    //     
            //make "questionBox" pop up


    //     $(unclickedBox).keydown(function(){

        
    
    
    
    // )} else{ 
    //     const clickedBox = (this);
    // }
        // If is small, make big and populate with question + buttons
        // If large, make small and clean up text
    // display question text
    
  

            
    // }

    // user enters answer

    // check provided answer with correct answer

// }