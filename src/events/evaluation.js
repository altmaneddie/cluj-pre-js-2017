function addEventstoEval(){
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');

    newEvalBtn.addEventListener("click",function(e){
        e.preventDefault();
        container.innerHTML = NewEvaluationForm();
        addEventstoNewEval();
    })
    logoutBtn.addEventListener("click",function(e){
        e.preventDefault();
        container.innerHTML = LoginPage();
        addEventstoLogin();
    })
}

