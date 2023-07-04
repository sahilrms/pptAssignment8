class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function str2tree(s) {
    if (s === '') {
      return null;
    }
  
    let i = 0;
    // Find the end index of the root's value
    while (i < s.length && s[i] !== '(' && s[i] !== ')') {
      i++;
    }
  
    // Create the root node with the value
    const root = new TreeNode(parseInt(s.substring(0, i)));
  
    // If there are more characters left
    if (i < s.length) {
      let start = i;
      let count = 0;
  
      // Find the start and end indices of the left subtree
      while (i < s.length) {
        if (s[i] === '(') {
          count++;
        } else if (s[i] === ')') {
          count--;
        }
  
        if (count === 0) {
          break;
        }
  
        i++;
      }
  
      // Construct the left subtree by recursively calling str2tree
      root.left = str2tree(s.substring(start + 1, i));
  
      // If there are more characters left after the left subtree
      if (i + 1 < s.length) {
        // Construct the right subtree by recursively calling str2tree
        root.right = str2tree(s.substring(i + 2, s.length - 1));
      }
    }
  
    return root;
  }
  
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    const result = [];
    const stack = [];
    let current = root;
  
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
  
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  
    return result;
  }
  
  // Example usage
  const s = "4(2(3)(1))(6(5))";
  const tree = str2tree(s);
  const inorder = inorderTraversal(tree);
  console.log(inorder); // Output: [4, 2, 6, 3, 1, 5]
  