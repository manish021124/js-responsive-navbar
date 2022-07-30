let x = window.matchMedia("(min-width: 768px)");

myFunction(x);
x.addListener(myFunction);
document.getElementById('btn').addEventListener("click", show);


function myFunction(x){
    if(x.matches){
        document.getElementById('list').style.visibility = "visible";
    }else{
        document.getElementById('list').style.visibility = "hidden";
    }
}

function show(){
    document.getElementById('list').style.visibility = "visible";
}

