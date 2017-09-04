function addEventstoNewEval() {
    const evalBtn = document.getElementById('evaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');
    const submitBtn = document.getElementById('submitBtn');

    evalBtn.addEventListener("click", function (e) {
        event.preventDefault();
        container.innerHTML = EvaluationsPage();
        addEventsToEval();
    })
    logoutBtn.addEventListener("click", function (e) {
        event.preventDefault();
        container.innerHTML = LoginPage();
        addEventstoLogin();
    })
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        getSubmittedData();
        container.innerHTML = EvaluationsPage()
        addEventsToEval()
    })
}   