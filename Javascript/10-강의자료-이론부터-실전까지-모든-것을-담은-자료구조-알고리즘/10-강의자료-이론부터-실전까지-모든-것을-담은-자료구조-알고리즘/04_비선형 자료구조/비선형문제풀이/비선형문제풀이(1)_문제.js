/* 후위 순회 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree() {
    this.root = null;
}
BinaryTree.prototype._insertNode = function (node, value) {
    if (node === null) {
        node = new Node(value);
    } else if (value < node.value) {
        node.left = this._insertNode(node.left, value);
    } else if (value > node.value) {
        node.right = this._insertNode(node.right, value);
    }

    return node;
};

BinaryTree.prototype.insert = function (value) {
    this.root = this._insertNode(this.root, value);
};

BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
    if (node === null) {
        return;
    }

    this._postOrderTraverseNode(node.left, callback);
    this._postOrderTraverseNode(node.right, callback);
    callback(node);
};

BinaryTree.prototype.postOrderTraverse = function (callback) {
    this._postOrderTraverseNode(this.root, callback);
};

/* user code */
function answer(str) {
    const binaryTree = new BinaryTree();
    let result = [];
    let char = str.split('');
    for (let i = 0; i < char.length; i++) {}

    return result;
}

/* main code */
let input = [
    // TC: 1
    'ABC',

    // TC: 2
    'FBADCEGIH',

    // TC: 3
    'CBAEDFG',
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}
