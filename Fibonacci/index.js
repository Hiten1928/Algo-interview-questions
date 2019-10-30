var memoize = function(fn){
    const cache = {}
    //closure to return a function
    return function(...args){
        if(cache[args]){
            return cache[args]
        } else{
            const result = fn.apply(this,args)
            cache[args] = result
            return result
        }
    }
}

var slowFib = function(n){
    if(n<2) {
        return n
    }
    return slowFib(n-1) + slowFib(n-2)
}

const fib = memoize(slowFib)

module.exports = fib