const fruits = ['apple', 'orange', 'banana', 'kiwi', 'mango'];

// access 2nd, 3rd and 4th elements
console.log(fruits.slice(1, 4));

// add 2 fruits after apple
fruits.splice(1, 0, 'grapes', 'cherry');
console.log(fruits);

// remove 2nd last element
fruits.splice(-2, 1);

// remove orange, banana and insert pineapple
fruits.splice(1, 2, 'pineapple');