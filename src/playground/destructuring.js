import cloneDeep from 'lodash.clonedeep';

// const person = {
//   name: 'Dwiky',
//   age: '22',
//   location: {
//     city: 'Jakarta',
//     temp: 25
//   }
// };

// console.log(`${person.name} is ${person.age}.`);

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// console.log(`It's ${person.location.temp} in ${person.location.city}.`);

// const { temp: localTemp, city } = person.location;

// console.log(`It's ${localTemp} in ${city}.`);

// const doppelganger = cloneDeep(person);

// console.log(`${person.name} is ${person.age}. He is in ${person.location.city}`);

// console.log(doppelganger);

// doppelganger.location.city = 'New York';

// console.log(`${person.name} is ${person.age}. He is in ${person.location.city}`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName,,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);