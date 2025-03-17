// Given a node object representing a binary tree:
//
//     Node:
//         value: <int>,
//             left: <Node> or null,
//                 right: <Node> or null
//                     write a function that returns the sum of all values, including the root. Absence of a node will be indicated with a null value.
//
//                     Examples:
//
//                     10
//                     | \
//                     1  2
//                     => 13
//
//                     1
//                     | \
//                     0  0
//                     \
//                     2
//                     => 3

// return the sum of all values in the tree, including the root

// function sumTheTreeValues(root) {
//     return root === null ? 0 : root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
// }

function sumTheTreeValues(root) {
    if (!root) return 0;
    let sum = 0;
    const stack = [root]

    while (stack.length > 0) {
        let node = stack.pop()
        sum += node.value

        if (node.left !== null) {
            stack.push(node.left)
        }
        if (node.right !== null) {
            stack.push(node.right)
        }
    }
    return sum
}


console.log(sumTheTreeValues({
    value: 10,
    left: {value: 1, left: null, right: null},
    right: {value: 2, left: null, right: null}
})) // 13
console.log(sumTheTreeValues({
    value: 11,
    left: {value: 0, left: null, right: null},
    right: {value: 0, left: null, right: {value: 1, left: null, right: null}}
})) // 12