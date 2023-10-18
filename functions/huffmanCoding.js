class Heap {
    constructor() {
        this.array = [];
    }

    insert(val) {
        this.array.push(val);
        this.bubbleUp(this.array.length - 1)
    }

    getParent(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getValue(index) {
        return this.array[index];
    }

    swap(i, j) {
        const temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
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

    insertFromArray(array) {
        for (const element of array) {
            this.insert(element);
        }
    }

    heapify(index) {
        const left = this.array[2 * index + 1];
        const right = this.array[2 * index + 2];
        if (left || right) {
            if (left > right) {
                this.array[index] = right;
                this.heapify(2 * index + 2);
            } else {
                this.array[index] = left;
                this.heapify(2 * index + 1);
            }
        } else {
            this.array.splice(index, 1);
        }
    }

    removeMin() {
        if (this.array.length === 0) {
            throw new Error("heap is empty");
        }
        const out = this.array[0];
        this.heapify(0);
        return out;
    }

    findMin() {
        return this.array[0];
    }
}
const huffmanCodingBasis2 = () => {

}