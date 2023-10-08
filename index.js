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

console.log(backpack(20, things));