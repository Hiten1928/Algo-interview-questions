import { tsConstructorType } from '@babel/types'

//functions to be implemented in a graph
//addVertex(v)
//addEdge(v,w)
//printGraph()

//BFS()
//DFS()

class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices
    //The edges list of a particular node
    this.adjList = new Map()
  }

  addVertex(v) {
    this.adjList(v, [])
  }

  addEdge(v, w) {
    //Get the list with key as the source node passed in the MAP
    this.adjList.get(v).push(w)

    //Since it is undirected the graph will have an edge from w to v as well
    this.adjList.get(w).push(v)
  }

  printGraph() {
    let keys = this.adjList.keys()

    for (key in keys) {
      let keyList = this.adjList.get(key)
      let results = ''

      // /Iterate over the values of values of a node - adjacent nodes
      for (nestedKey in keyList) {
        results += nestedKey
      }

      console.log(results)
    }
  }

  bfs(source) {
    //Initally set all the visited for the node to false
    let visited = []
    for (let i = 0; i < this.numVertices; i++) {
      visited[i] = false
    }

    let q = new Queue()
    visited[source] = true

    while (!q.isEmpty()) {
      let queueEle = q.shift()

      console.log(queueEle)

      let adjListQueue = this.adjList.get(queueEle)

      for (let ele in adjListQueue) {
        let neighbour = adjListQueue[ele]

        if (!visited[neighbour]) {
          visited[neighbour] = true
          q.push(neighbour)
        }
      }
    }
  }
}
