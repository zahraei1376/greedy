class HuffmanNode {
    constructor(char, freq, left = null, right = null) {
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

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1)
    }

    getParent(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getValue(index) {
        return this.heap[index].freq;
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    bubbleUp2(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.getValue(parentIndex) > this.getValue(index)) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleUp(childIndex) {
        if (childIndex === 0) return;
        const parentIndex = this.getParent(childIndex);
        const parentValue = this.getValue(parentIndex);
        const childValue = this.getValue(childIndex);

        if (childValue < parentValue) {
            this.swap(childIndex, parentIndex);
            this.bubbleUp(parentIndex);
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

const buildHuffmanTreeBasis2 = (charFreq) => {
    const minHeap = new HuffmanHeap();
    for (const [char, freq] of charFreq.entries()) {
        minHeap.insert(new HuffmanNode(char, freq))
    }

    for (let i = 0; i < charFreq.size - 1; i++) {
        const left = minHeap.removeMin();
        const right = minHeap.removeMin();
        const internalNode = new HuffmanNode(null, left.freq + right.freq, left, right);
        minHeap.insert(internalNode);
    }

    return minHeap.heap;
}

const buildHuffmanCodesBasis2 = (huffmanTree, prefix = '', codes = {}) => {

    if (huffmanTree) {
        if (huffmanTree.char) {
            codes[huffmanTree.char] = prefix;
        }
        buildHuffmanCodesBasis2(huffmanTree.left, prefix + "0", codes);
        buildHuffmanCodesBasis2(huffmanTree.right, prefix + "1", codes)
    }

    return codes;
}
