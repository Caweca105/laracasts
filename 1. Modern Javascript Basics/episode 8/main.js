'use strict';

let fruit = ['Banana', 'Strawberry', 'Orange', 'Apple', 'Mango', 'Grape', 'Plum', 'Pineapple', 'Watermelon', 'Cherry', 'Lemon', 'Peach', 'Pear', 'Kiwi', 'Blueberry', 'Raspberry', 'Blackberry', 'Pomegranate', 'Papaya', 'Coconut'];

// let fruitsThatContainE = []
// fruit.forEach(function (fruit) {
//     if (fruit.includes('e')) {
//         fruitsThatContainE.push(fruit);
//     }
// });

// filter example

let fruitsThatContainE = fruit.filter(f => f.includes('e'));

document.getElementById('output').innerHTML = fruitsThatContainE.join(', ');

// reduce example

let users = [
    {
        name: 'John',
        email: 'test@something.com',
        starts: 4
    },
    {
        name: 'Diogo',
        email: 'diogo@something.com',
        starts: 9
    },
    {
        name: 'Gaston',
        email: 'gaston@something.com',
        starts: 7
    }
]

let totalStars = users.reduce((stars, user) => stars += user.starts, 0);

document.getElementById('output').innerHTML += '<br>Total Stars:' + totalStars;

// map example

let userEmails = users.map(user => user.email);

document.getElementById('output').innerHTML += '<br>' + userEmails.join(', ');