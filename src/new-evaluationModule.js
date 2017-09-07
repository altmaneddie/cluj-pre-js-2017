
//page creator
interviewApp.NewEvaluationForm = function (options = {}) {
    const technicalObj = getTechnicalData();
    const textareaObj = getTextareaData();


    return `
    ${Nav()}
    ${interviewApp.CandidateDetailsForm()}
    ${interviewApp.TechnicalLevelPicker(technicalObj)}
    ${interviewApp.Textarea(textareaObj)}
    ${Fieldset(fieldsetObj)}

    <input type="submit" id="submitBtn" value="Submit">
    </form>
    ${Footer()}
    `
}
// Candidate details function STATIC
interviewApp.CandidateDetailsForm = function (options = {}) {
    return `
        <form class="main-form">
        <div class="data-form">
            <input type="text" class="candidateDetails" placeholder="Candidate" name="Candidate">
            <input type="text" class="candidateDetails" placeholder="Interviewer" name="Interviewer">
            <input type="date">
        </div>
     `
}

// Technical Level creation functions

interviewApp.TechnicalLevelHeaderCreator = function (options) {
    return `<th>${options.headings.join('</th><th>')}</th>`
};

interviewApp.TechnicalLevelOptCreator = function (options) {

    return options.columnData.map((k) =>
        `<td>
        ${interviewApp.TechnicalLevelRowCreator(k.inputLevels)}
       </td> `
    ).join('')
}

interviewApp.TechnicalLevelRowCreator = function (options) {
    return options.map((m) => `
    <input type="radio" class="radio-test" name="level" value="${m}">
    `).join('')
}


interviewApp.TechnicalLevelPicker = function (options = {}) {
    return `
    <table class="table">
    <tr class="row1">
        ${interviewApp.TechnicalLevelHeaderCreator(options)}
    </tr>
    <tr class="row2">
        ${interviewApp.TechnicalLevelOptCreator(options)}
    </tr>
    </table>
    `
}

// Textarea creation functions

interviewApp.TextareaCreator = function (options) {
    return options.textarea.map(function (k) {
        return `<h3>${k.label}</h3>
        <textarea class="textA" rows="5" cols="80" placeholder="${k.placeholder}"></textarea>
        `}).join('')
}

interviewApp.Textarea = function (options = {}) {
    return `
    <div class="impression">
    ${interviewApp.TextareaCreator(options)}
    </div>
    `
}
// Fieldset creation functions

interviewApp.Fieldset = function (options) {
    return options.fieldset.map((k) =>
        `
    <legend class="evalForms-title">${k.legend}</legend>
    <ul class="evalForms">
    ${interviewApp.FieldsetLiCreator(k)}
    </ul>
    `).join('')
}


interviewApp.FieldsetLiCreator = function (options) {
    return options.ul.map((m) =>
        `
    <li>${m.label}</li>
    <li>
        <select name="${m.label} To use string.replace">
        ${interviewApp.FieldsetOptionsCreator(m)}
        </select>
        </li>
`).join('')
}

interviewApp.FieldsetOptionsCreator = function (options) {
    return options.options.map((n) =>
        `
        <option  value="${n}">${n}</option>
        `).join('')
}
// create the "Evaluation" option
interviewApp.addPlaceHolder = function () {

    const fieldsetParentOfOption = document.querySelectorAll('SELECT');


    fieldsetParentOfOption.forEach(function (selectOpt) {
        const fieldsetEvalNode = document.createElement("OPTION");

        selectOpt.insertBefore(fieldsetEvalNode, selectOpt.firstChild);
    })
    hidePlaceHolder(fieldsetParentOfOption);
}

interviewApp.hidePlaceHolder = function (el) {

    el.forEach(function (k) {

        z = k.firstChild

        z.setAttribute("hidden", "TRUE");
        z.setAttribute("selected", "TRUE");
        z.innerHTML = "Evaluate";
    })
}

interviewApp.addEventsToNewEval = function () {
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