interviewApp.addEventsToEval = function() {
    const newEvalBtn = document.getElementById('newEvaluationBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const container = document.getElementById('app');
    const detailsBtn = document.querySelectorAll(".detailsBtn");

    newEvalBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML = interviewApp.NewEvaluationForm();
        interviewApp.addEventsToNewEval();
        interviewApp.addPlaceHolder();
    })

    logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        container.innerHTML = interviewApp.LoginPage();
        interviewApp.addEventsToLogin();
    })

    detailsBtn.forEach(function (el) {
        el.addEventListener("click", function () {
            // let el = e.target;
            // e.stopPropagation;
            interviewApp.detailsCreator(el);
        })
    })
}

