class Customer {
    private firstName: String;
    private lastName: String;

    constructor(fitstName: string, lastName: string) {
        this.firstName = fitstName;
        this.lastName = lastName;
    }

    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

