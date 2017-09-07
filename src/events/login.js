interviewApp.addEventsToLogin = function (variable) {
    const submitBtn = document.getElementById('submit-btn');
    const container = document.getElementById('app');

    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML = interviewApp.EvaluationsPage(variable);
        interviewApp.addEventsToEval();
    })
}