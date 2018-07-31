function main() {
    var number1 = 12;
    var number2 = 9;

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