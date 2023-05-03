'use strict'

function solveEquation(a, b, c) {
    let arr = [];
    let d = (Math.pow(b, 2) - 4 * a * c);
    if (d < 0) {
        arr.push();
    } else if (d === 0) {
        const x = -b / (2 * a);
        arr.push(x);
    } else {
        let x = (-b + Math.sqrt(d)) / (2 * a);
        let y = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(x, y);
    }
    return arr;
}
solveEquation();

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(Number(percent))) {
        return `Неправильный параметр функции, ${percent} должен быть числом`
    } else if (isNaN(Number(contribution))) {
        return `Неправильный параметр функции, ${contribution} должен быть числом`
    } else if (isNaN(Number(amount))) {
        return `Неправильный параметр функции, ${amount} должен быть числом`
    } else if (isNaN(Number(countMonths))) {
        return `Неправильный параметр функции, ${countMonths} должен быть числом`
    }

    let percentPerMonth = percent / 100 / 12;
    let loanAmount = amount - contribution;
    let monthlyPayment = loanAmount * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
    let totalAmount = monthlyPayment * countMonths;
    return Number(totalAmount.toFixed(2))
}
let total = calculateTotalMortgage(10,0,50000,12)
console.log(total);
