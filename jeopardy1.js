// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");



var score = 0;

var wrongAnswer = function () {
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
window.onload = function () {
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
        id: 'm200',
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
        id: 'm300',
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
        id: 'm400',
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
        id: 'm500',
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
        id: 'q100',
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
        id: 'q200',
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
        id: 'q300',
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
        id: 'q400',
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
        id: 'q500',
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
        id: 'a100',
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
        id: 'a200',
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
        id: 'a300',
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
        id: 'a400',
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
        id: 'a500',
        pointVal: 1000
    }
]

//===================================================================//
$('.e100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${entertainmentCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        console.log(popup)
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')
    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')
    })
})
$('.e200').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${entertainmentCategory[1].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.e300').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${entertainmentCategory[2].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.e400').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${entertainmentCategory[3].question}</h3>`)
    $(this).prepend('<img id="dailydub" src="dailydub.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="dailydub.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.e500').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${entertainmentCategory[4].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// =======================================================entertainmentCategory========================
$('.g100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${geographyCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')
    })
})
$('.g200').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${geographyCategory[1].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.g300').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${geographyCategory[2].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.g400').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${geographyCategory[3].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.g500').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${geographyCategory[4].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// ================================================georgraphyCategory====================================
$('.m100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${mathCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')


    })
})
$('.m200').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${mathCategory[1].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.m300').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${mathCategory[2].question}</h3>`)
    $(this).prepend('<img id="dailydub" src="dailydub.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="dailydub.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.m400').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${mathCategory[3].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.m500').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })
    const popup = $(this)


    $(this).html(`<h3>${mathCategory[4].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// ================================================MathCategory===========================================
$('.q100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${musicCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.q200').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${musicCategory[1].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.q300').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${musicCategory[2].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.q400').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${musicCategory[3].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.q500').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${musicCategory[4].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// =================================================================musicCategory==========================
$('.a100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${entertainmentCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.a200').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${entertainmentCategory[1].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.a300').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${entertainmentCategory[2].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.a400').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${entertainmentCategory[3].question}</h3>`)
    $(this).prepend('<img id="dailydub" src="dailydub.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="dailydub.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.a500').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${entertainmentCategory[4].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '600px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">RightAnswer</button')
    $(this).append('<button class="iswrong">WrongAnswer</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer();
    
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer();
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// =======================================================ArtCategory=======================================
