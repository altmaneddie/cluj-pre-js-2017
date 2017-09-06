function EvaluationsPage(options = {}) {
    const tempData = localStorage.getItem("Evaluations");
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
    return options.map((k, i) => `
<tr id="${i + 1}">
    <td>${k.candidate[0].value}</td>
    <td>Javascript</td>
    <td>${k.radio[0].value} </td>
    <td>Detalii<button class="detailsBtn"></button></td>
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


const detailsCreator = function (el) {
    //search for displayed divs.
    alreadyDisplayedDiv = document.querySelectorAll(".displayedDetailDiv");

    if (alreadyDisplayedDiv.length !== 0) {
        //kill already displayed div
        let childToBeRemoved = alreadyDisplayedDiv[0];
        divSlayer(childToBeRemoved);
    }

    //check if the button is + or -
    if (el.className === "detailsBtn") {
        divCreator(el);
        el.className = "minusBtn";
    } else {
        divSlayer(el);
        el.className = "detailsBtn"
    }

    //div creation function
    function divCreator(el) {
        //Div creation
        let detailDiv = document.createElement("div");
        detailDiv.setAttribute("class", "displayedDetailDiv");
        //Get parent
        const trParent = el.parentNode.parentNode
        //Apend 
        trParent.appendChild(detailDiv);
    }

    //div destroyer function
    function divSlayer(el) {
        //slay it!
        let xParent = el.parentNode;
        xParent.removeChild(el);
    }

    //get to localStorage
    const myIndex = el.id;
    const tempData = localStorage.getItem("Evaluations");
    const tableData = JSON.parse(tempData);
    //DISPLAY PART
    //li dropdown creator for div
    function divDropDownLiCreator(options = {}) {
        return options.map((k) => {
            return `
                <li>
                ${k.name}:${options.value}
                </li>
                `
        }).join("")
    }
    //li Textarea creator for div
    function divTextAreaCreator(options = {}) {
        return options.map((l, m) => {
            return `
            <li>
            Box number${m}: ${l.value}
            </li>
            `
        }).join("")
    }
    //create the ul to contain detailed grades and opinion on candidate
    function divUlCreator(options) {
        return `
        <ul>
        Notes:
        Grades: ${divRadioLiCreator}
        </ul>
        `
    }

}

