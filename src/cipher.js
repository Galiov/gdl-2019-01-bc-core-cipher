window.cipher = {
  
encode: (offset, string) => {

//Declaro un string nuevo vacio donde voy a guardar mi mensaje encriptado
let offsetAsAnumber = parseInt(offset, 10);
let newString = '';
let i;

 for(i = 0; i < string.length; i++){

//Guardo el caracter en la posicion i en una variable
	let x = string.charCodeAt(i);
	if(offsetAsAnumber > 26){
	offsetAsAnumber = offsetAsAnumber % 26;
	}

	if((x >= 65) && (x <= 90)){

	let y = String.fromCharCode(((x - 65 + offsetAsAnumber)%26) +65);
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
		//if (offset > 26) {
			//offset = offset % 26;
		//}
		if((x >= 65) && (x <= 90)){
		let y = String.fromCharCode(((x + 65 - offset)%26) +65);
		newString = newString + y;
		}	
		}
	return newString;
	},
};
