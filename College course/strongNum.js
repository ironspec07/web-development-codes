// let num = parseInt(prompt("enter a number"))
let num = 145;
let temp = num;
let result = 0;
let fact = 1;

while (num>0) {
    fact = 1
    let lastDig = num%10;
    for (let i = 1; i <= lastDig; i++){
        fact = fact*i;
        console.log(fact);
    }
    result = result + fact;
    console.log(result);
    num = num/10;
}
console.log(fact);
if (result==temp) {
    // alert("Strong Number")
    console.log("Strong");
} else {
    // alert("Not a strong number")
    console.log("Not Strong");
}