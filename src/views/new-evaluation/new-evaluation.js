function NewEvaluationForm(options){
    return `
    ${CandidateDetailsform()}
    ${TechnicalLevelPicker()}
    
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

function TechnicalLevelPicker(options={}){
    return`
    <h1>Technical Level</h1>
    <div>
        <table class="table">
            <tr class="row1">
                <th>Trainee</th>
                <th>Junior</th>
                <th>Mid</th>
                <th>Senior</th>
            </tr>
            <tr class="row2">
                <td>
                    <input type="radio" name="level" value="1"></td>
                <td>
                    <input type="radio" name="level" value="j1">
                    <input type="radio" name="level" value="j2">
                    <input type="radio" name="level" value="j3">
                </td>
                <td>
                    <input type="radio" name="level" value="m1">
                    <input type="radio" name="level" value="m2">
                    <input type="radio" name="level" value="m3">
                </td>
                <td>
                    <input type="radio" name="level" value="s1">
                    <input type="radio" name="level" value="s2">
                    <input type="radio" name="level" value="s3">
                </td>
            </tr>


        </table>
    </div>
    `
}

function Textarea(options={},label={})

window.onload = function(){
    const appEl = document.querySelector("#app");
    appEl.innerHTML = NewEvaluationForm();
}

