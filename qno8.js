function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if there are any duplicate characters in s
      const seen = new Set();
      for (let i = 0; i < s.length; i++) {
        if (seen.has(s[i])) {
          return true;
        }
        seen.add(s[i]);
      }
      return false;
    }
  
    const mismatchedPairs = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatchedPairs.push([s[i], goal[i]]);
      }
      if (mismatchedPairs.length > 2) {
        return false;
      }
    }
  
    return (
      mismatchedPairs.length === 2 &&
      mismatchedPairs[0][0] === mismatchedPairs[1][1] &&
      mismatchedPairs[0][1] === mismatchedPairs[1][0]
    );
  }
  
  // Example usage
  const s = "ab";
  const goal = "ba";
  const result = buddyStrings(s, goal);
  console.log(result); // Output: true
  