// // Login page

// function getLoginPageData() {
//     return {
//         Feedback :[
//             { header: "Submit new feedback",
//               paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
//             }
//         ,
//             { header: "View feedback results",
//               paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
//             }
//         ]
//     }
//}


// Evaluations page
function getEvalTableData(){
    return {
        headings: ["Nume", "Technology", "Nivel", ""],
        rows: [
            {
                name: "Adrian Popescu",
                technology: "Javascript",
                level: "Mid 2"
            },
        
            {
                name: "Dragan Roxana",
                technology: "PHP",
                level: "Mid 1"
            },
        
            {
                name: "Florescu Mihai",
                technology: "Javascript",
                level: "Junior 3"
            },
            
            {
                name: "Gheorghe Andrei",
                technology: "Ruby",
                level: "Senior 1"
            }
        ]
    }
}



// New Evaluation page

function getTechnicalData() {
    return {
        title: 'Technical Level',
        headings: ['Trainee', 'Junior', 'Middle', 'Senior'],
        columnData: [
            { inputLevels: ['Trainee'] },
            { inputLevels: ['Junior1', 'Junior2', 'Junior3'] },
            { inputLevels: ['Middle1', 'Middle2', 'Middle3'] },
            { inputLevels: ['Senior1', 'Senior2', 'Senior3'] },
        ],
    };
}

function getTextareaData() {
    return {
        textarea:
        [{
            label: 'Should the candidate be hired?',
            placeholder: 'The type of project that is suitable for the candidate &#13;&#10;Is guidance required for the candidate'
        },
        {
            label: 'General Impression',
            placeholder: '*required'
        },
        {
            label: 'Workflow, Leadership &amp; Soft Skills',
            placeholder: 'Describe the environment in which the candidate works.&#13;&#10;Describe any guidance or management experience'
        }],
    };
}

function getFieldsetData() {
    return {
        fieldset: [
            {
                legend: "OOP, Design Patterns",
                ul: [
                    {
                        label: "Classes",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Exception handling",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Version Control",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Access modifiers",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Design Patterns",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Issue Tracking",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Polymorphism",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "RegEx",
                        options: ["0", "1", "2", "3"]
                    }
                ]},
                {
                legend: "HTTP",
                ul: [
                    {
                        label: "Protocol",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Response codes",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "REST",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Headers",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Request methods",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Sessions &amp; Cookies",
                        options: ["0", "1", "2", "3"]
                    }
                ]},
            {
                legend: "HTML",
                ul: [
                    {
                        label: "Doctype",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Tags",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Basic SEO",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Syntax rules",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Attributes",
                        options: ["0", "1", "2", "3"]
                    }
                ]},
                {
                legend: "CSS",
                ul: [
                    {
                        label: "Usage",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Box modeling",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "CSS 3.0",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Selectors",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Styling",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Dynamic Stylesheet",
                        options: ["0", "1", "2", "3"]
                    }
                ]},
                {
                legend: "Javascript",
                ul: [
                    {
                        label: "Data Types &amp; variables",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Object manipulation",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "DOM Manipulation",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Functions",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Templating",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Event handling",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Prototype &amp; OOP",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Testing(unit,E2E)",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "AJAX",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Debugging",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Websockets",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Tooling",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Libraries",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Promises",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Browser Engines",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Frameworks",
                        options: ["0", "1", "2", "3"]
                    }
                ]},
                    {
                legend: "NodeJS",
                ul: [
                    {
                        label: "Backend frameworks",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Templating",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "DOM Manipulation",
                        options: ["0", "1", "2", "3"]
                    },
                    {
                        label: "Unit Testing",
                        options: ["0", "1", "2", "3"]
                    }
                ]}
            ] 
        }
}
