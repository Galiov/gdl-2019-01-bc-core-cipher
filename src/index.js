
let divElement = document.getElementById(screen1);
let divElement2 = document.getElementById(screen2);
let divElement3 = document.getElementById(screen3);

function toggleVisibility(divElement2,divElement,divElement3){
 //Ocultando la division del inicio
if(divElement.style.display == 'none'){
   divElement.style.display = 'block';
 }
 else {
   divElement.style.display = 'none';
 }

 //Mostrando la division del menu
if(divElement2.style.display == 'none'){
   divElement2.style.display = 'block';
 }
 else {
   divElement2.style.display = 'none';
 }

if(divElement3.style.display == 'none'){
   divElement3.style.display = 'block';
 }
 else {
   divElement3.style.display = 'none';
 }
}

