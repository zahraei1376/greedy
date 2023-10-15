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
    return numerator + (denominator !== 1 ? "/" + denominator : "");
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
            result.set(thing.value, convertNumberToFraction(percent));
            rc -= weightPercent;
        } else {
            result.set(thing.value, 1);
            rc -= thing.weight;
        }
    }

    return result;
}

const backpackWithMiddle = (totalMass, things) => {
    if (!totalMass) return;
    if (things.length === 1) {
        const thing = things[0];
        if (totalMass < thing.weight) {
            const percent = divideByFraction(totalMass, thing.weight);
            return [{ weight: `${percent} * ${thing.weight}`, value: thing.value }]
        } else {
            return [{ weight: thing.weight, value: thing.value }]
        }
    }
    const middle = things[Math.floor(things.length / 2)];
    const arrayG = [];
    const arrayE = [];
    const arrayL = [];
    let wG = 0;
    let wE = 0;
    let wL = 0;
    const pwMiddle = middle.value / middle.weight;
    for (const thing of things) {
        const pwThing = thing.value / thing.weight;
        if (pwThing > pwMiddle) {
            arrayG.push(thing);
            wG += thing.weight;
        } else if (pwThing < pwMiddle) {
            arrayL.push(thing);
            wL += thing.weight;
        } else {
            arrayE.push(thing);
            wE += thing.weight;
        }
    }

    if (wG > totalMass) {
        return backpackWithMiddle(totalMass, arrayG);
    } else if (wG + wE > totalMass) {
        return [...arrayG, ...backpackWithMiddle(totalMass - wG, arrayE)];
    } else if (wG + wE + wL > totalMass) {
        return [...arrayG, ...arrayE, ...backpackWithMiddle(totalMass - wG - wE, arrayL)]
    }
}

const findMiddleNumber = (arr) => {

    const select = (arr, k) => {
        if (arr.length <= 10) {
            arr.sort((a, b) => a - b);
            return arr[k - 1];
        }

        const sublists = [];
        for (let i = 0; i < arr.length; i += 5) {
            sublists.push(arr.slice(i, i + 5));
        }

        const medians = sublists.map(sublist => {
            return select(sublist, Math.floor(sublist.length / 2));
        });

        const medianOfMedians = select(medians, Math.floor(medians.length / 2));

        const pivot = partition(arr, medianOfMedians);

        if (k === pivot) {
            return arr[pivot];
        } else if (k < pivot) {
            return select(arr.slice(0, pivot), k);
        } else {
            return select(arr.slice(pivot + 1), k - pivot - 1);
        }
    }

    const partition = (arr, pivot) => {
        let j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= pivot) {
                swap(arr, i, j);
                j++;
            }
        }
        return j;
    }

    const swap = (arr, a, b) => {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    if (arr.length === 0) {
        return null;
    }

    const k = Math.floor(arr.length / 2);
    return select(arr, k);
}

