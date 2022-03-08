const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Implement a function for generating a new array which doubles the quantity and price in each object.
const doubleOjects = itemsObject.map((double) => ({
  ...double,
  peice: double.price * 2,
}));

console.log(doubleOjects);

// Implement a function for generating a new array which contains item quantity > 2 and price > 300 only.

const newArray = itemsObject.filter(
  (character) => character.quantity > 2 && character.price > 300
);

console.log(newArray);

// Implement a function to calculate the total value of the items.

const totalPrice = itemsObject.reduce(function (accumulator, item) {
  return accumulator + item.quantity + item.price;
}, 0);

console.log(totalPrice);

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of  All The Elemnts In  An Array";

// Implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const replaced = string.replace(/[^a-z0-9]/gi, " ").toLowerCase();
console.log(replaced);
