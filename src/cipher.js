window.cipher = {
  // ... 
};


const x = 4;
const y = 5;

function add(x,y){
    let resultado = x + y;
    return resultado;
}

console.log(add(3,3));

function multiply(num1, num2){
	return num1*num2
}

const menu1 = ['Pozole', 'Tacos al Pastor', 'Ceviche', 'Pizza']; //Ceviche
const menu2 = ['Birria', 'Enchiladas', 'Tacos al Pastor']; //Tacos
const menu3 = ['Empanada Chilena', 'Quesadilla']; //Empanada
const menu4 = ['Sushi','Hamburguesa', 'Waffles', 'Torta']; //Hamburguesa
const menu5 = ['Spaggetti', 'Sopes']; //

const orden = (menu) => {
    for(let i=0; i<menu.length-1;i++){
    	console.log(menu[i]);

    }
}
orden(menu5)