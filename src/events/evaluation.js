function addEventsToEval() {
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');
    const detailsBtn = document.getElementsByClassName("detailsBtn");

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

    detailsBtn.addEventListener("click", function (e) {
        e.preventDefault();
        detailsCreator(e.currentTarget);
    })


}

