var rob = (nums) => {
    let prev = 0, curr = 0;

    for(let num of nums){
        let temp = curr;
        curr = Math.max(prev + num, curr);
        prev= temp;
    }

    return curr;
}

let arr = [1,2,3,1]
console.log(rob(arr));