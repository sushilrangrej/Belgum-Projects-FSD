let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else if(age >= 13) {
    console.log("You are not an teenager");
}else{
    console.log("You are a child");
}

let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);