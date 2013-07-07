/**
 * Created with JetBrains WebStorm.
 * User: pmyagkov
 * Date: 07.07.13
 * Time: 18:51
 * To change this template use File | Settings | File Templates.
 */

var facts = [1];
var factsSum = 1;
for(var i = 1; i < 10; i++) {
    facts[i] = facts[i - 1] * i;
    factsSum += facts[i];
}

var successArr = [];
for (var num = 10; num < facts[7]; num++) {
    if (num == getDigitFactSum(num)) {
        successArr.push(num);
        console.error(num);
    }
}

console.log('OK');


function getDigitFactSum(number) {
    var mod = number;
    var digit;
    var factSum = 0;

    var digitArr = [];

    while(parseInt(mod / 10) != 0) {
        digit = mod % 10;
        factSum += facts[digit];
        mod = parseInt(mod / 10);

        digitArr.push({digit : digit, fact : facts[digit]});
    }

    factSum += facts[mod];
    digitArr.push({digit: mod, fact: facts[mod]});

    digitArr.reverse();

    var logStr = number + ' -> ';

    for (var i = 0; i < digitArr.length; i++) {
        var current = digitArr[i];
        logStr += current.digit + '!(' + current.fact + ') ' + (i < digitArr.length - 1 ? '+ ' : '');
    }
    logStr +=   '= ' + factSum;

    console.debug(logStr);

    return factSum;


}