var Solution  = function(pattern){
    this.array = [];
    this.pattern = pattern;

    console.log(this.pattern);
}

Solution.prototype.getMatch = function(num) {
    let flag = true;
    this.array.push(num);

    if (this.array.length >= this.pattern.length) {

        if(this.array.length > this.pattern.length){
            this.array.shift();
        }

        for (let i = this.pattern.length - 1; i >= 0; i--) {
            if(this.array[i] !== this.pattern[i]){
                flag = false;
            }
        }
        return flag
    }
    return false;
}

let arr = [1,0,1,0,0,1,1,0,1,1];
let pattern = [1,0,1,0,0,1];
let flag = false;

let check = function(test, patt){
    let sol = new Solution(patt);
    for(let i=0; i<test.length; i++){
       console.log(sol.getMatch(test[i]));
    }
}

check(arr, pattern)