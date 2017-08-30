function addEventstoNewEval(){
    const evalBtn = document.getElementById('evaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');
    evalBtn.addEventListener("click",function(e){
        event.preventDefault();
        container.innerHTML = EvaluationsPage();
        addEventstoEval();
    })
    logoutBtn.addEventListener("click",function(e){
        event.preventDefault();
        container.innerHTML = LoginPage();
        addEventstoLogin();
    })
}   