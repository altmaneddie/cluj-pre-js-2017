var parents = document.getElementsByTagName("SELECT");
var attr = ["selected", "disabled", "hidden"];
var i;
var j;

for ( i=0; i<parents.length; i++){
    
    children = parents[i].firstElementChild;
    
    for (var j = 0; j<attr.length; j++){
        
        children.setAttribute(attr[j],true);
        
    };
}