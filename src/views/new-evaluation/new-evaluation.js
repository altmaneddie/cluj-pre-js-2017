
//page creator
function NewEvaluationForm(options = {}) {
    const technicalObj = getTechnicalData();
    const textareaObj = getTextareaData();
    const fieldsetObj = getFieldsetData();

    return `
    ${Nav()}
    ${CandidateDetailsForm()}
    ${TechnicalLevelPicker(technicalObj)}
    ${Textarea(textareaObj)}
    ${Fieldset(fieldsetObj)}

    <input type="submit" id="submitBtn" value="Submit">
    </form>
    ${Footer()}
    `
}

// Candidate details function STATIC
function CandidateDetailsForm(options = {}) {
    return `
        <form class="main-form">
        <div class="data-form">
            <input type="text" class="cosmin-test" placeholder="Candidate" name="Candidate">
            <input type="text" class="cosmin-test" placeholder="Interviewer" name="Interviewer">
            <input type="date">
        </div>
     `
}

// Technical Level creation functions

function TechnicalLevelHeaderCreator(options) {
    return `<th>${options.headings.join('</th><th>')}</th>`
};

function TechnicalLevelOptCreator(options) {

    return options.columnData.map((k) =>
        `<td>
        ${TechnicalLevelRowCreator(k.inputLevels)}
       </td> `
    ).join('')
}

function TechnicalLevelRowCreator(options) {
    return options.map((m) => `
    <input type="radio" class="radio-test" name="level" value="${m}">
    `).join('')
}


function TechnicalLevelPicker(options = {}) {
    return `
    <table class="table">
    <tr class="row1">
        ${TechnicalLevelHeaderCreator(options)}
    </tr>
    <tr class="row2">
        ${TechnicalLevelOptCreator(options)}
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

function Fieldset(options) {
    return options.fieldset.map((k) =>
        `
    <legend class="eval-forms-title">${k.legend}</legend>
    <ul class="eval-forms">
    ${FieldsetLiCreator(k)}
    </ul>
    `).join('')
}


function FieldsetLiCreator(options) {
    return options.ul.map((m) =>
        `
    <li>${m.label}</li>
    <li>
        <select name="${m.label} To use string.replace">
        ${FieldsetOptionsCreator(m)}
        </select>
        </li>
`).join('')
}

function FieldsetOptionsCreator(options) {
    return options.options.map((n) =>
        `
        <option  value="${n}">${n}</option>
        `).join('')
}


// create the "Evaluation" option
function addPlaceHolder() {
    const fieldsetParentOfOption = document.getElementsByTagName('SELECT');
console.log(fieldsetParentOfOption);
    const fieldsetEvalNode = function () {
        return
        `
    <option selected disabled hidden>Evaluation</option>
    `}

    function fieldsetEvalOptAdder(parents) {
        parents.forEach(function (parent) {
            parent.insertBefore(fieldsetEvalNode, parent.firstChild);
        })
    }
    fieldsetEvalOptAdder(fieldsetParentOfOption);
}




