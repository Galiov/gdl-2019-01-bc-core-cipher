window.cipher = {
  
encode: (offset, string)=> {
//Declaro un string nuevo vacio donde voy a guardar mi mensaje encriptado
let newString = '';
let i;
 //Ciclo for para encriptar letra por letra
 for(i = 0; i < string.length; i++){

//Guardo el caracter en la posicion i en una variable
	let x = string.charCodeAt(i);

		//Si el valor de desplazamiento es mayor a 26, agarro el residuo
		//para que empiece nuevamente el abecedario
	if(offset > 26){
		offset = offset % 26;
	}

		//Defino el rango de las letras del abecedario, dentro de ASCII
	if ((x >= 65) && (x <= 90)){

		//Aplico la formula de cifrado y guardo el caracter nuevo en una variable
	let y = String.fromCharCode(((x - 65 + offset)%26) + 65);
		//Actualizo mi nuevo string, concatenando las letras cifradas
	newString = newString + y;
	}
	}
	
	return newString;
	},

decode: (offset, string) => {
let newString = '';
let i;
	for(i = 0; i < string.length; i++){
		let x = string.charCodeAt(i);
		if (offset > 26) {
			offset = offset % 26;
		}
		if((x >= 65) && (x <= 90)){
		let y = String.fromCharCode(((x + 65 - offset)%26) +65);
		newString = newString + y;
		}	
		}
	return newString;
	},
};
