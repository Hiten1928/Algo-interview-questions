var ladder = (beginWord, endWord, wordList) => {
    let len = 1;
    let queue = [beginWord];
    let dict = new Set(wordList);
    let seen = new Set(queue);

    while(queue.length){
        const temp = []
        for(let ele of queue){
            if(ele === endWord){
                return len;
            }

            let arr = ele.split('');
            for(let i=0; i<arr.length; i++){
                for(let j=0; j <= 26; j++){
                    arr[i] = String.fromCharCode(97 + j);
                    const newEle = arr.join('');

                    if(!seen[newEle] && dict.has(newEle)){
                        temp.push(newEle);
                        seen.add(newEle);
                    }
                    arr[i] = ele[i]
                }
            }
        }
        queue = temp;
        len++;
    }
    return len;
}


let result = ladder("hit", "cog", ["hot","dot","dog","lot","log","cog"]);
console.log(result);