const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy M31',
    price: 14999,
    colors: ['blue', 'white', 'black']
};

console.log(smartphone.brand);
// access price of the phone
// change model of the phone to 'Galaxy M32'
// add new key ram and assign 6GB value
console.log(smartphone.price);
smartphone.model = 'Galaxy M32';
smartphone.ram = '6GB';
console.log(smartphone);

const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'Galaxy M31',
        price: 14999,
        colors: ['blue', 'white', 'black']
    },
    {
        brand: 'Oppo',
        model: 'F17',
        price: 34000,
        colors: ['skyblue', 'green']
    },
    {
        brand: 'Apple',
        model: 'iPhone 12',
        price: 79900,
        colors: ['black', 'blue', 'white']
    },
    {
        brand: 'OnePlus',
        model: '8T',
        price: 42999,
        colors: ['black', 'green']
    },
    {
        brand: 'Xiaomi',
        model: 'Redmi Note 9 Pro',
        price: 13999,
        colors: ['blue', 'black']
    },
];

console.log(smartphoneList.length);
console.log(smartphoneList[0].price);
console.log(smartphoneList[0].brand);
console.log(smartphoneList[2].price);
console.log(smartphoneList.at(-1).colors[1]);
console.log(smartphoneList.at(-1).colors.unshift('red'));
console.log(smartphoneList.at(-1));

const brands = smartphoneList.map((phone) => { return phone.brand });

console.log(brands);

const budgetPhones = smartphoneList.filter((phone) => { return phone.price <= 40000 });
console.log(budgetPhones);

// WAP to get prices of all brands
// WAP to get all phones with black color

console.log(['green', 'black'].includes('black'));

const search = 'sam';

const searchResult = smartphoneList.filter((phone) => {
    return phone.brand.toLowerCase().includes(search.toLowerCase());
});

console.log(searchResult);