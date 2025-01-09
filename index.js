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

const trip_miles= 1500;
let low_speed = 55
let mid_speed= 60
let high_speed= 75
let mpg1= 30
let mpg2 = 28
let mpg3 = 23
let gas_cost= 3.00;
let budget= 175.00;

// Total fuel gallons
let low_speed_fuel = Math.ceil(trip_miles / mpg1);
let mid_speed_fuel = Math.ceil(trip_miles / mpg2);
let high_speed_fuel = Math.ceil(trip_miles / mpg3);

console.log(`At ${low_speed} mph, you need ${low_speed_fuel} gallons.`)
console.log(`At ${mid_speed} mph, you need ${mid_speed_fuel} gallons.`)
console.log(`At ${high_speed} mph, you need ${high_speed_fuel} gallons`)

// Total Budget
let cheapest = low_speed_fuel * gas_cost
let average = mid_speed_fuel * gas_cost
let highest = high_speed_fuel * gas_cost

console.log(`At a ${budget} dollar budget, the ${low_speed} mph trip costs ${cheapest} dollars`)
console.log(`At a ${budget} dollar budget, the ${mid_speed} mph trip costs ${average} dollars`)
console.log(`At a ${budget} dollar budget, the ${high_speed} mph trip costs ${highest} dollars`)


// Total hours

let fastest = trip_miles / high_speed
let normal = trip_miles / mid_speed
let slowest = trip_miles / low_speed

console.log(`At ${low_speed} the trip will take ${slowest} hours`)
console.log(`At ${mid_speed} the trip will take ${normal} hours`)
console.log(`At ${high_speed} the trip will take ${fastest} hours`)


console.log(`At ${low_speed} mph, ${low_speed_fuel} gallons of fuel is needed. The cost is ${cheapest} dollars and total trip time is ${slowest} hours. At ${mid_speed} mph, ${mid_speed_fuel} gallons of fuel is needed,. The cost is ${average} dollars and total trip time is ${normal} hours. At ${high_speed} mph, ${high_speed_fuel} gallons of fuel are needed. The cost is ${highest} dollars (over budget) and total trip time is ${fastest} hours. The most cost effective trip is Trip A which is ${cheapest} dollars but Trip B would allow you to arrive sooner, in ${normal} hours`);


