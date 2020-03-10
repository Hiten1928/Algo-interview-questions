var TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null
}

var inOrderTraverse = (root) => {
    const arr = [], stack = [];

    while(stack.length){
        if(root || stack.length){
            stack.push(root.val);
            root = root.left
        } else {
            let curr = stack.pop()
            arr.push(curr.val)
            root = root.right;
        }
    }
}
