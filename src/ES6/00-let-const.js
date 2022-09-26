// Variables let, const

//let puede cambiar el valor, const no

/*
let fruit = "Kiwi";
fruit = 'Orange';
console.log(fruit); // Orange
*/

//---------------------------------------------
//const animal = "Cat";
//animal = "Dog";
//console.log(animal); // error

/*
    let y const tiene un alcance de bloque
 */

//--------------------------------------------------------------

/*
const animals = () => {
    if (true){
        let animal1 = "Turtle"; // block scope
        const animal2 = "Zebra"; // block scope
    }
    console.log(animal1); // error
}

animals()

*/

