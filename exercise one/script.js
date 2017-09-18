// AJAX
http = new XMLHttpRequest();
http.open('GET','data.txt',true);
http.send();

//View

function renderData(arg){
    const div = document.getElementById('app');
    div.innerHTML = (`Teh name is:${arg.Name} and the password is:${arg.Password}, try not to tell everyone`)
}

//AJAX data getter
function getData (){
http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status < 400){
    let dataExtracted = JSON.parse(this.responseText);
    renderData(dataExtracted);
    }
}
}
//Event listner

document.getElementById("Btn").addEventListener("click",getData);

