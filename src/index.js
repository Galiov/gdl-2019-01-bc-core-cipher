//Acción del botón que va a la siguiente pantalla después del inicio (pantalla 2).
document.getElementById("enter").addEventListener("click", showDisplay1);
//Acción de los botones cifrar y decifrar (llaman a la función).
document.getElementById("cifrar").addEventListener("click", getVl);
document.getElementById("decifrar").addEventListener("click", getVl1);
//Acción para cambiar de pantalla.
document.getElementById("cifrar").addEventListener("click", showDisplay2);
document.getElementById("decifrar").addEventListener("click", showDisplay2);
document.getElementById("clean").addEventListener("click", showDisplay2);
//Acción del botón para volver al inicio (pantalla 1).
document.getElementById("welcome").addEventListener("click", showDisplay);

//Acción para limpiar.
document.getElementById("clean").addEventListener("click", clear);
document.getElementById("welcome").addEventListener("click", clear);

//Declaro el "valor" (pantallas) de mis variables.
let firstScreen = document.getElementById("screen1");
let secondScreen = document.getElementById("screen2");
let thirdScreen =document.getElementById("screen3");

let output = document.getElementById("output");
let copyBtn = document.getElementById("copyButton");
copyBtn.onclick = function (){
  output.select();
  document.execCommand("Copy");
};

//Función para ocultar y mostrar las pantalla.
function showDisplay(){
	if (firstScreen.style.display == 'none') {
		firstScreen.style.display = 'block';
	}	
	else {
		firstScreen.style.display = 'none';

	}

	if (thirdScreen.style.display == 'none') {
		thirdScreen.style.display = 'block';
	}
	else {
		thirdScreen.style.display = 'none';
	}
}

function showDisplay2(){	
	if (secondScreen.style.display == 'none') {
		secondScreen.style.display = 'block';
	}
	else {
		secondScreen.style.display = 'none';
	}
	if (thirdScreen.style.display == 'none'){
		thirdScreen.style.display = 'block';
	}
	else {
		thirdScreen.style.display = 'none';
	}
}

function showDisplay1(){	
	if (secondScreen.style.display == 'none') {
		secondScreen.style.display = 'block';
	}
	else {
		secondScreen.style.display = 'none';
	}
	if (firstScreen.style.display == 'none'){
		firstScreen.style.display = 'block';
	}
	else {
		firstScreen.style.display = 'none';
	}
}
//Función para limpiar valores de formulario.
function clear(){
	document.getElementById("offsetNumber").value="";
	document.getElementById("input").value="";
	document.getElementById("output").value="";
}

//Función para obtener valores y llamar al código para cifrar.
function getVl(){
 let offset = document.getElementById("offsetNumber").value;
 let string = document.getElementById("input").value;
 
 let result = cipher.encode(offset, string);
 //console.log(result);
 displayResult(result);
}
//Función para obtener valores y llamar al código para decifrar.
function getVl1(){
 let offset = document.getElementById("offsetNumber").value;
 let string = document.getElementById("input").value;
 
 let result = cipher.decode(offset, string);
 //console.log(result);
 displayResult(result);
}
//Función para mostrar mi resultado en pantalla.
function displayResult (result){
  document.getElementById("output").value = result;
}

