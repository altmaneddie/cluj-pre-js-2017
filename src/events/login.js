function addEventstoLogin(){
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    theBody.innerHTML ='';
    theBody.innerHTML = EvaluationsPage();
    addEventstoEval();
    })
    
}