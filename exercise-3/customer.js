var Customer = /** @class */ (function () {
    function Customer(fitstName, lastName) {
        this.firstName = fitstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer("John", "Smith");
customer.greeter();
