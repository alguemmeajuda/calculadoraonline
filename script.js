let displayvalue="";
function inserirvalor(value){
    displayvalue+= value;
    document.getElementById("display").value=displayvalue;
} 


function apagar(value){
    displayvalue=" ";
    document.getElementById("display").value=" ";
} 

function igual(value){
    try{
        const result= eval(displayvalue);
        document.getElementById("display").value=result;
         displayvalue=
         result.toString();
    }catch (error){
        document.getElementById("display").value= "Error";
    }
}
