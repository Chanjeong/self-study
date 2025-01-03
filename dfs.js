const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I']
};

const DFS = (graph, startNode) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...graph[node], ...needVisit];
    }
  }

  return visited;
};

const BFS = (graph, startNode) => {
  let visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      needVisit = [...needVisit, ...graph[node]];
    }
  }
  return visited;
};

console.log(DFS(graph, 'A'));
console.log(BFS(graph, 'A'));
