'use strict';

let myPromise = new Promise((resolver, reject) => {
    // call an api
    let user = {
        name: 'Diogo',
        email: 'diogo@example.com'
    };

    setTimeout(() => {
        resolver(user);
        // reject('Sorry this is not going anywhere')
    }, 2000);
});

const getAdditionalUserData = user => {
    document.getElementById('output').innerHTML = `${user.name} (${user.email})`;

    return new Promise((resolve, reject) => {
        // calling another api to get more user data
        user.favoriteColor = 'Blue';
        user.currentDrink = 'La Croix';
    });

    setTimeout(() => {
        resolver(user);
    }, 2000);
}

myPromise.then(getAdditionalUserData)
.then((user) => {
    document.getElementById('output').innerHTML = `${user.name} (${user.email}) - ${user.currentDrink}`;
})
.catch((error) => {
    document.getElementById('output').innerHTML = error;
})

document.getElementById('output').innerHTML = "Look at my horse";