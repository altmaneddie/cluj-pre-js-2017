function addEventstoEval(){
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    newEvalBtn.addEventListener("click",function(e){
        event.preventDefault();
        theBody.innerHTML ='';
        theBody.innerHTML = NewEvaluationForm();
        addEventstoNewEval();
    })
    logoutBtn.addEventListener("click",function(e){
        event.preventDefault();
        theBody.innerHTML = LoginPage();
        addEventstoLogin();
    })
}