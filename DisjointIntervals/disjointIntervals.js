var summaryRanges = function() {
    this.array = [];
}

summaryRanges.prototype.addNum = function(num) {
    this.array.push(num);
}

summaryRanges.prototype.getIntervals = function() {
    let temp = [], start = -1

    for(let i =0; i<this.array.length; i++) {
        if(start == -1){
            start = i;
            continue;
        } else {
            if(!this.array[i]){
                temp.push(start,i-1)
                start = -1;
                continue;
            }
        }
    }

    if(start !== -1){
        temp.push(start, this.array.length - 1);
    }

    return temp
}