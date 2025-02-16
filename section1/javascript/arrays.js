const arr = [34, 'hello', true, null];

console.log(arr);
console.log(Array.isArray(arr));

const movies = ['Spiderman', 'Badass Ravi Kumar', 'Baazigar', 'Thor', '1920', 'Kanchana'];

console.log(movies.length); // also works for strings

// indexing
console.log(movies[1]);  // also works for strings
console.log(movies.indexOf('Baazigar')); // also works for strings
console.log(movies.at(-2)); // also works for strings

movies[1] = 'Interstellar';
console.log(movies);

// slicing
console.log(movies.slice(2, 5));
console.log(movies.slice(2, 50));
console.log(movies.slice(2));

// adding and removing elements
movies.push('Ironman');  // adds new element at the end
movies.unshift('Dangal');  // adds new element at the beginning
console.log(movies);

movies.pop();  // removes last element
movies.shift();  // removes first element

console.log(movies);
// movies.splice(2, 2); // removing elements
// movies.splice(2, 2, 'Deadpool', 'Superman');
movies.splice(2, 0, 'Deadpool', 'Superman');

console.log(movies);