class Queue{
   constructor(){
       this.data = []
   }

   add(recordToBeAdded){
       //add to the start of the queue
    this.data.unshift(recordToBeAdded)
   }

   remove(){
    return this.data.pop()
   }
}

module.exports = Queue