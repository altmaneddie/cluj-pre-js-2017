function addEventstoLogin(){
    const submitBtn = document.getElementById('submit-btn');
    const container = document.getElementById('app');
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    container.innerHTML = EvaluationsPage();
    addEventstoEval();
    })
    
}