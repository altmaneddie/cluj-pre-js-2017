function getSubmitedData() {

    const inputsNewForm = document.querySelectorAll('.candidateDetails');
    const textAreas = document.querySelectorAll('textarea');
    const radioValues = document.querySelectorAll('.radio-test');
    const selectInputs = document.querySelectorAll('select');

    inputsData = [];
    radioData = [];
    textareaData = [];
    selectsData = [];

    inputsNewForm.forEach(function (inputs) {
        inputsData.push({
            name: inputs.name,
            value: inputs.value
        });
    })

    radioValues.forEach(function (rad) {
        if (rad.checked) {
            radioData.push({
                name: rad.name,
                value: rad.value
            });
        }
    })

    textAreas.forEach(function (inputs) {
        textareaData.push({
            name: inputs.name,
            value: inputs.value
        });
    })

    selectInputs.forEach(function (inputs) {
        selectsData.push({
            name: inputs.name,
            value: inputs.value
        });
    })

    const savedObject = {
        candidate: inputsData,
        radio: radioData,
        textarea: textareaData,
        dropDown: selectsData
    }

    var currentObj = localStorage.getItem("Evaluations");

    if (JSON.parse(currentObj) === null) {
        let arr = [];
        arr.push(savedObject);
        localStorage.setItem(`Evaluations`, JSON.stringify(arr));
  }else{
        let arr = JSON.parse(currentObj);
        arr.push(savedObject);
        localStorage.setItem(`Evaluations`, JSON.stringify(arr));
        console.log(arr);
    }
}







