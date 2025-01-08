const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

console.log(n1 / 5);
console.log(n2 / 5);
console.log(n3 / 5);
console.log(n4 / 5);

console.log(n1 > n4);

console.log(n2 - n1);

console.log(n3 * 5);

console.log(100 / n4);

let isUnder25= n1 < 25 || n2 <25 || n3 < 25 || n4 < 25;
console.log(isUnder25);
 

const isSum50 = (n1 + n2 + n3 + n4) == 50;

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

console.log(isValid)


const a = 55
const b = 60
const c = 75
const mpg1= 30
const mpg2 = 28
const mpg3 = 23
const tripmiles= 1500;
const gascost= 3.00;
const budget= 175.00;

// Total fuel gallons
console.log(tripmiles / mpg1);
console.log(tripmiles / mpg2);
console.log(tripmiles / mpg3);

// Total Budget
console.log(50 * gascost);
console.log(53.57142857142857 * gascost);
console.log(65.21739130434783 * gascost);

// Total hours
console.log(tripmiles / a);
console.log(tripmiles / b);
console.log(tripmiles / c);

const besttrip=
`At 55 mph,  50 gallons of fuel needed, cost is $150.00 and total trip time 27 hours. At 60 mph, about 54 gallons of fuel needed, cost is about $160.00 and total trip time is 25 hours. At 75 mph, 65 gallons of fuel needed, cost is $195.00 (over budget) and totatl trip time is 20 hours. The most cost effective trip is the first option.`
console.log(besttrip);


