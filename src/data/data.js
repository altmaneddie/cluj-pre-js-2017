function getTechinicalData() {
    return
    {
        title: "Technical Level",
        headings: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
                    { inputLevels: ["Trainee"] },
                    { inputLevels: ["Junior1", "Junior2", "Junior3"] },
                    { inputLevels: ["Middle1", "Middle2", "Middle3"] },
                    { inputLevels: ["Senior1", "Senior2", "Senior3"] }
                ]
    }
}

function getTextareaData() {
    return{
        textarea:
        [{
            label: "Should the candidate be hired?",
            placeholder: "The type of project that is suitable for the candidate &#13;&#10;Is guidance required for the candidate"
        },
        {
            label: "General Impression",
            placeholder: "*required"
        },
        {
            label: "Workflow, Leadership &amp; Soft Skills",
            placeholder: "Describe the environment in which the candidate works.&#13;&#10;Describe any guidance or management experience"
        }]
    }
}

function getFieldsetData(){
    return{
        fieldset:[
        {
            legend: "OOP, Design Patterns",
            ul:[
                {
                    label:"Classes",
                    options:["0","1","2","3"]
                },
                {
                    label:"Exception handling",
                    options:["0","1","2","3"]
                },
                {
                    label:"Version Control",
                    options:["0","1","2","3"]
                },
                {
                    label:"Access modifiers",
                    options:["0","1","2","3"]
                },
                {
                    label:"Design Patterns",
                    options:["0","1","2","3"]
                },
                {
                    label:"Issue Tracking",
                    options:["0","1","2","3"]
                },
                {
                    label:"Polymorphism",
                    options:["0","1","2","3"]
                },
                {
                    label:"RegEx",
                    options:["0","1","2","3"]
                }

            ]
        }

        ]



        }

}