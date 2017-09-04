function EvaluationsPage(options = {}) {
    let tempData = localStorage.getItem("Evaluations");
    const tableData = JSON.parse(tempData);
    const tableHeaders = getTableHeaders();

    return `
    ${Nav()}
    ${EvaluationsTable(tableHeaders, tableData)}
    ${Footer()}
   `
}


function EvaluationsTableHeader(options) {
    return options.map((el) =>
        `<th>${el}</th>`
    ).join('')
}


function EvaluationTableRow(options = {}) {
    return options.map((k) => `
<tr>
    <td>${k.candidate[0].value}</td>
    <td>Javascript</td>
    <td>${k.radio[0].value} </td>
    <td>Detalii <button></button></td>
</tr>
    `).join('')
}

function EvaluationTableBody(options = {}) {
    if (options === null) {
        return `
        <tr>
        <td>No Data recorded yet</td>
        </tr>
        `
    } else {
        return `<tbody>
${EvaluationTableRow(options)}
</tbody>`
    }
}

function EvaluationsTable(tableHeaders = {}, tableData = {}) {
    return `
<table align="center">
    <colgroup>
        <col style="width:30%">
        <col style="width:30%">
        <col style="width:30%">
        <col style="width:10%">
    </colgroup>
        ${EvaluationsTableHeader(tableHeaders.headings)}
        ${EvaluationTableBody(tableData)}
</table>
    `
}
