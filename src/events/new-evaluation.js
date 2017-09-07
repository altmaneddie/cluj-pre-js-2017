interviewApp.addEventsToNewEval = function() {
    const evalBtn = document.getElementById('evaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');
    const submitBtn = document.getElementById('submitBtn');

    evalBtn.addEventListener("click", function (e) {
        event.preventDefault();
        container.innerHTML = interviewApp.EvaluationsPage();
        interviewApp.addEventsToEval();
    })
    logoutBtn.addEventListener("click", function (e) {
        event.preventDefault();
        container.innerHTML = interviewApp.LoginPage();
        interviewApp.addEventsToLogin();
    })
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        interviewApp.getSubmittedData();
        container.innerHTML = interviewApp.EvaluationsPage()
        interviewApp.addEventsToEval()
    })
}   