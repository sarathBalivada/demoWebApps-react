console.log("sum");
// print sum of 2 numbers - getting from the user;
// const a = process.argv[2]
// const b = process.argv[3];
// console.log(parseInt(a)+parseInt(b));
// console.log(a+b);

// print sum of 2 numbers - getting from the user;
const[ , , a,b] = process.argv;
const sum = (n1 , n2) => n1 + n2;
console.log(parseInt(a)+parseInt(b));
console.log(sum(+(a),+(b))); 