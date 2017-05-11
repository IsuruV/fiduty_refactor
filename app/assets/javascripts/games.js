class Question{
    constructor(question){
        this.incorrect = question.incorrect;
        this.correct = question.correct;
        this.type = question.type;
    }
    
    returnQuestionSet(){
        var sortedQuestions = shuffle([` <button id="correct" class="btn btn-default choice">${this.correct}</button>`, `<button id="incorrect" class="btn btn-default choice">${this.incorrect}</button>`]);
        return(
            `${sortedQuestions[0]}
              ${sortedQuestions[1]}`
            )
    }
    
}

class SpeedMatch{
    constructor(questionList){
        this.questionList = questionList;
        this.createdQuestions = [];
    }
    
    initateQuestions(){
        this.questionList.forEach((question)=>{
            this.createdQuestions.push(new Question(question));
        });
        this.answer();
        $('.quiz-choice').append(this.createdQuestions[this.createdQuestions.length - 1].returnQuestionSet());
        this.countDown();
    }
    
    answer(){
        $('#correct').unbind();
        $('#incorrect').unbind();
        
        $(document).on('click','#correct',()=>{
            $('#correct').css({'background-color':'green'});
             setTimeout(()=>{ this.nextQuestion(); }, 300);
             console.log('clicked');
             points += 1000;
        });
        
        $(document).on('click','#incorrect',()=>{
            $('#incorrect').css({'background-color':'red'});
            setTimeout(()=>{ this.nextQuestion(); }, 300); 
            console.log('clicked')
        });
    }
    
    nextQuestion(){
            this.createdQuestions.pop();
            this.appendQuestion();
            console.log('next question')
    }
    
    appendQuestion(){
        $('.quiz-choice').html(this.createdQuestions[this.createdQuestions.length - 1].returnQuestionSet());
        $('#choiceAmount').text(this.createdQuestions[this.createdQuestions.length - 1].type);
        console.log('replaced');
    }
    
    countDown(){
     $(document).on('click','#next',()=>{
        clickCounter+= 1;
        console.log('clicked')
    if (clickCounter > 0){
         countDown(20);
        }
    });

    }
}

const speedMatchRun = ()=>{
    let questionList = shuffle([{incorrect: '10 year Government Bond', correct: 'Penny Stocks', type:'High Volatility'}
    , {incorrect: 'Ishares Foreign Fund ETF', correct: '20 year Treasury Note', type:'Low Volatility'}
    , {incorrect: 'Ishares Foreign Fund ETF', correct: 'SPYDR AAA Corporate Bond Fund', type:'Low Volatility'}
    , {correct: 'Microsoft Stock', incorrect: 'Microsoft C- corporate Bond', type:'High Volatility'}
    , {correct: 'Blue Chip Mix Mutal Fund', incorrect: 'Apple Stock', type:'High Volatility'}
    , {correct:'McDonald 10 year corporate bond', incorrect:'Greece 5 year treasury note', type:' Low Volatility'}
    , {correct:'SPYDR Index Fund', incorrect:'Savings Account', type:'High Volatility'}
    , {correct:'', incorrect:'', type:'Low Volatility'}
    , {correct:'Ishares Foreign Fund ETF', incorrect:'20 year Treasury Note', type:'High Volatility'}
    , {correct:'10 year Government Bond', incorrect:'McDonald 10 year corporate bond', type:'Low Volatility'}
    , {correct:'Microsoft C- corporate Bond', incorrect:'McDonald 10 year corporate bond', type:'High Volatility'}
    , {correct:'Blue Chip Mix Mutal Fund', incorrect:'Penny Stocks', type:'Low Volatility'}]);
    
    let points = 0;
    let speedMatch = new SpeedMatch(questionList);
        speedMatch.initateQuestions();
    
}

const shuffle = (array)=>{
  let i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

const countDown = (i)=>{
    let int = setInterval(function () {
        document.getElementById("countdown").innerHTML = i;
        i-- || clearInterval(int);  //if i is 0, then stop the interval
    }, 1000);
}


var clickCounter = 0;
$(document).ready(function(){
     speedMatchRun();
});