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
        e.currentTarget
        detailsCreator();
    })


}

// // const addPlaceHolder = function () {

//     const fieldsetParentOfOption = document.querySelectorAll('SELECT');


//     function fieldsetEvalOptAdder(parents) {
//         parents.forEach(function (parent) {
//             const fieldsetEvalNode = document.createElement("option", "hidden" );
//             parent.insertBefore(fieldsetEvalNode, parent.firstChild);
//         })
//         fieldsetEvalOptAdder(fieldsetParentOfOption);
//     }



