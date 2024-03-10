// var greeter = function (name) {
//     console.log("hello " + name);
// }
// greeter("John Smith");
var greeter = function (firstName, lastName) {
    console.log("Hello ".concat(firstName, " ").concat(lastName));
};
greeter("John", "Smith");
