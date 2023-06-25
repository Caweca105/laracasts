'use strict';

// const fruit = new Map();

// fruit.set(1, 'Banana');
// fruit.set(2, 'Apple');
// fruit.set(3, 'Strawberry');

// document.getElementById('output').innerHTML = fruit.get(2);

// fruit.delete(2);

// fruit.forEach(item => {
//     document.getElementById('output').innerHTML += '<br>' + item;
// });

// fruit.set(4, {
//     type: 'Orange',
//     color: 'orange',
//     flavor: 'orangey'
// });

// document.getElementById('output').innerHTML = fruit.get(4).flavor;

const users = new Map();

users.set({
    name: 'Andrew',
    email: 'andrew@example.com'
}, function(user) {
    document.getElementById('output').innerHTML += `${user.name} (${user.email}) <br>`;
});

const userAshley = {
    name: 'Ashley',
    email: 'ashley@example.com'
};

users.set(userAshley, function(user) {
    document.getElementById('output').innerHTML += `(${user.email}) ${user.name} <br>`;
});

users.forEach((value, key) => {
    value(key);
});

let userAshleyExists = users.has(userAshley);

console.log('userAshleyExists: ', userAshleyExists);

const fruit = new Set();

fruit.add('Banana');
fruit.add('Apple');
fruit.add('Strawberry');
fruit.add('Apple');
fruit.add('Apple');

fruit.forEach(value => {
    document.getElementById('output').innerHTML += '<br>' + value;
});