function checkStrength() {
    var pass = document.getElementById("Password");
    let point = 0;
    let value = pass.value;
    if (value.length >= 8) {
        let arrayTest = 
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    console.log(point);
    
    if (point < 1) {
        document.getElementById("strengthIndicator").innerHTML = "Very Weak,Enter min 8 characters";
    }
    else if (point == 1) {
        document.getElementById("strengthIndicator").innerHTML = "Weak";
    }
    else if (point == 2) {
        document.getElementById("strengthIndicator").innerHTML = "Medium";
    }
    else if (point == 3) {
        document.getElementById("strengthIndicator").innerHTML = "Strong";
    }
    else{
        document.getElementById("strengthIndicator").innerHTML = "Very Strong";
    }
}