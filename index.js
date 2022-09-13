function breadthFirstSearch (root, wantedNode){
    const visitedNodes = []
    if(root != null){
        if(root.children.length > 1){
            root.children.map(node => {
                if(node != null ){
                    if(node.data == wantedNode.data){return node}
                    else if(visitedNodes.includes(node)){continue}
                    else{visitedNodes.push(node)}
                }
            })
        }
    }else{return "Node not found in this tree"}
}
function bfs(value, tree) {
    queue = [];
    queue.unshift(tree);

    while (queue.length > 0) {
      curNode = queue.pop();
      if (curNode.value === value) {
        return curNode;
      }
  
      for (let i = 0; i < curNode.children.length; i++) {
        queue.unshift(curNode.children[i]);
      }
    }
    return "Node not found in this tree";
  }
  const bfs = (wantedNode) => {
    //log all the tree value
    if(this.root == null){return "empty tree"}searchNode(this.root)
    function searchNode(parentNode){
        if(parentNode.children.lenght>0){
            parentNode.children.map((child,index) => {
                if(child.data == wantedNode.data){
                    return child
                }
                if(index == parentNode.children.lenght-1){
                    searchNode(parentNode.children[0])}
            })
        }
        else{
            // pass to the next sibling
            return "Node not found in this tree"
        }
    }
}

// Check current node - if found, return node
// For that node find the length of children
// For that length, recursively repeat search

const dfs = (value, node) => {

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

  const dfs = () => {
    //log all the tree value
    let visited = []
    if(this.root == null){return "empty tree"}searchNode(this.root)
    function searchNode(parentNode){
        if(parentNode.children.lenght>0){
            parentNode.children.map((child,index) => {
                if(child.data == wantedNode.data){
                    return child
                }
                else{
                    visited.push(parentNode.children.pop(child))
                    searchNode(child)
                }
            })
        }
        else{
            return "Node not found in this tree"
        }
    }
