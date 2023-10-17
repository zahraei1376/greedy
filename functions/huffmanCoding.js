class Heap {
    constructor() {
        this.array = [];
    }

    insert(val) {
        this.array.push(val);
        this.bubbleUp(this.array.length)
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

        if (childValue > parentValue) {
            this.swap(childIndex, parentIndex);
            this.bubbleUp(parentIndex);
        }
    }
}
const huffmanCodingBasis2 = (plenty) => {

}