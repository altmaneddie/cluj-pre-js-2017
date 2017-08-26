function NewEvaluationForm(options = {}) {
    const technicalObj = getTechnicalData();
    const textareaObj = getTextareaData();
    return `
    ${CandidateDetailsForm()}
    ${TechnicalLevelPicker(technicalObj)}
    ${Textarea(textareaObj)}
    `
}

// Candidate details function STATIC
function CandidateDetailsForm(options = {}) {
    return `
        <form class="main-form" method="POST" action="newEval.php">
        <div class="data-form">
            <input type="text" placeholder="Candidate" name="Candidate">
            <input type="text" placeholder="Interviewer" name="Interviewer">
            <input type="date">
        </div>
     `
}

// Technical Level creation functions

function TechnicalLevelRow1Creator(options) {
    return `<th>${options.headings.join('</th><th>')}</th>`
};

function TechnicalLevelRow2Creator(options) {

    let newArr = []

    options.columnData.forEach(function (k) {
        newArr.push(`
        <td>
            ${k.inputLevels.map(function (j) {
                return `
            <input type="radio" name="level" value="${j}">
            `}).join('')}
     </td>`)
    })
    return newArr.join('');
}

function TechnicalLevelPicker(options = {}) {
    return `
    <table class="table">
    <tr class="row1">
        ${TechnicalLevelRow1Creator(options)}
    </tr>
    <tr class="row2">
        ${TechnicalLevelRow2Creator(options)}
    </tr>
    </table>
    `
}

// Textarea creation functions

function TextareaCreator(options) {
    return options.textarea.map(function (k) {
        return `<h3>${k.label}</h3>
        <textarea class="textA" rows="5" cols="80" placeholder="${k.placeholder}"></textarea>
        `}).join('')
}

function Textarea(options = {}) {
    return `
    <div class="impression">
    ${TextareaCreator(options)}
    </div>
    `
}
// Fieldset creation functions

function FieldsetCreator(options) {
    options.fieldset.map((k) =>
    `
    <legend class="eval-forms-title">${k.legend}</legend>
    <ul class="eval-forms">
    ${FieldsetLiCreator}
    </ul>
    `)
}


function FieldsetLiCreator(options) {
    options.ul.map((m) =>
        `
    <li>${m.label}</li>
    <li>
        <select name="${m.label} To use string.replace">
        ${FieldsetOptionsCreator(options)}
        </select>
`)
}

function FieldsetOptionsCreator(options) {
    return options.options.map((n) =>
        `
            <option  value="${n}">${n}</option>
            `
    ).join('')
}


window.onload = function () {
    const appEl = document.querySelector("#app");
    appEl.innerHTML = NewEvaluationForm();
}


