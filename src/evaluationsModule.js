(function () {
let detailsBtn;
let newevalBtn;
let logoutBtn;

    const render = function (container, pageContent) {
        EvaluationsPageContent = function (options = {}) {
            const tempData = localStorage.getItem("Evaluations");
            const tableData = JSON.parse(tempData);


            return `
    ${interviewApp.Nav()}
    ${interviewApp.EvaluationsTable(options.Eval.headings, tableData)}
    ${interviewApp.Footer()}
   `
        }

        interviewApp.EvaluationsTableHeader = function (options) {
            return options.map((el) =>
                `<th>${el}</th>`
            ).join('')
        }


        interviewApp.EvaluationTableRow = function (options = {}) {
            return options.map((k, i) => `
<tr id="${i + 1}">
    <td>${k.candidate[0].value}</td>
    <td>Javascript</td>
    <td>${k.radio[0].value} </td>
    <td>Detalii<button class="detailsBtn"></button></td>
</tr>
    `).join('')
        }

        interviewApp.EvaluationTableBody = function (options = {}) {
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

        interviewApp.EvaluationsTable = function (tableHeaders = {}, tableData = {}) {
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
        container.innerHTML = `${EvaluationsPageContent(pageContent)}`
    }

    //DETAILS BUTTON
    const detailsButton = function () {
        divCreator = function (el) {
            //Div creation
            let detailDiv = document.createElement("div");
            detailDiv.setAttribute("class", "displayedDetailDiv");
            //Get parent
            const trParent = el.parentNode.parentNode
            //Apend 
            trParent.appendChild(detailDiv);
            detailDiv.innerHTML = `My DIV with Details`
        }
        //div destroyer function
        divSlayer = function (el) {
            //slay it!
            let xParent = el.parentNode;
            xParent.removeChild(el);
            //change the class back
        }
        //DISPLAY PART
        //li drop down creator for div
        divDropDownLiCreator = function (options = {}) {
            return options.map((k) => {
                return `
                <li>
                ${k.name}:${options.value}
                </li>
                `
            }).join("")
        }
        //li Textarea creator for div
        divTextAreaCreator = function (options = {}) {
            return options.map((l, m) => {
                return `
            <li>
            Box number${m}: ${l.value}
            </li>
            `
            }).join("")
        }
        //create the ul to contain detailed grades and opinion on candidate
        divUlCreator = function (options) {
            return `
        <ul>
        Notes:
        Grades: ${divRadioLiCreator}
        </ul>
        `
        }
        detailsCreator = function (el) {
            //search for displayed divs
            alreadyDisplayedDiv = document.querySelectorAll(".displayedDetailDiv");

            if (alreadyDisplayedDiv.length !== 0) {
                //kill already displayed div
                let childToBeRemoved = alreadyDisplayedDiv[0];
                myBtn = childToBeRemoved.previousElementSibling.firstElementChild;
                divSlayer(childToBeRemoved);
                myBtn.className = "detailsBtn";
            }
            //check if the button is + or -
            if (el.className === "detailsBtn") {
                divCreator(el);
                el.className = "minusBtn";
            } else {
                divSlayer(el);
                el.className = "detailsBtn"
            }
            //get to localStorage
            const myIndex = el.id;
            const tempData = localStorage.getItem("Evaluations");
            const tableData = JSON.parse(tempData);
        }
    }
    const logOut = function(e){
        e.preventDefault();
        interviewApp.navigate('login');
    }
    const goToNewEval = function(e){
        e.preventDefault();
        interviewApp.navigate('newevaluation');
    }
    const setupEvents = function () {
        detailsBtns.addEventListener('click', detailsButton);
        newevalBtn.addEventListener('click', goToNewEval);
        logoutBtn.addEventListener('click', logOut);
    }
    
    const removeEvents = function () {
        detailsBtns.removeEventListener('click', detailsButton);
        newevalBtn.removeEventListener('click', goToNewEval);
        logoutBtn.removeEventListener('click', logOut);
    }
    interviewApp.evaluation = {
        init: function (container) {
            let pageContent;
            var http = new XMLHttpRequest();
            http.open("GET", "/src/data.json", true);
            http.send();
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    pageContent = JSON.parse(http.response).LoginPageData;
                    render(container, pageContent);
                    detailsBtns = document.querySelectorAll('.detailsBtn');
                    newevalBtn = document.getElementById('newEvaluationBtn');
                    logoutBtn = document.getElementById('Logout');
                    setupEvents();
                }
            }
        },
        destroy: function () {
            removeEvents();
            detailsBtns = undefined;
            newevalBtn = undefined;
            logoutBtn = undefined;
        }
    }


})()
