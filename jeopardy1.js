// alert("Welcome to Jeopardy");
// alert("Directions: Pick a category and a point value. Click on the chosen box for the question. Students must give the answer in the form of a question before clicking again. The teacher may want to set a time limit for answering the question. To see if a student or group is correct, click again for the answer. Click the “Back to Board” button on the slide to return to the main board. If the student or team is correct, they are awarded the point value of the question. (Click the “Score” button located on the main board to add the point value to the appropriate team score.The dollar values disappear after each question. Continue until all questions have been answered. The team with the most points wins.");



var score = 0;

var wrongAnswer = function (pointVal) {
    // score.push(index.pointVal*-1);
    score -= pointVal;
    console.log('negative score pushed.');
    $('#scorevalue').text(score)
    console.log(score)
    checkWinCondition()
}



var rightAnswer = function (pointVal) {
    // score.push(index.pointVal);
    score += pointVal;
    $('#scorevalue').text(score)
    console.log('positive score pushed.');
    console.log(score)
    checkWinCondition()

}

window.onload = function () {
    $('#scorevalue').text(score)
}

var checkWinCondition = function () {
    if (score >= 3500) {     
        $('.score').text('<h1 class="winprompt">YOU WIN</h1>')
        $('.superclassGrid').replaceWith('<img id="winning" src="break.gif" />');
        $('.score').replaceWith('<audio autoplay src="ricflair.mp3" type="audio/mp3">');
    }
}

const entertainmentCategory = [
    {
        question: 'This girl was NOT Michael Jacksons Lover ??',
        answer: "Billie Jean",
        id: 'e100',
        pointVal: 200
    },
    {
        question: 'This local artist was known for putting the STANKONIA??',
        answer: "Outkast",
        id: 'e200',
        pointVal: 400
    },
    {
        question: 'Which group of Jim Henson puppets first appeareed on American television in Sesame Street?',
        answer: "Muppets",
        id: 'e300',
        pointVal: 600
    },
    {
        question: 'This Wakanda Warrior has a bite worse than his BARK??',
        answer: 'Mbaku',
        id: 'e400',
        pointVal: 800
    },
    {
        question: 'This music artist played "Birdie" in Above the Rim ??',
        answer: 'TDE artist',
        id: 'e500',
        pointVal: 1000
    }
]
const geographyCategory = [
    {
        question: 'What is the driest place on Earth??',
        answer: "Mcmurdo, Antartica",
        id: 'g100',
        pointVal: 200
    },
    {
        question: 'What country has the most natural lakes???',
        answer: "Canada",
        id: 'g200',
        pointVal: 400
    },
    {
        question: 'What razor-thin country accounts for more than half of the western coastline of South America???',
        answer: 'Chile',
        id: 'g300',
        pointVal: 600
    },
    {
        question: 'What country has the highest supply of Vibranium ??',
        answer: 'Wakanda',
        id: 'g400',
        pointVal: 800
    },
    {
        question: 'Where is Kobe Bryant Originally From ??',
        answer: 'Italy',
        id: 'g500',
        pointVal: 1000
    }
]
const mathCategory = [
    {
        question: 'How many 90degree angles make up an equilateral triangle??',
        answer: "0",
        id: 'm100',
        pointVal: 200
    },
    {
        question: 'What number has the same numbers of Letters, as its meaning??',
        answer: '4',
        id: 'm200',
        pointVal: 400
    },
    {
        question: 'What number is the first Number to use the letter "A" in its spelling??',
        answer: '1000',
        id: 'm300',
        pointVal: 600
    },
    {
        question: 'How much many pentagonal sides does a dodechdron have??',
        answer: '12',
        id: 'm400',
        pointVal: 800
    },
    {
        question: '111111111 x 111111111 = ??',
        answer: '12345678987654321',
        id: 'm500',
        pointVal: 1000
    }
]
const musicCategory = [
    {
        question: 'What artist holds the world record for most words in a hit single???',
        answer: "Eminem",
        id: 'q100',
        pointVal: 200
    },
    {
        question: 'How many different instruments did Prince play on his debut album??',
        answer: "27",
        id: 'q200',
        pointVal: 400
    },
    {
        question: 'What are piano keys made out of???',
        answer: "Plastic",
        id: 'q300',
        pointVal: 600
    },
    {
        question: 'What was Bob Marleys song I Shot the Sheriff really about???',
        answer:'birthcontrol',
        id: 'q400',
        pointVal: 800
    },
    {
        question: 'Who is Mike Jones ??',
        answer: 'Who',
        id: 'q500',
        pointVal: 1000
    }
]
const artCategory = [
    {
        question: 'Who Painted the Sisteen Chapel??',
        answer: "Davinci",
        id: 'a100',
        pointVal: 200
    },
    {
        question: 'What Contemporary Artist cut off his ear ??',
        answer: 'John Lennon',
        
        answer: "Man in Mirror",
        id: 'a200',
        pointVal: 400
    },
    {
        question: 'How Many Members were in the Original Destinys Child??',
        answer: "Man in Mirror",
        id: 'a300',
        pointVal: 600
    },
    {
        question: 'What was Van Gohs Most Famous Art Piece ??',
        answer: 'Stary Night',
        id: 'a400',
        pointVal: 800
    },
    {
        question: 'How many colors are in the Original Crayon Box ??',
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Billie Jean</button')
    $(this).append('<button class="iswrong">Bonita AppleBum</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);


    $('.isright').click(function () {
        console.log('this worked RIGHT');
        console.log(popup)
        rightAnswer(entertainmentCategory[0].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')
    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(entertainmentCategory[0].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Outkast</button')
    $(this).append('<button class="iswrong">Wu-Tang Clan</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(entertainmentCategory[1].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(entertainmentCategory[1].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Muppets</button')
    $(this).append('<button class="iswrong">Elmo</button')



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(entertainmentCategory[2].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(entertainmentCategory[2].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="dailydub.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Mbaku</button')
    $(this).append('<button class="iswrong">Tchalla</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(entertainmentCategory[3].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(entertainmentCategory[3].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">2pac</button')
    $(this).append('<button class="iswrong">Morris Chestnut</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(entertainmentCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(entertainmentCategory[4].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">McMurdo, Antartica</button')
    $(this).append('<button class="iswrong">Black Chyna</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(geographyCategory[0].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(geographyCategory[0].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Canada</button')
    $(this).append('<button class="iswrong">Norway</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(geographyCategory[1].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(geographyCategory[1].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Chile</button')
    $(this).append('<button class="iswrong">Morocco</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(geographyCategory[2].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(geographyCategory[2].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Wakanda</button')
    $(this).append('<button class="iswrong">Syria</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(geographyCategory[3].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(geographyCategory[3].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Italy</button')
    $(this).append('<button class="iswrong">Philadephia, USA</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(geographyCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(geographyCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// ================================================geographyCategory====================================
$('.m100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)
    $(this).html(`<h3>${mathCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">0</button')
    $(this).append('<button class="iswrong">3</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(mathCategory[0].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(mathCategory[0].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Four</button')
    $(this).append('<button class="iswrong">Seven</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(mathCategory[1].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(mathCategory[1].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="dailydub.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">1000</button')
    $(this).append('<button class="iswrong">Ten thousand</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(mathCategory[2].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(mathCategory[2].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">12</button')
    $(this).append('<button class="iswrong">21</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(mathCategory[3].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(mathCategory[3].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">12345678987654321</button')
    $(this).append('<button class="iswrong">11111111</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(mathCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(mathCategory[4].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Eminem</button')
    $(this).append('<button class="iswrong">Busta Rhymes</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(musicCategory[0].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(musicCategory[0].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">27</button')
    $(this).append('<button class="iswrong">10</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(musicCategory[1].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(musicCategory[1].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Plastic</button')
    $(this).append('<button class="iswrong">Ivory</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(musicCategory[2].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(musicCategory[2].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Birth Control</button')
    $(this).append('<button class="iswrong">Police Brutality</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(musicCategory[3].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(musicCategory[3].pointVal);
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
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Who</button')
    $(this).append('<button class="iswrong">Hiphop Artist </button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(musicCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(musicCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// =================================================================musicCategory==========================
$('.a100').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${artCategory[0].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Davinci</button')
    $(this).append('<button class="iswrong">Michaelangelo</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(artCategory[0].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(artCategory[0].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.a200').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${artCategory[1].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">VanGoh</button')
    $(this).append('<button class="iswrong">Picasso</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(artCategory[1].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')

    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(artCategory[1].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
$('.a300').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${artCategory[2].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">5</button')
    $(this).append('<button class="iswrong">4</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(artCategory[2].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(artCategory[2].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.a400').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${artCategory[3].question}</h3>`)
    $(this).prepend('<img id="dailydub" src="dailydub.gif" />')
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="dailydub.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">Stary Night</button')
    $(this).append('<button class="iswrong">Arc Di Triomph</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(artCategory[3].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(artCategory[3].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
///////////DailyDouble//////////////
$('.a500').click(function () {
    // const question = index.find((question) => {
    //     return question.id === 'q100'
    // })

    const popup = $(this)

    $(this).html(`<h3>${artCategory[4].question}</h3>`)
    $(this).prepend('<img id="clock" src="timer30.gif" />')
    $(this).css({ position: 'absolute', height: '400px', width: '600px', background: 'rgba(0,0,0,.9)' })
    $(this).append('<audio autoplay src="jeopardytheme.mp3" type="audio/mp3">');
    $(this).append('<button class="isright">32</button')
    $(this).append('<button class="iswrong">64</button')
    setTimeout(function(){popup.replaceWith('<div class="e100"><img class="questionmiss" src="questionmiss.gif"></img></div>')
}, 30000);



    $('.isright').click(function () {
        console.log('this worked RIGHT');
        rightAnswer(artCategory[4].pointVal);

        popup.replaceWith('<div class="e100"><img class="lilbox" src="moneybags.gif"></img></div>')


    })

    $('.iswrong').click(function () {

        console.log('this WORKED WRONG');
        wrongAnswer(artCategory[4].pointVal);
        popup.replaceWith('<div class="e100"><img class="lilbox" src="no.gif"></img></div>')

    })
})
// =======================================================ArtCategory=======================================
