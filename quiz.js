const questions=[
    {
        'que':'Which of the following is the markup language.',
        'a':'HTML',
        'b':'JAVA',
        'c':'C++',
        'd':'PYTHON',
        'correct':'a'
    },
    {
        'que':'What year JavaScript language launched?',
        'a':"1994",
        'b':"1995",
        'c':"1996",
        'd':"None of these",
        'correct':"b"
    },
    {
        'que':"What does CSS stands for",
        'a':"HyperText MarkUp Language",
        'b':"Josn Object Notation",
        'c':"Cascading Style Sheet",
        'd':"None of These",
        'correct':"c",
    }
]
let total=questions.length;
let right=0, wrong=0;
let index=0;

const queBox=document.getElementById("queBox")
const objectInputs=document.querySelectorAll('.options')
const loadfunction= ()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data=questions[index]
    queBox.innerText=`${index+1}) ${data.que}`;
    objectInputs[0].nextElementSibling.innerText=data.a;
    objectInputs[1].nextElementSibling.innerText=data.b;
    objectInputs[2].nextElementSibling.innerText=data.c;
    objectInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    console.log(ans, data.correct);
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadfunction();
    return;
}


const getAnswer = ()=>{
    let answer;
    objectInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
}
const reset= ()=>{
    objectInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz =() =>{
    document.getElementById("box").innerHTML =`
    <div style="text-align:center">
        <h3>Thank you for playing the Quiz</h3>
        <h3>${right} / ${total} are correct</h3>
    </div>
    `
}
loadfunction();