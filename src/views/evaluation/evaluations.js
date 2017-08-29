function EvaluationsPage(options = {}) {
    const tableData = getEvalTableData();
    const headings = tableData.headings;
    const rows = tableData.rows;
    return `
    ${Nav()}
    ${EvaluationsTable({
        items: rows,
        itemHeadings: headings
    })}
    ${Footer()}
   `
}


function EvaluationsTableHeader(options) {
    const headings = [];
    options.headings.forEach(function(el) {
        const generatedEl = `<th>${el}</th>`;
        headings.push(generatedEl);
    });
    const headingsEl = `${headings.join('')} `;
    return `
    <tr>
        ${headingsEl}
    </tr>
    `
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

const rowsElements = [];

options.items.forEach(function(rowObj){
    const generatedRow = EvaluationTableRow(rowObj);
    rowsElements.push(generatedRow);
});

const rowsEl = rowsElements.join('');
return `
<tbody>
    ${rowsEl};
</tbody>
`
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
        ${EvaluationsTableHeader({
         headings: ['Nume','Tehnologie','Nivel']
        })};
            ${EvaluationTableBody({
            items: options.items
        })}
</table>
    `
}

window.onload = function () {
    const appEl = document.querySelector("#app");
    appEl.innerHTML = EvaluationsPage()

}