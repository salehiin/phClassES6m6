

const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce( (previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p+c, 0);
console.log(sum);

const someone = ['z', 'a', 'i', 'y', 'a', 'n']
const name = someone.reduce((p, c) => p+c, '')
console.log(name)