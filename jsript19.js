function main() {
    var number1 = prompt("What is your first Number?: ");
    var number2 = prompt("What is your second Number?: ");

    alert("This is the product "+product(number1, number2));
    alert("This is the quotient " + quotient(number1, number2));

}

function product(num1, num2){
    var result = num1*num2;

    return result;
}

function quotient(num1, num2){
    var result2 = num1/num2;
    return result2;

}

main();