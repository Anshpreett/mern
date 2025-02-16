const nums = [3, 7, 5, 1, 9, 34, 38];

// WAP to print get an array of squares of all numbers
const sqrNums = nums.map((n) => {
    return n ** 2;
});

console.log(sqrNums);

const prices = ['23.432', '245.21', '4565', '999'];

console.log(parseInt('767868'));

const intPrices = prices.map((p) => {
    return parseInt(p);
});

console.log(intPrices);

const evenNums = nums.filter((n) => {
    return n % 2 === 0;
})

console.log(evenNums);

const prices2 = [12999, 4500, 2000, 9700, 3400, 1500];

const budgetPrices = prices2.filter((p) => {
    return p >= 2000 && p <= 5000;
});

console.log(budgetPrices);

const brands = ['Samsung', 'Apple', 'Motorola', 'Oppo', 'Nokia', 'Xiaomi'];

const searchedBrands = brands.filter((b) => {
    return b.toLowerCase().includes('pp')
});

console.log(searchedBrands);

const upperBrands = brands.map((b) => {
    return b.toUpperCase();
});

console.log(upperBrands);