var TreeNode = function(val){
    this.val = val;
    this.left = right = null;
}

var postOrder = function(root) {
   let stack = [root], arr = []

    while(stack.length) {
       let node = stack.pop();
        arr.unshift(node.val);

        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }

    return arr;
}