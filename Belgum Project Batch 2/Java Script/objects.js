let person = {
    firstName: "Sushil",
    lastName: "Rangrej",
    age: 23,

    greet: function() {
        console.log(`Hello ${this.firstName}`);
    }
};

console.log(person.firstName);
console.log(person["age"]);
console.log(person.greet());