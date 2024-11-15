// //diciamo che creiamo una funzione

// function sum(a,b){
//     return a + b
// }

// function rest(a,b){
//     return a - b
// }

// //CASO A
// //vogliamo utilizarla in un altro module del nostro progetto, dobbiamo fare
// // module.exports = sum

// //CASO B
// // se vogliamo uttilizzare due funzioni, creiamo un oggetto
// module.exports = { sum, rest }  


//************************************************************************* */
//JS MODULES
//********************************************************************** */

//diciamo che creiamo una funzione

export function sum(a,b){
    return a + b
}

export function rest(a,b){
    return a - b
}

//funzione che si sporta per default
export default function superSum(a,b,c){
    return a + b + c
}