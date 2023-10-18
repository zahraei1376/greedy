////////////////////////////////////////bacpack
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
////////////////////////////////////////huffman
const text = "this is an example for huffman encoding I'm zahra Alipour";
const charFreq = new Map();
for (const char of text) {
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
}

console.log(huffman(charFreq));
//////////////////////////////////////activitySelection
const lists = [
    {
        "start": 1,
        "end": 4
    },
    {
        "start": 0,
        "end": 6
    },
    {
        "start": 3,
        "end": 5
    },
    {
        "start": 3,
        "end": 8
    },
    {
        "start": 5,
        "end": 7
    },
    {
        "start": 6,
        "end": 10
    },
    {
        "start": 5,
        "end": 9
    },
    {
        "start": 8,
        "end": 12
    },
    {
        "start": 8,
        "end": 11
    },
    {
        "start": 2,
        "end": 13
    },
    {
        "start": 11,
        "end": 14
    },
];

console.log(activitySelection(lists));