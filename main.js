function Node(data){
    this.data = data
    this.children = []
}

function Tree(rootNode){
    this.root = rootNode

    const addToTree = (nodeChildrens,parentNode) =>{
        parentNode.children = [...parentNode.children,...nodeChildrens]
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


        
    }
    const SearchNode = (treeTraversalFuncAsStr,wantedNode) => {
        //return te serched node by the given func
        if(treeTraversalFuncAsStr == "bfs"){return bfs(wantedNode)}
        if(treeTraversalFuncAsStr == "dfs"){return dfs(wantedNode)}
    }
    return{ 
        addToTree,
        SearchNode,
        root
    }
}

const root = new Node("parent")
const setRoot = new Tree (root)
const child1 = new Node("first")
const child2 = new Node("second")
const child3 = new Node("third")
console.log(setRoot.addToTree([child1,child2,child3],root))
console.log(setRoot.SearchNode("bfs",child3))
