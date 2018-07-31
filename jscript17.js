
function main()
{
    var varibleNum1 = parseInt(7);
    var varibleNum2 = parseInt(7);
    var varibleNum3 = parseInt(7);
    var total= sum(varibleNum1,varibleNum2,varibleNum3);
    alert("Your total is "+ total)
}

function sum(num1,num2,num3)
{
    var result = num1+num2+num3;
    return result;
}

main();