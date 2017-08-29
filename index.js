// default on load

const theBody = document.getElementById("app");
const evalBtn = document.getElementById('evaluationBtn');
const newEvalBtn = document.getElementById('newEvaluationBtn');
const submitBtn = document.getElementById('submit-btn');
const logoutBtn = document.getElementById('logoutBtn');


window.addEventListener("load", function() {
    theBody.innerHTML = LoginPage();
})

// display pages functions

function switchToLogin(event){
    theBody.innerHTML ='';
    theBody.innerHTML = LoginPage();
    event.preventDefault();
}

function switchToEval (event){
    theBody.innerHTML ='';
    theBody.innerHTML = EvaluationsPage();
    event.preventDefault();
}

function switchToNewEval(event) {
    theBody.innerHTML ='';
    theBody.innerHTML = NewEvaluationForm();
    event.preventDefault();
}

// event listeners

evalBtn.addEventListener("click",switchToEval(event));
newEvalBtn.addEventListener("click",switchToNewEval(event));
submitBtn.addEventListener("click",switchToEval(event));
logoutBtn.addEventListener("click",switchToLogin(event));