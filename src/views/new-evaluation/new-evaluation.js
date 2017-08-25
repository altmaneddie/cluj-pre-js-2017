function NewEvaluationForm(options){
    const technicalObj = getTechinicalData()   ;
    const textareaObj = getTextareaData();


    return `
    ${CandidateDetailsform()}
    ${TechnicalLevelPicker(technicalObj)}
    ${Textarea(textareaObj)}
    
    `
}


function CandidateDetailsform(options={}){
    return `
        <form class="main-form" method="POST" action="newEval.php">
        <div class="data-form">
            <input type="text" placeholder="Candidate" name="Candidate">
            <input type="text" placeholder="Interviewer" name="Interviewer">
            <input type="date">
        </div>
     `
}



function TechinicalLevelrow1Creator(options) {
    return `<th>${options.headings.join(`</th><th>`)}</th>`
};

function TechinicalLevelrow2Creator(options) {

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
    return newArr.join("");
}

function Textarea(options={}){

        

}



















window.onload = function(){
    const appEl = document.querySelector("#app");
    appEl.innerHTML = NewEvaluationForm();
}


