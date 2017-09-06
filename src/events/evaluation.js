function addEventsToEval() {
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');
    const detailsBtn = document.querySelectorAll(".detailsBtn");

    newEvalBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML = NewEvaluationForm();
        addEventsToNewEval();
        addPlaceHolder();
    })

    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML = LoginPage();
        addEventstoLogin();
    })

    detailsBtn.forEach(function (elem) {
        addEventListener("click", function (e) {
            detailsCreator(elem);
        })
    })
}

