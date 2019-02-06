

function getValues (){
 let offset = document.getElementById("offsetNumber").value;
 let string = document.getElementById("input").value;
 let result;

 result = cipher.encode(offset, string);
 displayResult(result);
}

function displayResult (result){
  document.getElementById("result").value = result;
}

document.getElementById("cifrar").addEventListener("click", getValues);
document.getElementById("decifrar").addEventListener("click", getValues);