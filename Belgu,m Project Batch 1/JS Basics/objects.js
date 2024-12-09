let person = {
    name:"Sushil",
    age:23,
    isStudent:true,
    absent:false,

    greet : function()
    {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person.name);
console.log(person["age"]);
console.log(person.greet());