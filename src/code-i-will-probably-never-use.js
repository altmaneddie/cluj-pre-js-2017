const parents = document.getElementsByTagName("SELECT");
const optionsAttr = ["selected", "disabled", "hidden"];

for (let i=0; i<parents.length; i++){
    
    var children = parents[i].firstElementChild;
    
    for (let j = 0; j<optionsAttr.length; j++){
        
        children.setAttribute(optionsAttr[j],true);    
    };
}


// function EvaluationsTableHeader(options, tag) {
//     return `<${tag}>${options.join(`<${tag}></${tag}>`)}<${tag}>`;
// }