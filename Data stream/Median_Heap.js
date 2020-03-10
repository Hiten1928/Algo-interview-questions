let medianFinder = function() {
    this.maxHeap = new Heap(Heap.maxComparator());
    this.minHeap = new Heap(Heap.minComparator());
}


medianFinder.prototype.addNum = (num) => {
    if(this.maxHeap.peek() === null || num < this.maxHeap.peek()){
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    }

    if(this.maxHeap.size - this.minHeap.size > 1){
        this.minHeap.add(this.minHeap.poll());
    } else if(this.maxHeap.size - this.minHeap.size > 1){
        this.maxHeap.add(this.maxHeap.poll());
    }
};

medianFinder.prototype.getMedian = () => {
    if(this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if(this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.minHeap.peek() + this.maxHeap.peek())/2
    }
};


class Heap {
    constructor(comparator) {
        this.size = 0;
        this.comparator = comparator;
        this.values = [];
    }

    add(val) {
        this.size++;
        this.values.push((val));
        bubbleUp();
    }

    peek(){
        return this.values[0] || null;
    }

    poll() {
        const max = this.values[0];
        const end = this.values.length - 1;

        if(this.values.length) {
            this.values[0] = end;
            this.size--;
            bubbleDown();
        }
        return max;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let parent = Math.floor((index-1)/2);

        while(this.comparator(this.values[index],this.values[parent]) < 0){
            [this.comparator[index], this.comparator[parent]] = [this.comparator[parent], this.comparator[index]];
            index = parent;
            parent = Math.floor((index - 1)/2);
        }
    }

    bubbleDown() {
        let index = 0, length = this.values.length - 1;

        while(true) {
            let left = 0,
                right = 0,
                swap = 0,
                leftIndex = index*2 + 1,
                rightIndex = index*2 + 2;

            if( leftIndex < length) {
                left  = this.values[leftIndex];
            }

            if(this.comparator(left, this.values[index])){
                swap = leftIndex;
            }

            if(rightIndex < length){
                right = this.values[rightIndex];
                if((swap != null && this.comparator(right,left) < 0) || (swap == null && this.comparator(right, this.values[index]))) {
                    swap = rightIndex
                }
            }
            if(swap == null) break;

            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;
        }
    }
}

Heap.minComparator = (a,b) => {return a-b};
Heap.maxComparator = (a,b) => {return b-a};