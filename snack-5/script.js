const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const numbersEven = nums.filter((number) => {
    return number % 2 === 0;
});
console.log(numbersEven);

const numbersEven2 = nums.filter((number) => number % 2 === 0).map((number) => `${number} é pari`);
console.log(numbersEven2);

const numbersEven3 = [];
nums.forEach((number) => {
    (number % 2 === 0) ? numbersEven3.push(number) : null; 
});
console.log(numbersEven3)