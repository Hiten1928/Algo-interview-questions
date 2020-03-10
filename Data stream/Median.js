/**
 * initialize your data structure here.
 */
let MedianFinder = function() {
    this.array = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let min = 0, end = this.array.length - 1;

    while(min <= end){

        let mid = Math.floor((min + end/2));

        if(num > this.array[mid]){
            min = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    this.array.splice(min, 0, num)
};

/**
 * @return {number}
 */

MedianFinder.prototype.findMedian = function() {

    if(this.array.length % 2 == 0){

        let mid = (this.array.length/2);
        return ((this.array[mid] + this.array[mid - 1])/2);

    } else {

        let mid = Math.floor(this.array.length/2)
        return this.array[mid];
    }

};