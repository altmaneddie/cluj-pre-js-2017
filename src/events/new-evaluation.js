function addEventstoNewEval(){
    const evalBtn = document.getElementById('evaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    evalBtn.addEventListener("click",function(e){
        event.preventDefault();
        theBody.innerHTML = EvaluationsPage();
        addEventstoEval();
    })
    logoutBtn.addEventListener("click",function(e){
        event.preventDefault();
        theBody.innerHTML = LoginPage();
        addEventstoLogin();
    })
}   