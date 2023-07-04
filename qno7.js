function decodeString(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ']') {
        let decodedString = '';
  
        // Retrieve the encoded string
        while (stack[stack.length - 1] !== '[') {
          decodedString = stack.pop() + decodedString;
        }
  
        stack.pop(); // Pop the '[' character
  
        let repeatCount = '';
  
        // Retrieve the repeat count
        while (stack.length && isDigit(stack[stack.length - 1])) {
          repeatCount = stack.pop() + repeatCount;
        }
  
        repeatCount = parseInt(repeatCount);
  
        // Repeat the decoded string and push it back to the stack
        for (let j = 0; j < repeatCount; j++) {
          stack.push(decodedString);
        }
      } else {
        stack.push(s[i]);
      }
    }
  
    return stack.join('');
  }
  
  function isDigit(char) {
    return /\d/.test(char);
  }
  
  // Example usage
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: "aaabcbc"
  