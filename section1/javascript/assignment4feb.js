const num = 7;
let isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log('not prime');
        isPrime = false;
        break;
    }
}

if (isPrime) console.log('prime');


// 4. WAP to print all prime number in range of 40 to 130.

for (let a = 40; a <= 130; a++) {
    let isPrime = true;

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            // console.log('not prime');
            isPrime = false;
            break;
        }
    }

    if (isPrime) console.log(a);

}