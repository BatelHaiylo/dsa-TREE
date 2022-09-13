function Node(data){
    this.data = data
    this.children = []
}

function Tree(rootNode){
    this.root = rootNode

    const addToTree = (nodechildrens,parentNode) =>{
        parentNode.children = [...parentNode.children,...nodechildrens]
    }
    const bfs = (wantedNode, node=this.root) => {
        nodesQueue = [node];
        // nodesQueue.unshift(tree);
        while (nodesQueue.length > 0) {
          currentNode = nodesQueue.shift();
          if (currentNode.value === wantedNode.value) {
            return currentNode;
          }
        
          for (let i = 0; i < currentNode.children.length; i++) {
            nodesQueue.push(currentNode.children[i]);
          }
        }
        return "Node not found in this tree";
    }
    const dfs = (value, node=this.root) => {
      if (node.value === value) {
      return node;
      }
      
      for (var i = 0; i < node.children.length; i++) {
        var foundNode = dfs(value, node.children[i]);
        if (foundNode) {
          return foundNode;
        }
      }
      return "Node not found in this tree";
    }

    // const SearchNode = (treeTraversalFuncAsStr,wantedNode) => {
    //     //return te searched node by the given func
    //     if(treeTraversalFuncAsStr === "bfs"){return bfs(wantedNode)}
    //     if(treeTraversalFuncAsStr === "dfs"){return dfs(wantedNode)}
    // }
    return{ 
        bfs,
        dfs,
        addToTree,
        // SearchNode,
        root
    }
}

const root = new Node("parent")
const setRoot = new Tree (root)
const child1 = new Node("first")
const child2 = new Node("second")
const child3 = new Node("third")

console.log(setRoot.addToTree([child1,child2,child3],root))
// console.log(setRoot.SearchNode("bfs",child3))
console.log(setRoot.bfs(child3))
console.log(setRoot.dfs(child3))
