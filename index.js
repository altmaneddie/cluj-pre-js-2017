// default on load
window.addEventListener("load", function() {
    const container = document.getElementById('app');
    container.innerHTML = LoginPage();
    addEventstoLogin();
})

// // constants

// const theBody = document.getElementById("app");
// const evalBtn = document.getElementById('evaluationBtn');
// const newEvalBtn = document.getElementById('newEvaluationBtn');
// const submitBtn = document.getElementById('submit-btn');
// const logoutBtn = document.getElementById('logoutBtn');

// display pages functions

// function switchToLogin(event){
//     theBody.innerHTML ='';
//     theBody.innerHTML = LoginPage();
//     event.preventDefault();
// }

// function switchToEval(event){
//     theBody.innerHTML ='';
//     theBody.innerHTML = EvaluationsPage();
//     event.preventDefault();
// }

// function switchToNewEval(event){
//     theBody.innerHTML ='';
//     theBody.innerHTML = NewEvaluationForm();
//     event.preventDefault();
// }

// // event listeners

// evalBtn.addEventListener("click",switchToEval(event));
// newEvalBtn.addEventListener("click",switchToNewEval(event));
// submitBtn.addEventListener("click",switchToEval(event));
// logoutBtn.addEventListener("click",switchToLogin(event));