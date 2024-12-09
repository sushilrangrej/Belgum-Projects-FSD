let age = 6;

if(age >= 18)
{
    console.log("You are an adult");
}
else if(age >= 13)
{
    console.log("you are an teenager");
}
else{
    console.log("You are an child");
}

let canVote = age >= 18 ? "yes" : "no";
console.log(canVote);