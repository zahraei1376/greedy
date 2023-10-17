const things = [
    { weight: 18, value: 25 },
    { weight: 15, value: 24 },
    { weight: 10, value: 15 },
    { weight: 30, value: 20 },
    { weight: 5, value: 4 },
    { weight: 8, value: 15 },
    { weight: 11, value: 5 },
    { weight: 19, value: 30 },
    { weight: 27, value: 15 },
    { weight: 20, value: 10 },
    { weight: 13, value: 10 },
    { weight: 7, value: 7 },
];

console.log(backpack(20, things));
console.log(backpackWithMiddle(20, things));
const array = [1, 4, 5, 99, 3, 6, 7];
const minHeap = new Heap();
minHeap.insertFromArray(array);
console.log(JSON.parse(JSON.stringify(minHeap.array)));
console.log(minHeap.removeMin());
console.log(JSON.parse(JSON.stringify(minHeap.array)));