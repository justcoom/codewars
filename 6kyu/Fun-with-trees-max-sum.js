class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function maxSum (root) {

    if (root === null) {
        return 0
    }
    if (root.left === null && root.right === null) {
        return root.value;
    } else if (root.left === null) {
        return root.value + maxSum(root.right)
    } else if (root.right === null) {
        return root.value + maxSum(root.left)
    }
    return root.value + Math.max(maxSum(root.left), maxSum(root.right));
}

const obj = new TreeNode(17,
    new TreeNode(3,
        new TreeNode(2)
    ),
    new TreeNode(-10,
        new TreeNode(16),
        new TreeNode(1,
            new TreeNode(13)
        )
    )
)

const obj2 = new TreeNode(5,
    new TreeNode(4,
        new TreeNode(-80),
        new TreeNode(-60)
    ),
    new TreeNode(10,
        new TreeNode(-90)
    )
)

console.log(maxSum(obj))
console.log(maxSum(obj2))