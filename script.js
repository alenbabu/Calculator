
function clearDisplay(){
    document.getElementById("screen").value="";
}

function displayKey(key){
    document.getElementById("screen").value=document.getElementById("screen").value+key;
    
}
function resultDisplay(){
    var result=eval(document.getElementById("screen").value);
    document.getElementById("screen").value=result;

}
