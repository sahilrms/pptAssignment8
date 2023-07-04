function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length > 0 && stack[stack.length - 1] === '(') {
          stack.pop();
        } else if (stack.length > 0 && stack[stack.length - 1] === '*') {
          stack.pop();
          stack.push(char);
        } else {
          return false;
        }
      }
    }
  
    let openCount = 0;
    let starCount = 0;
  
    while (stack.length > 0) {
      const char = stack.pop();
  
      if (char === '(') {
        openCount++;
      } else if (char === '*') {
        starCount++;
      } else {
        if (openCount === 0) {
          return false;
        }
        openCount--;
      }
    }
  
    return openCount <= starCount;
  }
  
  // Example usage
  const s = "()";
  const result = isValid(s);
  console.log(result); // Output: true
  