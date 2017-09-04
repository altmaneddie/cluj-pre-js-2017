function addEventsToEval(){
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');

    newEvalBtn.addEventListener("click",function(e){
        e.preventDefault();
        container.innerHTML = NewEvaluationForm();
        addEventstoNewEval();
        addPlaceHolder();
    })
    logoutBtn.addEventListener("click",function(e){
        e.preventDefault();
        container.innerHTML = LoginPage();
        addEventstoLogin();
        
    })
}

const addPlaceHolder= function() {
    
        const fieldsetParentOfOption = document.querySelectorAll('SELECT');
    
    
        function fieldsetEvalOptAdder(parents) {
            parents.forEach(function (parent) {
                const fieldsetEvalNode = document.createElement("option", { className = "hidden" });
                parent.insertBefore(fieldsetEvalNode, parent.firstChild);
            })
        }
        fieldsetEvalOptAdder(fieldsetParentOfOption);
    }
    
    
