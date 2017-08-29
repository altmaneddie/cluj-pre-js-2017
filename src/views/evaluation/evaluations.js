function EvaluationsPage(options = {}) {
    const tableData = getEvalTableData();
    
    return `
    ${Nav()}
    ${EvaluationsTable(tableData)}
    ${Footer()}
   `
}


function EvaluationsTableHeader(options) {
   return options.map((el) => 
         `<th>${el}</th>`
    ).join('')
}


function EvaluationTableRow(options={}){
   return `
<tr>
    <td>${options.name}</td>
    <td>${options.technology}</td>
    <td>${options.level} </td>
    <td>Detalii <button></button></td>
</tr>
    `
}

function EvaluationTableBody(options = {}) {
return options.map((k) => 
`<tbody>
${EvaluationTableRow(k)}
</tbody>`).join('');
}


function EvaluationsTable(options = {}) {
    return `
<table align="center">
    <colgroup>
        <col style="width:30%">
        <col style="width:30%">
        <col style="width:30%">
        <col style="width:10%">
    </colgroup>
        ${EvaluationsTableHeader(options.headings)}
        ${EvaluationTableBody(options.rows)}
</table>
    `
}

window.onload = function () {
    const appEl = document.querySelector("#app");
    appEl.innerHTML = EvaluationsPage()
}