
var checkOccurence = (arr, num) => {
    let i = 0, j = arr.length - 1;

    while(i < j){
        let mid = i +  Math.floor((i + j) / 2);
        if(arr[mid] == num){
            return mid;
        }
        if(arr[mid] < num ){
            i = mid + 1;
        } else if(arr[mid] > num) {
            j = mid - 1;
        }
    }
    return -1;
}


let array = [1,2,5,6,7,8];
let input = 3;
console.log(checkOccurence(array,input))
