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
    return options.map((k) => `
<tr>
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
    //search for dispalyed divs.
    alreadyDisplayedDiv = document.getElementsByClassName("displayedDetailDiv");

    if (alreadyDisplayedDiv !== null) {
        //kill already displayed div
        let xParent = alreadyDisplayedDiv.parentNode;
        xParent.removeChild(alreadyDisplayedDiv);
        //create new div
        divCreator(el);
        //add events to new div
        divAddEvent(el);
    } else {
        //create new div
        divCreator(el);
        //add events to new div
        divAddEvent(el);
    }
    //div creation function
    function divCreator(elem) {
        //Div creation
        let detailDiv = document.createElement("div");
        detailDiv.setAttribute("class", "displayedDetailDiv");
        //Get parent
        const trParent = elem.parentNode.parentNode.parentNode; //doubt it works
        //Apend 
        trParent.appendChild(detailDiv);
    }
    //add events to new div
    function divAddEvent(elem) {
        //change display
        elem.className = "minusBtn";
        //add events to minus button
        elem.addEventListner("click", function () {
            const divSibling = elem.parentNode.nextSibling;
            divSibling.parentNode.removeChild(divSibling);
        })
    }
    //find the correct data and populate the apropiate div
    function divInnerHtml(elem) {
        //find it's index
        function findIndex() {
            var i = 0;
            while ((child = child.previousSibling) != null) {
                i++;
            }
            return i;
        }
        //get to localStorage
        const myIndex = findIndex(elem);
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
}
