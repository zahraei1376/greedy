class HuffmanNode {
    constructor(char, freq, left, right) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}
class HuffmanHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1)
    }

    getParent(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getValue(index) {
        return this.heap[index];
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    bubbleUp(childIndex) {
        if (childIndex === 1) return;
        const parentIndex = this.getParent(childIndex);
        const parentValue = this.getValue(parentIndex);
        const childValue = this.getValue(childIndex);

        if (childValue < parentValue) {
            this.swap(childIndex, parentIndex);
            this.bubbleUp(parentIndex);
        }
    }

    insertFromheap(heap) {
        for (const element of heap) {
            this.insert(element);
        }
    }

    heapify(index) {
        const left = this.heap[2 * index + 1];
        const right = this.heap[2 * index + 2];
        if (left || right) {
            if (left > right) {
                this.heap[index] = right;
                this.heapify(2 * index + 2);
            } else {
                this.heap[index] = left;
                this.heapify(2 * index + 1);
            }
        } else {
            this.heap.splice(index, 1);
        }
    }

    removeMin() {
        if (this.heap.length === 0) {
            throw new Error("heap is empty");
        }
        const out = this.heap[0];
        this.heapify(0);
        return out;
    }

    findMin() {
        return this.heap[0];
    }
}
const huffmanCodingBasis2 = () => {
    const text = "this is an example for huffman encoding";
    const charFreq = new Map();
    for (const char of text) {
        charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }
}