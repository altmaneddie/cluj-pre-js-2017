


// /\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\/
const parents = document.getElementsByTagName("SELECT");
const optionsAttr = ["selected", "disabled", "hidden"];

for (let i=0; i<parents.length; i++){
    
    var children = parents[i].firstElementChild;
    
    for (let j = 0; j<optionsAttr.length; j++){
        
        children.setAttribute(optionsAttr[j],true);    
    };
}



// /\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\//\/\/\/\/\/
function EvaluationsTableHeader(options, tag) {
    return `<${tag}>${options.join(`<${tag}></${tag}>`)}<${tag}>`;
}

// factory
(function(){
    var rootElem = document.getElementById('app');
    var isLogged = false;
    function getLoggedIn() {
        var user = JSONparse(localStorage.getItem(loggedUser));

        return !!user // if data is contained in user, it will return true
    }
    isLogged = getLoggedIn();
    var component = generateView(isLogged);
    rootElem.innerHTML = view;
    component.view;
})


var componentConstructor = function(o){

        if(o.isLogged){
            return{view: new Login(),
                initEvents: function ref
                  }
            return {
                view: new evalList(),
                initEvents:
            }
        }
}