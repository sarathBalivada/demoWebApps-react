console.log("Hello , Sarath");

// function double(n) {
//     return n*2;
// }

console.log(process.argv);
const num = process.argv[2];
console.log(num);

const double = (n) => n*2;
console.log(double(num));

console.log("This is a better way");

