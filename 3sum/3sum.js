var threesum = function(nums){
    let lo =0, hi = 0, length = nums.length, result = [], final = [];

    for(let i = 0; i<nums.length; i++){
        lo = i + 1;
        hi = length - 1;

        while(lo < hi){
            const temp = []
            if(nums[i] + nums[lo] + nums[hi] == 0){
                temp.push(nums[i]);
                temp.push(nums[lo]);
                temp.push(nums[hi]);
                console.log(temp);
                result.push(temp);
                lo++;
                hi--;
            } else {
                if(nums[i] + nums[lo] + nums[hi] > 0){
                    hi--;
                } else {
                    lo++;
                }
            }
        }

    }
    console.log(result);
}

let arr = [-1, 0, 1, 2, -1, -4];

threesum(arr)