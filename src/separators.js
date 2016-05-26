'use strict';

function thousands_separators(num) {
    var number = buildNum(num);
    return number;
}

function buildInteger(num) {
    var outputNum = "";
    var count = 0;
    for (var i = num.length - 1; i >= 0 && num.charAt(i) != '-'; i--) {
        if (count === 3) {
            outputNum += ",";
            count = 0;
        }
        outputNum += num.charAt(i);
        count++;
    }
    if (num.charAt(0) == '-') {
        outputNum += "-";
    }
    outputNum = outputNum.split("").reverse().join("");
    return outputNum;
}

function buildNum(num) {

    num = num.toString();
    var decimalPart = "";
    var outputNum;
    if (num.indexOf('.') != -1) {

        num = num.split(".");
        decimalPart = "." + num[1];
        num = num[0];

        outputNum = buildInteger(num);
    }
    else {
        outputNum = buildInteger(num);
    }
    return outputNum + decimalPart;
}

module.exports = thousands_separators;
