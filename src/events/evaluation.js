function addEventstoEval(){
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    newEvalBtn.addEventListener("click",function(e){
        event.preventDefault();
        theBody.innerHTML ='';
        theBody.innerHTML = NewEvaluationForm();
    })
}