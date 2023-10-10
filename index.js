const things = [
    { weight: 18, value: 25 },
    { weight: 15, value: 24 },
    { weight: 10, value: 15 },
]

const pwSort = (a, b) => {
    const x1 = a.value / a.weight;
    const x2 = b.value / b.weight;
    return x2 - x1;
}

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

const divideByFraction = (a, b) => {
    if (!a || !b) throw new Error('Parameter is not a number!');
    const clacGcd = gcd(a, b);
    const numerator = a / clacGcd;
    const denominator = b / clacGcd;
    return numerator + (denominator !== 1 ? "/" + denominator : "")
}

const convertNumberToFraction = (number) => {
    const decimalIndex = number.toString().indexOf(".");
    const decimalValue = number.toString().substring(decimalIndex + 1);
    let denominator = Math.pow(10, decimalValue.length);
    let numerator = number * denominator;
    const clacGcd = gcd(numerator, denominator);
    denominator /= clacGcd;
    numerator /= clacGcd;
    return number + (denominator !== 1 ? "/" + denominator : "");
    // return Math.floor(numerator) + '/' + Math.floor(denominator);
}

const backpack = (totalMass, things) => {
    things.sort(pwSort);
    let rc = totalMass;
    const result = new Map();
    for (const thing of things) {
        if (rc === 0) {
            break;
        }
        else if (thing.weight > rc) {
            const percent = rc / thing.weight;
            const weightPercent = percent * thing.weight;
            result.set(thing.value, percent);
            rc -= weightPercent;
        } else {
            result.set(thing.value, 1);
            rc -= thing.weight;
        }
    }

    return result;
}

console.log(divideByFraction(5, 100));
console.log(convertNumberToFraction(342));
console.log(backpack(20, things));