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
        const node = new Node(key, value);

        if(!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        } 
        return this;
    }

    insertNode(parent, nodeToInsert) {
        if (parent.key > nodeToInsert.key) {
            if(parent.left) {
                this.insertNode(parent.left, nodeToInsert);
            } else {
                parent.left = nodeToInsert;
            }
        } else {
            if(parent.right) {
                this.insertNode(parent.right, nodeToInsert);
            } else {
                parent.right = nodeToInsert;
            }
        }
    }

    search(key) {
        const {node} = this.searchNode(null, this.root, key);
        return node.value;
    }  

    searchNode(parent, node, key) {
        if(!node) {
            return {};
        } else if(node.key === key) {
            return {node, parent}
        }

        if(key > node.key) {
            return this.searchNode(node, node.right, key);
        } else {
            return this.searchNode(node, node.left, key);
        }
    }


    traverse(value) {
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
        if (value) {
            return result;
        } else {
            return result.reverse();
        }  
    }

    contains(value) {
        let arr = this.traverse(true);

        return arr.some((elem) => elem === value);
    }

    minNode(node, parent) {
        if(!node) {
            return null;
        }
        if(node.left) {
            return this.minNode(node.left, node);
        }
        return {parent, node};
    }

    delete(key) {
        const {node: nodeToDelete, parent: parentToDelete} = this.searchNode(null, this.root, key);
        const {node: minNode, parent: minParent} = this.minNode(nodeToDelete.right);

        if(parentToDelete.right.key === key) {
            parentToDelete.right = minNode;
        } else {
            parentToDelete.left = minNode;
        }

        if(minParent) {
            minParent.left = null;
            minNode.right = nodeToDelete.right;
        }

        minNode.left = nodeToDelete.left;
    }
}
  
let bst = new BinarySearchTree();


bst
    .insert(15, 'fifteen')
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