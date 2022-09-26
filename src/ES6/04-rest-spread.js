// Destructuracion de arreglos

let fruits = ['Kiwi','Apple','Banana','Orange'];
let [a, b, , c] = fruits;
console.log(a,b,c);
console.log([...fruits, 'Cereza']);

// Destructuracion de objetos

let user = {
    username: 'Reinaldo',
    age: 24,
    city: 'Chile'
}

let {username, age, city} = user

console.log(username, age, city);

// Spread operator

let person = {
    name: 'Reinaldo',
    age: 24
}
let country = 'CL';

let data = {
     id: 1,
    ...person, 
    country 
}

console.log(data);

// rest

const sum = (num, ...values) =>{
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);


