var TreeNode = function(val){
    this.val = val;
    this.left = right = null;
}

var PreOrder = function(root) {
    let stack = [root], arr = [];

    if(root  == null) return arr;

    while(stack.length) {
        let node = stack.pop();
        arr.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
}