function EvaluationsPage(options = {}) {
    const headings = { 
        headings: ["Nume", "Technology", "Nivel", ""] 
        }

    const rows =[
        {
            name: "Adrian Popescu",
            technology: "Javascript",
            level: "mid"
        },
    
        {
            name: "Adrian Popescu2",
            technology: "Javascript2",
            level: "mid2"
        },
    
        {
            name: "Adrian Popescu3",
            technology: "Javascript3",
            level: "mid3"
        },
        
        {
            name: "Adrian Popescu4",
            technology: "Javascript4",
            level: "mid4"
        }
    ];

    return `
    ${nav()}
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
    `;
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