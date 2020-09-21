class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
  
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
  
    _root() {
        let result = this.root;
        return result.value;
    }
  
    insert(key, value) {
        let newNode = new Node(key, value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            const insertNode = (node) => {
                if (key < node.key) {
                    if (node.left === null) {
                        node.left = newNode;
                    } else {
                        insertNode(node.left);
                    }
                } else {
                    if (node.right === null) {
                        node.right = newNode;
                    } else {
                        insertNode(node.right);
                    }
                }
            }
            insertNode(this.root);
        } 
        return this; 
    }

    search(key) {
        let currentNode = this.root;

        while (currentNode) {
            if (key === currentNode.key) {
                return currentNode.value;
            }
            if (key < currentNode.key) {
                currentNode = currentNode.left;
            } 
            if (key > currentNode.key) {
                currentNode = currentNode.right;
            }
        }
    }

    traverse(value) {
        if (value) {
            let result = [];
            const transfer = (node) => {
                if (node.left) {
                    transfer(node.left);
                }
                result.push(node.value);
                if (node.right) {
                    transfer(node.right);
                }
            };
            transfer(this.root);
            return result;
        } else {
            let result = [];
            const transfer = (node) => {
                if (node.right) {
                    transfer(node.right);
                }
                result.push(node.value);
                if (node.left) {
                    transfer(node.left);
                }
            };
            transfer(this.root);
            return result;
        }  
    }

    contains(value) {
        let arr = this.traverse(true);
        let ans;
        arr.some((elem) => {
            if (value === elem) {
                return ans = true;
            } else {
                return ans = false;
            }
        });
        return ans;
    }
}
  
let bst = new BinarySearchTree();

bst.insert(15, 'fifteen')
    .insert(13, 'thirteen')
    .insert(11, 'eleven')
    .insert(14, 'fourteen')
    .insert(17, 'seventeen')
    .insert(19, 'nineteen')
    .insert(16, 'sixteen');

console.log(bst.traverse(true));
console.log(bst.traverse(false));

console.log(bst.contains('sixteen'));
console.log(bst.contains('two'));

console.log(bst.search(14));

console.log(bst._root());

console.log(bst);