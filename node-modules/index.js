console.log("Hola Mundo");
console.log("Hello Wolrd");
console.log("Ciao Mondo");

console.log(1 + 1);
console.log(4 === 5);





//************************************************************************* */
//COMMON JS
//********************************************************************** */

//prima installiamo la dipendenza axios
//poi importare axios con CommonJS
// const axios = require("axios");

//CASO A
//se vogliamo utiilizare la funzione del nostro main.js
// const sum = require("./main.js");
// //facciamo console log
// console.log(sum(5, 5));


//CASO B
// //se vogliamo utillizzare entrambe le funzioni
// const functionOfMainJs = require("./main.js");
// console.log(functionOfMainJs.sum(5, 5));
// console.log(functionOfMainJs.rest(10, 5));

//CASO B
//possiamo anche uttilizzare destructuring
// const { sum, rest }  = require("./main.js");
// console.log(sum(5, 5));
// console.log(rest(10, 5));

//************************************************************************* */
//JS MODULES
//********************************************************************** */

//importare axios con ES Modules
import axios from 'axios'
console.log(axios)

//importiamo le nostre funzioni dal file main jsvsolo con destrcuturing
import { sum, rest } from '../main.js'

//se vogliamo importare una funzione oper default e cosi
import functionPerDefault from '../main.js'

console.log(sum(5, 5));
console.log(rest(10, 5));

//function per default
console.log(functionPerDefault(10, 10, 10));
